import { useState, useEffect, useMemo, useCallback } from "react";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import PerformanceCaseSkeleton from "./PerformanceCaseSkeleton";
import { throttleFetch } from "../../../utils/networkThrottle";
import "./PerformanceCase.scss";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export default function PerformanceCase() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isThrottled, setIsThrottled] = useState(false);
  const [throttleDelay, setThrottleDelay] = useState(0);

  // Fetch data with error handling and loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch posts with pagination and comments
        const [postsResponse, commentsResponse] = await Promise.all([
          fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
          ),
          fetch("https://jsonplaceholder.typicode.com/comments?_limit=500"),
        ]);

        if (!postsResponse.ok || !commentsResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const postsData: Post[] = await postsResponse.json();
        const commentsData: Comment[] = await commentsResponse.json();

        // Filter out any duplicate posts
        setPosts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const newPosts = postsData.filter(
            (post) => !existingIds.has(post.id)
          );
          return [...prev, ...newPosts];
        });

        // Filter out any duplicate comments
        setComments((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          const newComments = commentsData.filter(
            (comment) => !existingIds.has(comment.id)
          );
          return [...prev, ...newComments];
        });

        setHasMore(postsData.length === 20);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // Memoize filtered posts to prevent unnecessary recalculations
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  // Memoize comments for selected post
  const selectedPostComments = useMemo(() => {
    if (!selectedPost) return [];
    return comments.filter((comment) => comment.postId === selectedPost.id);
  }, [comments, selectedPost]);

  // Memoize the comment count calculation
  const commentCounts = useMemo(() => {
    return comments.reduce((acc, comment) => {
      acc[comment.postId] = (acc[comment.postId] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  }, [comments]);

  // Debounced search handler
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Load more posts
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loading, hasMore]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    const loadMoreTrigger = document.getElementById("load-more-trigger");
    if (loadMoreTrigger) {
      observer.observe(loadMoreTrigger);
    }

    return () => {
      if (loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger);
      }
    };
  }, [hasMore, loading, loadMore]);

  // Toggle network throttling
  const toggleThrottle = useCallback(() => {
    setIsThrottled((prev) => !prev);
    setThrottleDelay((prev) => (prev === 0 ? 2000 : 0)); // 2 seconds delay for slow 4G simulation
    // Reset data when toggling throttle
    setPosts([]);
    setComments([]);
    setPage(1);
  }, []);

  if (loading && page === 1) {
    return <PerformanceCaseSkeleton />;
  }

  return (
    <div className="performance-case">
      <div className="header-container">
        <h2>Performance Optimization Case Study</h2>
        <button
          className={`throttle-button ${isThrottled ? "active" : ""}`}
          onClick={toggleThrottle}
        >
          {isThrottled ? "Normal Network" : "Simulate Slow Network"}
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="content-container">
        <div className="posts-list">
          <h3>Posts ({filteredPosts.length})</h3>
          {filteredPosts.map((post, index) => (
            <div
              key={`post-${post.id}-${index}`}
              className={`post-item ${
                selectedPost?.id === post.id ? "selected" : ""
              }`}
              onClick={() => setSelectedPost(post)}
            >
              <h4>{post.title}</h4>
              <p>{post.body.substring(0, 100)}...</p>
              <span className="comment-count">
                Comments: {commentCounts[post.id] || 0}
              </span>
            </div>
          ))}
          <div id="load-more-trigger" className="load-more-trigger">
            {loading && (
              <div className="loading-more">Loading more posts...</div>
            )}
            {!hasMore && <div className="no-more">No more posts to load</div>}
          </div>
        </div>

        {selectedPost && (
          <div className="comments-section">
            <h3>Comments for: {selectedPost.title}</h3>
            <div className="comments-list">
              {selectedPostComments.map((comment, index) => (
                <div
                  key={`comment-${comment.id}-${index}`}
                  className="comment-item"
                >
                  <h4>{comment.name}</h4>
                  <p>{comment.email}</p>
                  <p>{comment.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
