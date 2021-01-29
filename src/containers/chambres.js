export const chambres = [
  {
    _id: {
      $oid: "5f3e71ac8a18e082d98d05e0",
    },
    name: "Chambre Standard",
    img: require("../assets/room-5.jpg"),
    capacity: 2,
    price: 35000,
    position: "Rez de chaussé, Bâtiment principal",
    description:
      "Chambre climatisée avec un lit de deux(02) places, un écran plasma",
    breakfast: true,
    quantity: 8,
    reserved: "UNRESERVED",
    __v: 0,
  },
  {
    _id: {
      $oid: "5f3e744ec9e1ae85ed2437bd",
    },
    name: "Bungalow simple",
    img: require("../assets/room-3.jpg"),
    capacity: 3,
    price: 50000,
    position: "Sous bois A, côté piscine",
    description:
      "Une chambre climatisée avec un lit de 3 places, un écran plasma, un mini bar, un commode",
    breakfast: true,
    quantity: 2,
    reserved: "UNRESERVED",
    __v: 0,
  },
  {
    _id: {
      $oid: "5f3e76eac9e1ae85ed2437bf",
    },
    name: "Bungalow VIP",
    img: require("../assets/room-4.jpg"),
    capacity: 3,
    price: 65000,
    position: "Jardin, côté Bâtiment annexe",
    description:
      "Une chambre Bungalow VIP avec un lit de 3 places, un écran plasma, un minibar, un commode, un balcon",
    breakfast: true,
    quantity: 4,
    reserved: "UNRESERVED",
    __v: 0,
  },
  {
    _id: {
      $oid: "5f3e728746d6518416574958",
    },
    name: "Chambre Moyen standing",
    img: require("../assets/room-2.jpg"),
    capacity: 3,
    price: 45000,
    position: "1er étage, Bâtiment principal",
    description:
      "Une chambre climatisée avec un lit de 2 à 3 places, balcon vue sur le site, écran plasma",
    breakfast: true,
    quantity: 13,
    reserved: "UNRESERVED",
    __v: 0,
  },

  {
    _id: {
      $oid: "5f3e75b7c9e1ae85ed2437be",
    },
    name: "Demi-suite VIP",
    img: require("../assets/room-2.jpg"),
    capacity: 3,
    price: 70000,
    position: "Bâtiment annexe",
    description:
      "Une Demi-suite VIP avec un lit de 3 places, un écran plasma, un minibar, un commode, un balcon",
    breakfast: true,
    quantity: 18,
    reserved: "UNRESERVED",
    __v: 0,
  },
];

export const carouselStandard = [
  require("../assets/romstandard1.jpeg"),
  require("../assets/romstandard2.jpeg"),
  require("../assets/romstandard3.jpeg"),
];

export const carouselBungalow = [
  require("../assets/bungalow1.jpg"),
  require("../assets/bungalow2.jpg"),
  require("../assets/bungalow3.jpg"),
];

export const carouselBungalowVIP = [
  require("../assets/bungalowvip1.jpg"),
  require("../assets/bungalowvip2.jpg"),
  require("../assets/bungalowvip3.jpg"),
];

export const carouselDemiSuite = [
  require("../assets/demisuite1.jpg"),
  require("../assets/demisuite2.jpg"),
  require("../assets/demisuite3.jpg"),
];
 export const carouselMoyenStanding = [
   require("../assets/moyenstanding1.jpg"),
   require("../assets/moyenstanding2.jpg"),
   require("../assets/moyenstanding3.jpg"),
 ];