const { Comment } = require("../models");

module.exports = async () => {
  try {
    await Comment.bulkCreate([
      { comment: "Wonderful stay!", propertyId: 1, userId: 1 },
      { comment: "Highly recommended for a relaxing vacation", propertyId: 1, userId: 2 },
      { comment: "Fantastic place!", propertyId: 1, userId: 1 },
      { comment: "Great location and amenities", propertyId: 1, userId: 2 },
      { comment: "Amazing views from the balcony", propertyId: 2, userId: 1 },
      { comment: "Cozy atmosphere, perfect for a getaway", propertyId: 2, userId: 3 },
      { comment: "Lovely garden and pool area", propertyId: 3, userId: 2 },
      { comment: "Spacious rooms with modern decor", propertyId: 3, userId: 3 },
      { comment: "Stunning architecture and design", propertyId: 4, userId: 1 },
      { comment: "Great hospitality from the hosts", propertyId: 4, userId: 2 },
      { comment: "Peaceful retreat in the countryside", propertyId: 5, userId: 3 },
      { comment: "Enjoyed the outdoor activities nearby", propertyId: 5, userId: 1 },
      { comment: "Incredible sunset views!", propertyId: 6, userId: 2 },
      { comment: "Very clean and well-maintained", propertyId: 6, userId: 3 },
      { comment: "Family-friendly environment", propertyId: 7, userId: 3 },
      { comment: "Close to local attractions", propertyId: 7, userId: 1 },
      { comment: "Excellent customer service", propertyId: 8, userId: 1 },
      { comment: "Spacious living area, great for groups", propertyId: 8, userId: 2 },
      { comment: "Unique architectural design", propertyId: 9, userId: 2 },
      { comment: "Enjoyed the outdoor activities nearby", propertyId: 9, userId: 3 },
      { comment: "Great value for the price", propertyId: 10, userId: 3 },
      { comment: "Perfect for a weekend getaway", propertyId: 10, userId: 1 },
      { comment: "Friendly staff and beautiful surroundings", propertyId: 11, userId: 1 },
      { comment: "Comfortable accommodations", propertyId: 11, userId: 2 },
      { comment: "Relaxing atmosphere, loved the pool", propertyId: 12, userId: 2 },
      { comment: "Great location, close to restaurants", propertyId: 12, userId: 3 },
      { comment: "Impressive interior design", propertyId: 13, userId: 3 },
      { comment: "Responsive hosts, easy check-in process", propertyId: 13, userId: 1 },
      { comment: "Breathtaking mountain views", propertyId: 14, userId: 1 },
      { comment: "Enjoyed hiking in the nearby trails", propertyId: 14, userId: 2 },
      { comment: "Beautiful garden and outdoor seating area", propertyId: 15, userId: 2 },
      { comment: "Clean and comfortable accommodations", propertyId: 15, userId: 3 },
      { comment: "Gorgeous landscaping, felt like a retreat", propertyId: 15, userId: 1 },
      { comment: "Very responsive hosts, made us feel welcome", propertyId: 15, userId: 3 },
      { comment: "The location was perfect for exploring the city", propertyId: 16, userId: 2 },
      { comment: "Loved the cozy ambiance of the apartment", propertyId: 16, userId: 3 },
    ]);
    console.log("Comments were created successfully");
  } catch (error) {
    console.error("Error creating comments", error);
  }
};
