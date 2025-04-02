import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import './ImageOptimizationCase.scss';

interface ImageData {
  id: number;
  title: string;
  originalUrl: string;
  optimizedUrl: string;
  originalSize: string;
  optimizedSize: string;
  format: string;
  dimensions: string;
}

const sampleImages: ImageData[] = [
  {
    id: 1,
    title: 'Mountain Landscape',
    originalUrl: 'https://picsum.photos/800/600',
    optimizedUrl: 'https://picsum.photos/800/600?quality=80',
    originalSize: '2.5 MB',
    optimizedSize: '500 KB',
    format: 'JPEG',
    dimensions: '800x600'
  },
  {
    id: 2,
    title: 'City Street',
    originalUrl: 'https://picsum.photos/1000/800',
    optimizedUrl: 'https://picsum.photos/1000/800?quality=80',
    originalSize: '3.8 MB',
    optimizedSize: '800 KB',
    format: 'JPEG',
    dimensions: '1000x800'
  },
  {
    id: 3,
    title: 'Beach Sunset',
    originalUrl: 'https://picsum.photos/1200/900',
    optimizedUrl: 'https://picsum.photos/1200/900?quality=80',
    originalSize: '4.2 MB',
    optimizedSize: '1.2 MB',
    format: 'JPEG',
    dimensions: '1200x900'
  },
  {
    id: 4,
    title: 'Forest Path',
    originalUrl: 'https://picsum.photos/1500/1000',
    optimizedUrl: 'https://picsum.photos/1500/1000?quality=80',
    originalSize: '5.5 MB',
    optimizedSize: '1.5 MB',
    format: 'JPEG',
    dimensions: '1500x1000'
  }
];

const ImageOptimizationCase: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [optimizationLevel, setOptimizationLevel] = useState(80);
  const [showOriginal, setShowOriginal] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(true);

  useEffect(() => {
    // Simulate loading images from an API
    const loadImages = async () => {
      setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setImages(sampleImages);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleOptimizationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptimizationLevel(Number(event.target.value));
  };

  return (
    <div className="image-optimization-case">
      <div className="controls-section">
        <Card>
          <Card.Body>
            <h3>Optimization Controls</h3>
            <div className="controls-grid">
              <div className="control-item">
                <Form.Label>Optimization Level: {optimizationLevel}%</Form.Label>
                <Form.Range
                  min="0"
                  max="100"
                  value={optimizationLevel}
                  onChange={handleOptimizationChange}
                />
              </div>
              <div className="control-item">
                <Form.Check
                  type="switch"
                  id="show-original"
                  label="Show Original Images"
                  checked={showOriginal}
                  onChange={(e) => setShowOriginal(e.target.checked)}
                />
              </div>
              <div className="control-item">
                <Form.Check
                  type="switch"
                  id="lazy-loading"
                  label="Enable Lazy Loading"
                  checked={lazyLoading}
                  onChange={(e) => setLazyLoading(e.target.checked)}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="images-grid">
        {isLoading ? (
          <div className="loading-container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          images.map((image) => (
            <Card key={image.id} className="image-card" onClick={() => handleImageClick(image)}>
              <Card.Img
                variant="top"
                src={showOriginal ? image.originalUrl : image.optimizedUrl}
                loading={lazyLoading ? 'lazy' : 'eager'}
                alt={image.title}
              />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>
                  <strong>Size:</strong> {showOriginal ? image.originalSize : image.optimizedSize}
                  <br />
                  <strong>Format:</strong> {image.format}
                  <br />
                  <strong>Dimensions:</strong> {image.dimensions}
                </Card.Text>
                <Button variant="outline-primary">View Details</Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedImage.title}</h3>
              <Button variant="close" onClick={handleCloseModal} />
            </div>
            <div className="modal-body">
              <div className="image-comparison">
                <div className="image-container">
                  <h4>Original Image</h4>
                  <img src={selectedImage.originalUrl} alt="Original" />
                  <p>Size: {selectedImage.originalSize}</p>
                </div>
                <div className="image-container">
                  <h4>Optimized Image</h4>
                  <img src={selectedImage.optimizedUrl} alt="Optimized" />
                  <p>Size: {selectedImage.optimizedSize}</p>
                </div>
              </div>
              <div className="image-info">
                <p><strong>Format:</strong> {selectedImage.format}</p>
                <p><strong>Dimensions:</strong> {selectedImage.dimensions}</p>
                <p><strong>Size Reduction:</strong> {Math.round((1 - parseFloat(selectedImage.optimizedSize) / parseFloat(selectedImage.originalSize)) * 100)}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOptimizationCase; 