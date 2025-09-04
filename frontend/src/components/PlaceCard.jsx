import React from 'react';
import { MapPin, Star, Shield, ArrowRight } from 'lucide-react';

const PlaceCard = ({ place, onSelect }) => {
  const getSafetyScoreColor = (score) => {
    if (score >= 9) return 'text-green-600 bg-green-100';
    if (score >= 7) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const averageRating = place.reviews.reduce((acc, review) => acc + review.rating, 0) / place.reviews.length;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={place.mainImage}
          alt={place.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 rounded-full text-sm font-bold ${getSafetyScoreColor(place.aiSafetyScore)}`}>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>{place.aiSafetyScore}/10</span>
            </div>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
            place.category === 'local' ? 'bg-blue-600' : 'bg-purple-600'
          }`}>
            {place.category === 'local' ? 'Local Travel' : 'International'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {place.name}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{averageRating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{place.region}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {place.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {place.reviews.length} reviews
          </div>
          <button
            onClick={onSelect}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-semibold"
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;