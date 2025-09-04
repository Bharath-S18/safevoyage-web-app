import React from 'react';
import { Star, User, Calendar } from 'lucide-react';

const ReviewsSection = ({ reviews }) => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Tourist Reviews & Feedback</h3>
        <div className="flex items-center space-x-2">
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
          <span className="text-lg font-bold text-gray-900">{averageRating.toFixed(1)}</span>
          <span className="text-sm text-gray-600">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.user}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-3 w-3" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* TODO: Connect to dynamic review system for real-time user feedback */}
      <div className="mt-6 text-center">
        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <Star className="h-5 w-5 mr-2" />
          Write a Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;