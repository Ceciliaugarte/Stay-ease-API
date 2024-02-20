const { Photo } = require("../models");

module.exports = async () => {
  try {
    await Photo.bulkCreate([
      { url: "https://example.com/photo1.jpg", propertyId: 1 },
      { url: "https://example.com/photo2.jpg", propertyId: 1 },
    ]);
    console.log("Photos were created successfully");
  } catch (error) {
    console.error("Error creating photos", error);
  }
};
