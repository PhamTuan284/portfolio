import './LoadingSpinner.scss';

type SpinnerSize = 'small' | 'medium' | 'large';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
  color?: string;
}

export default function LoadingSpinner({ size = 'medium', color = 'var(--accent-color)' }: LoadingSpinnerProps) {
  return (
    <div className={`loading-spinner ${size}`}>
      <div className="spinner" style={{ borderColor: color }}></div>
    </div>
  );
} 