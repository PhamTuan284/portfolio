import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { throttleFetch } from "../../../utils/networkThrottle";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";
import VirtualizationCaseSkeleton from "./VirtualizationCaseSkeleton";
import "./VirtualizationCase.scss";

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const ITEM_HEIGHT = 100;
const BUFFER_SIZE = 5;

const VirtualizationCase: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isThrottled, setIsThrottled] = useState(false);
  const [isVirtualized, setIsVirtualized] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [usersResponse, postsResponse] = await Promise.all([
          throttleFetch("https://jsonplaceholder.typicode.com/users"),
          throttleFetch("https://jsonplaceholder.typicode.com/posts"),
        ]);

        const usersData = await usersResponse.json();
        const postsData = await postsResponse.json();

        setUsers(usersData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const selectedUserPosts = useMemo(() => {
    if (!selectedUser) return [];
    return posts.filter((post) => post.userId === selectedUser.id);
  }, [posts, selectedUser]);

  const { startIndex, endIndex, totalHeight, visibleItems } = useMemo(() => {
    const containerHeight = containerRef.current?.clientHeight || 600;
    const startIndex = Math.max(
      0,
      Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_SIZE
    );
    const endIndex = Math.min(
      filteredUsers.length,
      Math.ceil((scrollTop + containerHeight) / ITEM_HEIGHT) + BUFFER_SIZE
    );
    const totalHeight = filteredUsers.length * ITEM_HEIGHT;
    const visibleItems = filteredUsers.slice(startIndex, endIndex);

    return { startIndex, endIndex, totalHeight, visibleItems };
  }, [filteredUsers, scrollTop]);

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  }, []);

  const toggleThrottling = useCallback(() => {
    setIsThrottled((prev) => !prev);
    setUsers([]);
    setPosts([]);
    setLoading(true);
  }, []);

  const toggleVirtualization = useCallback(() => {
    setIsVirtualized((prev) => !prev);
  }, []);

  if (loading) {
    return <VirtualizationCaseSkeleton />;
  }

  return (
    <div className="virtualization-case">
      <div className="header-container">
        <h2>Virtual List Performance Demo</h2>
        <div className="button-group">
          <button
            className={isThrottled ? "active" : ""}
            onClick={toggleThrottling}
          >
            {isThrottled ? "Normal Network" : "Simulate Slow Network"}
          </button>
          <button
            className={isVirtualized ? "active" : ""}
            onClick={toggleVirtualization}
          >
            {isVirtualized ? "Disable Virtualization" : "Enable Virtualization"}
          </button>
        </div>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="content-container">
        <div className="users-list">
          <div className="users-header">Users ({filteredUsers.length})</div>
          <div
            ref={containerRef}
            className="users-container"
            onScroll={handleScroll}
          >
            {isVirtualized ? (
              <div className="users-inner" style={{ height: totalHeight }}>
                {visibleItems.map((user, index) => (
                  <div
                    key={user.id}
                    className={`user-item ${
                      selectedUser?.id === user.id ? "selected" : ""
                    }`}
                    style={{
                      position: "absolute",
                      top: (startIndex + index) * ITEM_HEIGHT,
                      left: 0,
                      right: 0,
                    }}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                    <div className="user-company">{user.company.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="users-inner">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className={`user-item ${
                      selectedUser?.id === user.id ? "selected" : ""
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                    <div className="user-company">{user.company.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="user-details">
          <div className="details-header">User Details</div>
          <div className="details-content">
            {selectedUser ? (
              <>
                <div className="detail-line">
                  <div className="label">Name</div>
                  <div className="value">{selectedUser.name}</div>
                </div>
                <div className="detail-line">
                  <div className="label">Email</div>
                  <div className="value">{selectedUser.email}</div>
                </div>
                <div className="detail-line">
                  <div className="label">Phone</div>
                  <div className="value">{selectedUser.phone}</div>
                </div>
                <div className="detail-line">
                  <div className="label">Company</div>
                  <div className="value">{selectedUser.company.name}</div>
                </div>
                <div className="detail-line">
                  <div className="label">Address</div>
                  <div className="value">
                    {`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}
                  </div>
                </div>

                <div className="posts-section">
                  <div className="posts-header">
                    Posts ({selectedUserPosts.length})
                  </div>
                  {selectedUserPosts.map((post) => (
                    <div key={post.id} className="post-item">
                      <div className="post-title">{post.title}</div>
                      <div className="post-body">{post.body}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="detail-line">
                <div className="value">Select a user to view details</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualizationCase;
