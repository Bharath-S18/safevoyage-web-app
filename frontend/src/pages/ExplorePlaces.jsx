import React, { useState } from 'react';
import { Search, MapPin, Star, Users, DollarSign, Clock, ArrowRight, Filter } from 'lucide-react';
import PlaceCard from '../components/PlaceCard';
import PlaceDetailModal from '../components/PlaceDetailModal';

const ExplorePlaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Static data for places - marked for future API integration
  const places = [
    {
      id: 1,
      name: 'Taj Mahal',
      region: 'Agra, Uttar Pradesh, India',
      category: 'local',
      mainImage: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiSafetyScore: 8.7,
      reviews: [
        { id: 1, user: 'Sarah Johnson', rating: 5, comment: 'Absolutely breathtaking! Well-maintained and safe for tourists.', date: '2025-01-10' },
        { id: 2, user: 'Mike Chen', rating: 4, comment: 'Beautiful architecture, but can get very crowded during peak hours.', date: '2025-01-08' }
      ],
      description: 'One of the Seven Wonders of the World, the Taj Mahal is a stunning white marble mausoleum built by Emperor Shah Jahan.',
      highlights: ['UNESCO World Heritage Site', 'Architectural Marvel', 'Romantic Symbol', 'Photography Paradise']
    },
    {
      id: 2,
      name: 'Goa Beaches',
      region: 'Goa, India',
      category: 'local',
      mainImage: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiSafetyScore: 9.2,
      reviews: [
        { id: 1, user: 'Emma Wilson', rating: 5, comment: 'Perfect beaches with great safety measures. Lifeguards are always present.', date: '2025-01-12' },
        { id: 2, user: 'David Kumar', rating: 5, comment: 'Amazing nightlife and very tourist-friendly. Felt completely safe.', date: '2025-01-09' }
      ],
      description: 'Famous for pristine beaches, vibrant nightlife, and Portuguese colonial architecture.',
      highlights: ['Beach Paradise', 'Water Sports', 'Nightlife', 'Cultural Heritage']
    },
    {
      id: 3,
      name: 'Eiffel Tower',
      region: 'Paris, France',
      category: 'international',
      mainImage: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiSafetyScore: 8.9,
      reviews: [
        { id: 1, user: 'Lisa Anderson', rating: 5, comment: 'Iconic landmark with excellent security. Very well organized for tourists.', date: '2025-01-11' },
        { id: 2, user: 'James Rodriguez', rating: 4, comment: 'Stunning views but watch out for pickpockets in crowded areas.', date: '2025-01-07' }
      ],
      description: 'Iconic iron lattice tower and symbol of France, offering breathtaking views of Paris.',
      highlights: ['Iconic Landmark', 'City Views', 'Romantic Setting', 'Historical Significance']
    },
    {
      id: 4,
      name: 'Kerala Backwaters',
      region: 'Kerala, India',
      category: 'local',
      mainImage: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiSafetyScore: 9.1,
      reviews: [
        { id: 1, user: 'Priya Sharma', rating: 5, comment: 'Peaceful and serene. Houseboat experience was amazing and very safe.', date: '2025-01-13' },
        { id: 2, user: 'Robert Taylor', rating: 5, comment: 'Nature at its best. Well-maintained houseboats with safety equipment.', date: '2025-01-06' }
      ],
      description: 'Tranquil network of waterways, lagoons, and lakes offering unique houseboat experiences.',
      highlights: ['Houseboat Experience', 'Natural Beauty', 'Peaceful Environment', 'Cultural Immersion']
    },
    {
      id: 5,
      name: 'Santorini',
      region: 'Cyclades, Greece',
      category: 'international',
      mainImage: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiSafetyScore: 9.4,
      reviews: [
        { id: 1, user: 'Maria Gonzalez', rating: 5, comment: 'Absolutely magical! Very safe and tourist-friendly island.', date: '2025-01-14' },
        { id: 2, user: 'Alex Thompson', rating: 5, comment: 'Perfect honeymoon destination. Felt secure throughout our stay.', date: '2025-01-05' }
      ],
      description: 'Stunning Greek island known for white-washed buildings, blue domes, and spectacular sunsets.',
      highlights: ['Sunset Views', 'Unique Architecture', 'Wine Tasting', 'Romantic Atmosphere']
    },
    {
      id: 6,
      name: 'Rajasthan Palaces',
      region: 'Rajasthan, India',
      category: 'local',
      mainImage: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      aiSafetyScore: 8.5,
      reviews: [
        { id: 1, user: 'Rajesh Patel', rating: 4, comment: 'Rich cultural heritage and beautiful palaces. Good security arrangements.', date: '2025-01-09' },
        { id: 2, user: 'Sophie Martin', rating: 5, comment: 'Incredible architecture and history. Tour guides were very helpful and safety-conscious.', date: '2025-01-04' }
      ],
      description: 'Magnificent palaces and forts showcasing royal Rajasthani architecture and rich cultural heritage.',
      highlights: ['Royal Architecture', 'Cultural Heritage', 'Desert Safari', 'Traditional Crafts']
    }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Explore Amazing
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover safe and beautiful destinations with AI-powered safety scores and comprehensive travel information
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search destinations by name, country, state, or district..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Places
                  </button>
                  <button
                    onClick={() => setSelectedCategory('local')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === 'local'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Local Travel
                  </button>
                  <button
                    onClick={() => setSelectedCategory('international')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      selectedCategory === 'international'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    International Travel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="text-center py-16">
              <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
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