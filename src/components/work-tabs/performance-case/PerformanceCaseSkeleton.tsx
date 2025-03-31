import "./PerformanceCaseSkeleton.scss";

export default function PerformanceCaseSkeleton() {
  return (
    <div className="performance-case-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
        <div className="skeleton-button"></div>
      </div>

      <div className="skeleton-search">
        <div className="skeleton-input"></div>
      </div>

      <div className="skeleton-content">
        <div className="skeleton-posts">
          <div className="skeleton-posts-header"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton-post">
              <div className="skeleton-post-title"></div>
              <div className="skeleton-post-body"></div>
              <div className="skeleton-post-footer"></div>
            </div>
          ))}
        </div>

        <div className="skeleton-comments">
          <div className="skeleton-comments-header"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="skeleton-comment">
              <div className="skeleton-comment-title"></div>
              <div className="skeleton-comment-email"></div>
              <div className="skeleton-comment-body"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
