// Mock data for tourist places
// This data will be replaced with dynamic API calls in future development

export const mockPlacesData = [
  {
    id: 1,
    name: "Goa Beaches",
    region: "Goa",
    country: "India",
    district: "North Goa",
    category: "local",
    mainImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop"
    ],
    aiSafetyScore: 8.7,
    rating: 4.6,
    reviewCount: 2847,
    sampleReview: "Amazing beaches with crystal clear water and perfect weather. The local hospitality is outstanding!",
    priceRange: { min: 3000, max: 15000 },
    tags: ["Beach", "Water Sports", "Nightlife", "Seafood", "Historic Forts"],
    description: "Goa is famous for its pristine beaches, vibrant nightlife, and Portuguese colonial architecture. Perfect for beach lovers and adventure seekers.",
    reviews: [
      {
        id: 1,
        author: "Rahul Sharma",
        rating: 5,
        date: "2024-08-15",
        comment: "Absolutely stunning! The beaches are pristine and the food is incredible. Perfect for a relaxing vacation.",
        helpful: 24
      },
      {
        id: 2,
        author: "Sarah Johnson",
        rating: 4,
        date: "2024-07-22",
        comment: "Great place for water sports. The sunset views are breathtaking. Would definitely visit again!",
        helpful: 18
      },
      {
        id: 3,
        author: "Amit Patel",
        rating: 5,
        date: "2024-08-01",
        comment: "Perfect blend of relaxation and adventure. The local culture is fascinating and people are very friendly.",
        helpful: 31
      }
    ]
  },
  {
    id: 2,
    name: "Eiffel Tower",
    region: "Île-de-France",
    country: "France",
    district: "Paris",
    category: "international",
    mainImage: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&h=600&fit=crop"
    ],
    aiSafetyScore: 9.2,
    rating: 4.8,
    reviewCount: 15672,
    sampleReview: "Iconic landmark with breathtaking views of Paris. A must-visit destination that exceeds all expectations!",
    priceRange: { min: 80000, max: 200000 },
    tags: ["Historic", "Architecture", "City Views", "Photography", "Romance"],
    description: "The Eiffel Tower is the most iconic symbol of Paris and France, offering spectacular views of the city and unforgettable experiences.",
    reviews: [
      {
        id: 1,
        author: "Emma Wilson",
        rating: 5,
        date: "2024-08-10",
        comment: "Magical experience! The tower is even more beautiful in person. The elevator ride to the top is thrilling.",
        helpful: 42
      },
      {
        id: 2,
        author: "Michael Chen",
        rating: 4,
        date: "2024-07-28",
        comment: "Stunning views from the top. Best visited during sunset. Can get quite crowded though.",
        helpful: 29
      },
      {
        id: 3,
        author: "Sophie Martin",
        rating: 5,
        date: "2024-08-05",
        comment: "A dream come true! Perfect for proposals and romantic moments. The evening light show is spectacular.",
        helpful: 37
      }
    ]
  },
  {
    id: 3,
    name: "Taj Mahal",
    region: "Uttar Pradesh",
    country: "India",
    district: "Agra",
    category: "local",
    mainImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568649272474-0ca881661d4f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
    ],
    aiSafetyScore: 8.9,
    rating: 4.9,
    reviewCount: 8934,
    sampleReview: "One of the Seven Wonders of the World! The marble craftsmanship is absolutely magnificent.",
    priceRange: { min: 2000, max: 8000 },
    tags: ["UNESCO World Heritage", "Architecture", "History", "Marble", "Mughal"],
    description: "The Taj Mahal is a breathtaking mausoleum and UNESCO World Heritage Site, representing the pinnacle of Mughal architecture.",
    reviews: [
      {
        id: 1,
        author: "Priya Gupta",
        rating: 5,
        date: "2024-08-12",
        comment: "Absolutely breathtaking! The intricate details in the marble work are incredible. Best visited at sunrise.",
        helpful: 56
      },
      {
        id: 2,
        author: "David Brown",
        rating: 5,
        date: "2024-07-30",
        comment: "A masterpiece of architecture! The symmetry and beauty are beyond words. Truly a wonder of the world.",
        helpful: 41
      },
      {
        id: 3,
        author: "Aisha Khan",
        rating: 4,
        date: "2024-08-03",
        comment: "Magnificent monument with rich history. The gardens are beautiful. Can get very crowded during peak hours.",
        helpful: 28
      }
    ]
  },
  {
    id: 4,
    name: "Santorini",
    region: "South Aegean",
    country: "Greece",
    district: "Thira",
    category: "international",
    mainImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=800&h=600&fit=crop"
    ],
    aiSafetyScore: 9.0,
    rating: 4.7,
    reviewCount: 5621,
    sampleReview: "Paradise on earth! The white-washed buildings and blue domed churches create a picture-perfect setting.",
    priceRange: { min: 120000, max: 300000 },
    tags: ["Island", "Sunset", "Wine", "Volcanic", "Luxury"],
    description: "Santorini is a stunning Greek island known for its dramatic cliffs, beautiful sunsets, and distinctive white and blue architecture.",
    reviews: [
      {
        id: 1,
        author: "Maria Rodriguez",
        rating: 5,
        date: "2024-08-08",
        comment: "Absolutely magical! The sunsets from Oia are the most beautiful I've ever seen. Perfect romantic getaway.",
        helpful: 38
      },
      {
        id: 2,
        author: "James Taylor",
        rating: 4,
        date: "2024-07-25",
        comment: "Stunning island with amazing views. The wine tours are fantastic. A bit expensive but worth every penny.",
        helpful: 26
      },
      {
        id: 3,
        author: "Anna Petrov",
        rating: 5,
        date: "2024-08-02",
        comment: "Dream destination! The volcanic beaches are unique and the local cuisine is incredible. Highly recommend!",
        helpful: 33
      }
    ]
  },
  {
    id: 5,
    name: "Kerala Backwaters",
    region: "Kerala",
    country: "India",
    district: "Alappuzha",
    category: "local",
    mainImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512377564187-b4cd5bdd3db9?w=800&h=600&fit=crop"
    ],
    aiSafetyScore: 8.5,
    rating: 4.5,
    reviewCount: 3456,
    sampleReview: "Serene and peaceful houseboat experience through lush green waterways. Pure tranquility!",
    priceRange: { min: 5000, max: 25000 },
    tags: ["Backwaters", "Houseboat", "Nature", "Ayurveda", "Peaceful"],
    description: "Kerala's backwaters offer a unique and peaceful experience cruising through scenic waterways on traditional houseboats.",
    reviews: [
      {
        id: 1,
        author: "Rajesh Kumar",
        rating: 5,
        date: "2024-08-14",
        comment: "Most peaceful vacation ever! The houseboat experience is unique and the scenery is breathtaking.",
        helpful: 22
      },
      {
        id: 2,
        author: "Lisa Anderson",
        rating: 4,
        date: "2024-07-20",
        comment: "Beautiful nature and amazing food on the houseboat. Perfect for disconnecting from city life.",
        helpful: 19
      },
      {
        id: 3,
        author: "Vikram Singh",
        rating: 5,
        date: "2024-08-06",
        comment: "Incredible experience! The traditional Kerala cuisine and Ayurvedic treatments were amazing.",
        helpful: 27
      }
    ]
  },
  {
    id: 6,
    name: "Tokyo",
    region: "Kanto",
    country: "Japan",
    district: "Tokyo Metropolis",
    category: "international",
    mainImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=600&fit=crop"
    ],
    aiSafetyScore: 9.5,
    rating: 4.8,
    reviewCount: 12387,
    sampleReview: "Incredible blend of traditional and modern culture. The city is amazingly clean and safe!",
    priceRange: { min: 150000, max: 400000 },
    tags: ["Technology", "Culture", "Sushi", "Temples", "Shopping"],
    description: "Tokyo is a vibrant metropolis offering an incredible mix of ultra-modern technology and traditional Japanese culture.",
    reviews: [
      {
        id: 1,
        author: "Yuki Tanaka",
        rating: 5,
        date: "2024-08-11",
        comment: "Amazing city with perfect blend of tradition and modernity. The food scene is unparalleled!",
        helpful: 45
      },
      {
        id: 2,
        author: "Robert Kim",
        rating: 5,
        date: "2024-07-29",
        comment: "Incredibly organized and clean city. The public transportation is excellent and people are very helpful.",
        helpful: 39
      },
      {
        id: 3,
        author: "Elena Ivanova",
        rating: 4,
        date: "2024-08-04",
        comment: "Fascinating culture and amazing technology. The cherry blossoms in spring are absolutely beautiful!",
        helpful: 31
      }
    ]
  }
];

// Transportation data for different travel types
export const mockTransportationData = {
  local: [
    { type: 'car', name: 'Private Car', time: '4-6 hours', cost: { min: 2000, max: 5000 }, icon: '🚗' },
    { type: 'bus', name: 'State Bus', time: '6-8 hours', cost: { min: 500, max: 1500 }, icon: '🚌' },
    { type: 'train', name: 'Express Train', time: '5-7 hours', cost: { min: 800, max: 2500 }, icon: '🚆' },
    { type: 'bike', name: 'Motorbike', time: '5-7 hours', cost: { min: 1000, max: 2000 }, icon: '🏍️' },
    { type: 'auto', name: 'Auto Rickshaw', time: '6-9 hours', cost: { min: 1500, max: 3000 }, icon: '🛺' },
    { type: 'flight', name: 'Domestic Flight', time: '1-2 hours', cost: { min: 5000, max: 15000 }, icon: '✈️' }
  ],
  international: [
    { type: 'flight', name: 'International Flight', time: '8-15 hours', cost: { min: 50000, max: 200000 }, icon: '✈️' }
  ]
};
