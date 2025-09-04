import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations by name, country, state, or district..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-400"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-400" />
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              All Places
            </button>
            <button
              onClick={() => setSelectedCategory('local')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'local'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              Local Travel
            </button>
            <button
              onClick={() => setSelectedCategory('international')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === 'international'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              International Travel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;