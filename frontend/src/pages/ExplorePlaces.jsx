
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PlaceCard from '../components/PlaceCard';
import { mockPlacesData } from '../data/placesData';

const ExplorePlaces = () => {
  const [places, setPlaces] = useState(mockPlacesData);
  const [filteredPlaces, setFilteredPlaces] = useState(mockPlacesData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Filter places based on search query and category
  useEffect(() => {
    let filtered = places;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(place => place.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(place => 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.district.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPlaces(filtered);
  }, [places, selectedCategory, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePlaceSelect = (placeId) => {
    navigate(`/explore-places/${placeId}`);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Explore Amazing Places
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover safe and beautiful destinations around the world with AI-powered safety insights
              </p>
              
              {/* Search Bar */}
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Places
              </button>
              <button
                onClick={() => handleCategoryChange('local')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'local'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Local Travel
              </button>
              <button
                onClick={() => handleCategoryChange('international')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'international'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                International Travel
              </button>
            </div>
          </div>
        </section>

        {/* Places Grid Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPlaces.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No places found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or category filter.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedCategory === 'all' ? 'All Destinations' : 
                     selectedCategory === 'local' ? 'Local Destinations' : 'International Destinations'}
                  </h2>
                  <span className="text-gray-600">
                    {filteredPlaces.length} place{filteredPlaces.length !== 1 ? 's' : ''} found
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPlaces.map((place) => (
                    <PlaceCard
                      key={place.id}
                      place={place}
                      onSelect={() => handlePlaceSelect(place.id)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
import React, { useState } from 'react';
import { MapPin, TrendingUp, Globe, Users } from 'lucide-react';
import { placesData, getPlacesByCategory, searchPlaces } from '../data/placesData';
import SearchBar from '../components/SearchBar';
import PlaceCard from '../components/PlaceCard';
import PlaceDetailModal from '../components/PlaceDetailModal';

const ExplorePlaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter places based on search and category
  const filteredPlaces = placesData.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  // Calculate stats for the header
  const totalPlaces = placesData.length;
  const localPlaces = placesData.filter(p => p.category === 'local').length;
  const internationalPlaces = placesData.filter(p => p.category === 'international').length;
  const averageSafetyScore = (placesData.reduce((acc, place) => acc + place.aiSafetyScore, 0) / totalPlaces).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Safe Destinations
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Explore safe and beautiful destinations worldwide with AI-powered safety scores, 
              comprehensive travel information, and real-time safety monitoring
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">{totalPlaces}</span>
                </div>
                <p className="text-sm text-gray-600">Total Destinations</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">{localPlaces}</span>
                </div>
                <p className="text-sm text-gray-600">Local Travel</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span className="text-2xl font-bold text-gray-900">{internationalPlaces}</span>
                </div>
                <p className="text-sm text-gray-600">International</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <span className="text-2xl font-bold text-gray-900">{averageSafetyScore}</span>
                </div>
                <p className="text-sm text-gray-600">Avg Safety Score</p>
              </div>
            </div>
          </div>

          {/* Search and Filter Component */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Results Summary */}
          {(searchTerm || selectedCategory !== 'all') && (
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredPlaces.length}</span> destinations
                {searchTerm && <span> for "<span className="font-semibold text-blue-600">{searchTerm}</span>"</span>}
                {selectedCategory !== 'all' && <span> in <span className="font-semibold text-purple-600">{selectedCategory} travel</span></span>}
              </p>
            </div>
          )}

          {/* Places Grid - TODO: Implement pagination for large datasets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onSelect={() => handlePlaceSelect(place)}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredPlaces.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No destinations found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn't find any destinations matching your criteria. Try adjusting your search or filter options.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Place Detail Modal */}
      <PlaceDetailModal
        place={selectedPlace}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
};


export default ExplorePlaces;


