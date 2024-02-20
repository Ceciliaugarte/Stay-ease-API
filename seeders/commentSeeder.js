const { Comment } = require("../models");

module.exports = async () => {
  try {
    await Comment.bulkCreate([
      { comment: "Wonderful stay!", propertyId: 1, userId: 1 },
      { comment: "Highly recommended for a relaxing vacation", propertyId: 1, userId: 2 },
    ]);
    console.log("Comments were created successfully");
  } catch (error) {
    console.error("Error creating comments", error);
  }
};
