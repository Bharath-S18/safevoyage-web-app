import React, { useState } from 'react';
import { X, MapPin, Star, Shield, Users, Calendar, ArrowRight, Navigation, Plane, Car, Bus, Train } from 'lucide-react';
import ImageGallery from './ImageGallery';
import TransportOptions from './TransportOptions';
import ReviewsSection from './ReviewsSection';

const PlaceDetailModal = ({ place, isOpen, onClose }) => {
  const [showTransport, setShowTransport] = useState(false);
  const [userLocation, setUserLocation] = useState('');

  if (!isOpen || !place) return null;

  const getSafetyScoreColor = (score) => {
    if (score >= 9) return 'text-green-600 bg-green-100 border-green-200';
    if (score >= 7) return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    return 'text-red-600 bg-red-100 border-red-200';
  };

  const averageRating = place.reviews.reduce((acc, review) => acc + review.rating, 0) / place.reviews.length;

  const handlePlanTravel = () => {
    if (userLocation.trim()) {
      setShowTransport(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{place.name}</h2>
            <div className="flex items-center space-x-2 text-gray-600 mt-1">
              <MapPin className="h-4 w-4" />
              <span>{place.region}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          <ImageGallery images={place.gallery} placeName={place.name} />

          {/* Main Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About {place.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{place.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                <div className="grid grid-cols-2 gap-2">
                  {place.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Score & Stats */}
            <div className="space-y-6">
              {/* AI Safety Score - Marked for future dynamic updates */}
              <div className={`border-2 rounded-xl p-6 ${getSafetyScoreColor(place.aiSafetyScore)}`}>
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6" />
                  <h4 className="font-bold text-lg">AI Safety Score</h4>
                </div>
                <div className="text-3xl font-bold mb-2">{place.aiSafetyScore}/10</div>
                <p className="text-sm opacity-80">
                  Based on safety, affordability, and tourist convenience factors
                </p>
                {/* TODO: Connect to real-time AI safety scoring API */}
              </div>

              {/* Rating */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <h4 className="font-bold text-lg text-gray-900">Tourist Rating</h4>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(averageRating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{place.reviews.length} reviews</p>
              </div>

              {/* Category Badge */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <Navigation className="h-6 w-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Travel Type</h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                      place.category === 'local' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {place.category === 'local' ? 'Local Travel' : 'International Travel'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <ReviewsSection reviews={place.reviews} />

          {/* Plan Travel Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Plan Your Journey</h3>
            
            {!showTransport ? (
              <div className="max-w-md mx-auto">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Enter your current location
                </label>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    placeholder="e.g., Mumbai, Maharashtra"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handlePlanTravel}
                    disabled={!userLocation.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <TransportOptions
                from={userLocation}
                to={place.name}
                category={place.category}
                onBack={() => setShowTransport(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailModal;