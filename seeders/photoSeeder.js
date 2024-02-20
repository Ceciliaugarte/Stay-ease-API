const { Photo } = require("../models");

module.exports = async () => {
  try {
    await Photo.bulkCreate([
      {
        url: "https://unsplash.com/es/fotos/casa-de-madera-marron-y-negra-TiVPTYCG_3E",
        propertyId: 1,
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        propertyId: 1,
      },
      {
        url: "https://unsplash.com/es/fotos/un-par-de-sillas-de-jardin-sentadas-junto-a-una-piscina-iWmf9Gl3yMw",
        propertyId: 2,
      },
      {
        url: "https://unsplash.com/es/fotos/ropa-de-cama-blanca-con-cojines-Yrxr3bsPdS0",
        propertyId: 2,
      },
      { url: "https://unsplash.com/es/fotos/sala-de-estar-L7EwHkq1B2s", propertyId: 3 },
      {
        url: "https://unsplash.com/es/fotos/casa-de-hormigon-blanco-cerca-de-green-tree-durante-el-dia-4ojhpgKpS68",
        propertyId: 3,
      },
      {
        url: "https://unsplash.com/es/fotos/sofa-beige-de-3-plazas-cerca-de-la-ventana-Wv65tpVIdDg",
        propertyId: 4,
      },
      {
        url: "https://unsplash.com/es/fotos/habitacion-ordenada-llena-de-muebles-gREquCUXQLI",
        propertyId: 4,
      },
      {
        url: "https://unsplash.com/es/fotos/edificio-de-hormigon-blanco-con-piscina-y3_AHHrxUBY",
        propertyId: 5,
      },
      {
        url: "https://unsplash.com/es/fotos/isla-de-cocina-de-madera-blanca-y-armarios-cerca-de-la-puerta-del-panel-de-vidrio-AQl-J19ocWE",
        propertyId: 5,
      },
      {
        url: "https://unsplash.com/es/fotos/un-porche-con-dos-sillas-y-una-mesa-XcVm8mn7NUM",
        propertyId: 6,
      },
      { url: "https://unsplash.com/es/fotos/escalera-marron-UV81E0oXXWQ", propertyId: 6 },
      {
        url: "https://unsplash.com/es/fotos/juego-de-habitacion-de-cocina-blanco-G7sE2S4Lab4",
        propertyId: 7,
      },
      {
        url: "https://unsplash.com/es/fotos/edificio-de-hormigon-blanco-y-marron-cerca-de-un-campo-de-hierba-verde-durante-el-dia-5nYLmG1m5lw",
        propertyId: 7,
      },
      {
        url: "https://unsplash.com/es/fotos/mesa-de-centro-rectangular-de-madera-marron-y-sofa-gris-de-3-plazas-DmOhItSo49k",
        propertyId: 8,
      },
      {
        url: "https://images.unsplash.com/photo-1602075432748-82d264e2b463?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        propertyId: 8,
      },
      {
        url: "https://unsplash.com/es/fotos/cachorro-beige-acostado-sobre-tela-marron-nWX4pKwzLoE",
        propertyId: 9,
      },
      {
        url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHxjYXNhfGVufDB8fDB8fHww",
        propertyId: 9,
      },
      {
        url: "https://unsplash.com/es/fotos/edificio-de-hormigon-blanco-y-marron-cerca-de-arboles-verdes-durante-el-dia-JCMQo028t3Q",
        propertyId: 10,
      },
      {
        url: "https://unsplash.com/es/fotos/mesa-de-madera-marron-y-blanca-al-lado-de-la-silla-del-sofa-FBXuXp57eM0",
        propertyId: 10,
      },
      {
        url: "https://unsplash.com/es/fotos/mesa-y-silla-de-madera-marron-al-lado-de-la-estanteria-iRiVzALa4pI",
        propertyId: 11,
      },
      {
        url: "https://unsplash.com/es/fotos/un-balcon-con-una-mesa-sillas-y-un-sofa-WvP7bpgdkYM",
        propertyId: 11,
      },
      {
        url: "https://unsplash.com/es/fotos/un-hombre-y-una-mujer-parados-frente-a-una-casa-yPsXe-ezdUw",
        propertyId: 12,
      },
      {
        url: "https://unsplash.com/es/fotos/edificio-de-hormigon-blanco-g39p1kDjvSY",
        propertyId: 12,
      },
      {
        url: "https://unsplash.com/es/fotos/edificio-de-hormigon-marron-cerca-de-la-piscina-durante-el-dia-INjFL9qAHlo",
        propertyId: 13,
      },
      {
        url: "https://unsplash.com/es/fotos/dos-sillas-de-bar-marrones-7QOKbETFg94",
        propertyId: 13,
      },
      {
        url: "https://unsplash.com/es/fotos/fregadero-de-ceramica-blanca-cerca-de-mesa-de-madera-marron-9vvp_nuVaJk",
        propertyId: 14,
      },
      {
        url: "https://www.istockphoto.com/photo/corner-of-modern-kitchen-with-counter-gm1935389936-556244962?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fes%2Fs%2Ffotos%2Fapartamento&utm_medium=affiliate&utm_source=unsplash&utm_term=apartamento%3A%3A%3A",
        propertyId: 14,
      },
      {
        url: "https://unsplash.com/es/fotos/ventana-de-vidrio-con-marco-de-madera-marron-Z1Y8kWBe6C8",
        propertyId: 15,
      },
      {
        url: "https://unsplash.com/es/fotos/habitacion-de-madera-marron-con-cortinas-blancas-WHtJARE0_WI",
        propertyId: 15,
      },
      {
        url: "https://unsplash.com/es/fotos/mesa-redonda-de-ceramica-blanca-ZAVHbpOn4Jk",
        propertyId: 16,
      },
      {
        url: "https://unsplash.com/es/fotos/estructura-de-cama-de-madera-marron-con-funda-blanca-junto-a-mesita-de-noche-de-madera-marron-FqqiAvJejto",
        propertyId: 16,
      },
    ]);
    console.log("Photos were created successfully");
  } catch (error) {
    console.error("Error creating photos", error);
  }
};
