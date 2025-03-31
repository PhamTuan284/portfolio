import React from "react";
import "./LoadingSpinner.scss";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "#007bff",
}) => {
  return (
    <div className={`loading-spinner ${size}`} style={{ borderColor: color }}>
      <div className="spinner-inner" style={{ borderColor: color }} />
    </div>
  );
};

export default LoadingSpinner;
