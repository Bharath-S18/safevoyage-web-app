// Static data for places - TODO: Connect to dynamic API for real-time data
export const placesData = [
  {
    id: 1,
    name: 'Taj Mahal',
    region: 'Agra, Uttar Pradesh, India',
    category: 'local',
    mainImage: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    // TODO: Connect to real-time AI safety scoring API
    aiSafetyScore: 8.7,
    reviews: [
      { 
        id: 1, 
        user: 'Sarah Johnson', 
        rating: 5, 
        comment: 'Absolutely breathtaking! The monument is well-maintained and security is excellent. Perfect for families and solo travelers alike.', 
        date: '2025-01-10',
        helpful: 24
      },
      { 
        id: 2, 
        user: 'Mike Chen', 
        rating: 4, 
        comment: 'Beautiful architecture and rich history. Can get very crowded during peak hours, so plan accordingly. Early morning visits are recommended.', 
        date: '2025-01-08',
        helpful: 18
      },
      { 
        id: 3, 
        user: 'Priya Sharma', 
        rating: 5, 
        comment: 'A must-visit destination! The sunset view is magical. Local guides are knowledgeable and helpful.', 
        date: '2025-01-05',
        helpful: 31
      }
    ],
    description: 'One of the Seven Wonders of the World, the Taj Mahal is a stunning white marble mausoleum built by Emperor Shah Jahan as a symbol of eternal love. This UNESCO World Heritage Site attracts millions of visitors annually with its perfect symmetry and intricate craftsmanship.',
    highlights: ['UNESCO World Heritage Site', 'Architectural Marvel', 'Romantic Symbol', 'Photography Paradise', 'Guided Tours Available', 'Night Viewing Options']
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
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 9.2,
    reviews: [
      { 
        id: 1, 
        user: 'Emma Wilson', 
        rating: 5, 
        comment: 'Perfect beaches with great safety measures. Lifeguards are always present and the local police are very helpful to tourists.', 
        date: '2025-01-12',
        helpful: 42
      },
      { 
        id: 2, 
        user: 'David Kumar', 
        rating: 5, 
        comment: 'Amazing nightlife and very tourist-friendly. Felt completely safe walking around even late at night. Great food and culture!', 
        date: '2025-01-09',
        helpful: 35
      },
      { 
        id: 3, 
        user: 'Lisa Rodriguez', 
        rating: 4, 
        comment: 'Beautiful beaches and water sports. Some areas can be crowded during peak season, but overall very safe and enjoyable.', 
        date: '2025-01-07',
        helpful: 28
      }
    ],
    description: 'Famous for pristine beaches, vibrant nightlife, and Portuguese colonial architecture. Goa offers a perfect blend of relaxation and adventure with its golden sandy beaches, water sports, and rich cultural heritage.',
    highlights: ['Beach Paradise', 'Water Sports', 'Nightlife', 'Cultural Heritage', 'Portuguese Architecture', 'Seafood Cuisine']
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
      'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 8.9,
    reviews: [
      { 
        id: 1, 
        user: 'Lisa Anderson', 
        rating: 5, 
        comment: 'Iconic landmark with excellent security. Very well organized for tourists with clear signage and helpful staff.', 
        date: '2025-01-11',
        helpful: 56
      },
      { 
        id: 2, 
        user: 'James Rodriguez', 
        rating: 4, 
        comment: 'Stunning views but watch out for pickpockets in crowded areas. The tower itself is magnificent and worth the visit.', 
        date: '2025-01-07',
        helpful: 43
      },
      { 
        id: 3, 
        user: 'Anna Mueller', 
        rating: 5, 
        comment: 'Breathtaking experience! The elevator ride and panoramic views are unforgettable. Very safe and well-maintained.', 
        date: '2025-01-04',
        helpful: 67
      }
    ],
    description: 'Iconic iron lattice tower and symbol of France, offering breathtaking views of Paris. Standing 330 meters tall, it remains one of the most visited monuments in the world and a masterpiece of 19th-century engineering.',
    highlights: ['Iconic Landmark', 'City Views', 'Romantic Setting', 'Historical Significance', 'Fine Dining', 'Evening Illumination']
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
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 9.1,
    reviews: [
      { 
        id: 1, 
        user: 'Priya Sharma', 
        rating: 5, 
        comment: 'Peaceful and serene. Houseboat experience was amazing and very safe. The crew was professional and the food was excellent.', 
        date: '2025-01-13',
        helpful: 39
      },
      { 
        id: 2, 
        user: 'Robert Taylor', 
        rating: 5, 
        comment: 'Nature at its best. Well-maintained houseboats with safety equipment. Perfect for a relaxing getaway from city life.', 
        date: '2025-01-06',
        helpful: 45
      },
      { 
        id: 3, 
        user: 'Meera Nair', 
        rating: 4, 
        comment: 'Beautiful scenery and authentic Kerala cuisine. Some houseboats are better maintained than others, so choose carefully.', 
        date: '2025-01-03',
        helpful: 22
      }
    ],
    description: 'Tranquil network of waterways, lagoons, and lakes offering unique houseboat experiences. Known as "God\'s Own Country," Kerala\'s backwaters provide a peaceful escape into nature with traditional houseboats and authentic local cuisine.',
    highlights: ['Houseboat Experience', 'Natural Beauty', 'Peaceful Environment', 'Cultural Immersion', 'Traditional Cuisine', 'Wildlife Spotting']
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
      'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 9.4,
    reviews: [
      { 
        id: 1, 
        user: 'Maria Gonzalez', 
        rating: 5, 
        comment: 'Absolutely magical! Very safe and tourist-friendly island. The sunsets are beyond description and locals are incredibly welcoming.', 
        date: '2025-01-14',
        helpful: 78
      },
      { 
        id: 2, 
        user: 'Alex Thompson', 
        rating: 5, 
        comment: 'Perfect honeymoon destination. Felt secure throughout our stay. The white buildings and blue domes create a fairy-tale atmosphere.', 
        date: '2025-01-05',
        helpful: 65
      },
      { 
        id: 3, 
        user: 'Sophie Laurent', 
        rating: 4, 
        comment: 'Stunning views and excellent hospitality. Can be expensive during peak season, but the experience is worth every penny.', 
        date: '2025-01-02',
        helpful: 52
      }
    ],
    description: 'Stunning Greek island known for white-washed buildings, blue domes, and spectacular sunsets. Santorini offers a unique volcanic landscape, world-class wineries, and some of the most photographed views in the Mediterranean.',
    highlights: ['Sunset Views', 'Unique Architecture', 'Wine Tasting', 'Romantic Atmosphere', 'Volcanic Beaches', 'Luxury Resorts']
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
      'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 8.5,
    reviews: [
      { 
        id: 1, 
        user: 'Rajesh Patel', 
        rating: 4, 
        comment: 'Rich cultural heritage and beautiful palaces. Good security arrangements and knowledgeable guides make the experience memorable.', 
        date: '2025-01-09',
        helpful: 33
      },
      { 
        id: 2, 
        user: 'Sophie Martin', 
        rating: 5, 
        comment: 'Incredible architecture and history. Tour guides were very helpful and safety-conscious. The desert safari was an added bonus!', 
        date: '2025-01-04',
        helpful: 41
      },
      { 
        id: 3, 
        user: 'Arjun Singh', 
        rating: 4, 
        comment: 'Majestic palaces with fascinating stories. Some areas need better maintenance, but overall a great cultural experience.', 
        date: '2025-01-01',
        helpful: 27
      }
    ],
    description: 'Magnificent palaces and forts showcasing royal Rajasthani architecture and rich cultural heritage. Experience the grandeur of maharajas with stunning palaces, vibrant markets, and desert adventures.',
    highlights: ['Royal Architecture', 'Cultural Heritage', 'Desert Safari', 'Traditional Crafts', 'Palace Hotels', 'Folk Performances']
  },
  {
    id: 7,
    name: 'Bali Temples',
    region: 'Bali, Indonesia',
    category: 'international',
    mainImage: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 8.8,
    reviews: [
      { 
        id: 1, 
        user: 'Jennifer Lee', 
        rating: 5, 
        comment: 'Spiritual and beautiful temples with amazing architecture. Very peaceful and safe environment for meditation and exploration.', 
        date: '2025-01-15',
        helpful: 48
      },
      { 
        id: 2, 
        user: 'Marco Rossi', 
        rating: 4, 
        comment: 'Incredible cultural experience. Some temples require modest dress code, but locals are very respectful and helpful.', 
        date: '2025-01-08',
        helpful: 36
      }
    ],
    description: 'Sacred Hindu temples set against stunning natural backdrops, offering spiritual experiences and architectural marvels. Bali\'s temples showcase intricate stone carvings and provide insight into Balinese Hindu culture.',
    highlights: ['Spiritual Experience', 'Ancient Architecture', 'Cultural Learning', 'Natural Settings', 'Photography', 'Meditation Spots']
  },
  {
    id: 8,
    name: 'Himachal Mountains',
    region: 'Himachal Pradesh, India',
    category: 'local',
    mainImage: 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 8.3,
    reviews: [
      { 
        id: 1, 
        user: 'Vikram Gupta', 
        rating: 5, 
        comment: 'Breathtaking mountain views and excellent trekking opportunities. Local guides are experienced and safety-conscious.', 
        date: '2025-01-16',
        helpful: 29
      },
      { 
        id: 2, 
        user: 'Rachel Green', 
        rating: 4, 
        comment: 'Beautiful hill stations with cool weather. Some remote areas have limited connectivity, but overall very safe for tourists.', 
        date: '2025-01-11',
        helpful: 34
      }
    ],
    description: 'Majestic Himalayan ranges offering adventure tourism, hill stations, and spiritual retreats. Perfect for trekking, mountaineering, and experiencing pristine mountain culture.',
    highlights: ['Mountain Trekking', 'Hill Stations', 'Adventure Sports', 'Spiritual Retreats', 'Snow Activities', 'Local Culture']
  },
  {
    id: 9,
    name: 'Tokyo Skyline',
    region: 'Tokyo, Japan',
    category: 'international',
    mainImage: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    aiSafetyScore: 9.6,
    reviews: [
      { 
        id: 1, 
        user: 'Yuki Tanaka', 
        rating: 5, 
        comment: 'Incredibly safe city with amazing technology and culture. Public transportation is excellent and very tourist-friendly.', 
        date: '2025-01-17',
        helpful: 72
      },
      { 
        id: 2, 
        user: 'Michael Brown', 
        rating: 5, 
        comment: 'Modern metropolis with traditional charm. Felt completely safe at all times. Language barrier can be challenging but people are helpful.', 
        date: '2025-01-12',
        helpful: 58
      }
    ],
    description: 'Ultra-modern metropolis blending cutting-edge technology with traditional Japanese culture. Tokyo offers an unparalleled urban experience with world-class safety standards and efficiency.',
    highlights: ['Modern Technology', 'Traditional Culture', 'Excellent Safety', 'Public Transport', 'Culinary Excellence', 'Shopping Districts']
  }
];

// TODO: Replace with dynamic API calls for real-time place data
export const getPlacesByCategory = (category) => {
  if (category === 'all') return placesData;
  return placesData.filter(place => place.category === category);
};

export const searchPlaces = (searchTerm) => {
  return placesData.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.region.toLowerCase().includes(searchTerm.toLowerCase())
  );
};