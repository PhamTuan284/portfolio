import "./VirtualizationCaseSkeleton.scss";

export default function VirtualizationCaseSkeleton() {
  return (
    <div className="virtualization-case-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
        <div className="skeleton-buttons">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>

      <div className="skeleton-search">
        <div className="skeleton-input"></div>
      </div>

      <div className="skeleton-content">
        <div className="skeleton-users-list">
          <div className="skeleton-users-header"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton-user-item">
              <div className="skeleton-user-name"></div>
              <div className="skeleton-user-email"></div>
              <div className="skeleton-user-company"></div>
            </div>
          ))}
        </div>

        <div className="skeleton-user-details">
          <div className="skeleton-details-header"></div>
          <div className="skeleton-details-content">
            <div className="skeleton-detail-line"></div>
            <div className="skeleton-detail-line"></div>
            <div className="skeleton-detail-line"></div>
            <div className="skeleton-detail-line"></div>
            <div className="skeleton-posts">
              <div className="skeleton-posts-header"></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton-post">
                  <div className="skeleton-post-title"></div>
                  <div className="skeleton-post-body"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
