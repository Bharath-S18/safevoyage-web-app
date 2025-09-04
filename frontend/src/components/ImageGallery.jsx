import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images, placeName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className="mb-8">
        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden mb-4 group">
          <img
            src={images[currentImageIndex]}
            alt={`${placeName} - Image ${currentImageIndex + 1}`}
            className="w-full h-96 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            onClick={toggleFullscreen}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Fullscreen Indicator */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Click to view fullscreen
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'border-blue-500 scale-105 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                }`}
              >
                <img
                  src={image}
                  alt={`${placeName} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={images[currentImageIndex]}
              alt={`${placeName} - Fullscreen`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;

      {/* Main Image */}
      <div className="relative rounded-2xl overflow-hidden mb-4">
        <img
          src={images[currentImageIndex]}
          alt={`${placeName} - Image ${currentImageIndex + 1}`}
          className="w-full h-96 object-cover"
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image}
                alt={`${placeName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;