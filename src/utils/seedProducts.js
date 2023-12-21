import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  {
    id: 1,
    name: "Botines Adidas",
    description: "Botines de alta calidad para mover la redonda",
    img: "https://imgur.com/5Hhp07y",
    stock: 5,
    price: 150,
    category: "Futbol"
  },
  {
    id: 2,
    name: "Camiseta Japon",
    description: "camiseta de algodon de calidad premium",
    img: "https://imgur.com/UanYcHy",
    stock: 8,   
    price: 100,
    category: "futbol"
  },
  {
    id: 3,
    name: "Campera MUTD",
    description: "campera de algodo del Manchester United",
    img: "https://imgur.com/Ql0i5Co",
    stock: 10,   
    price: 120,
    category: "futbol"
  },
  {
    id: 4,
    name: "Guantes",
    description: "Guantes de calidad premium",
    img: "https://imgur.com/9mdgnCa",
    stock: 5,
    price: 80,
    category: "futbol"
  },
  {
    id: 5,
    name: "Pantalones Boca",
    description: "Pantalones largos de algodon de Boca",
    img: "https://imgur.com/TIHBGWs",
    stock: 4,
    price: 75,
    category: "futbol"
  },
  {
    id: 6,
    name: "Pelota Futbol",
    description: "pelota original de la Uefa",
    img: "https://imgur.com/nirCC1W",
    stock: 12,
    price: 70,
    category: "futbol"
  },
  {
    id: 7,
    name: "Botines Rugby",
    description: "Botines Umbro de alta calidad para jugadores de rugby",
    img: "https://imgur.com/skPZWCg",
    stock: 8,
    price: 145,
    category: "rugby"
  },
  {
    id: 8,
    name: "Casco",
    description: "Casco protector de golpes",
    img: "https://imgur.com/DhBTUPw",
    stock: 5,
    price: 50,
    category: "rugby"
  },
  {
    id: 9,
    name: "Pelota Rugby",
    description: "Pelota original del mundial de rugby",
    img: "https://imgur.com/GCkY3wE",
    stock: 9,
    price: 80,
    category: "rugby"
  },
  {
    id: 10,
    name: "Protector Bucal",
    description: "Protector bucal para jugadores de rugby",
    img: "https://imgur.com/0SMMh44",
    stock: 15,
    price: 25,
    category: "rugby"
  },
  {
    id: 11,
    name: "Short",
    description: "Short de algodon de calidad premium",
    img: "https://imgur.com/iitkEiG",
    stock: 20,
    price: 45,
    category: "rugby"
  },
   {
    id: 12,
    name: "Tie",
    description: "Tie para pateadores de primera",
    img: "https://imgur.com/nsNGm1y",
    stock: 8,
    price: 105,
    category: "rugby"
  },
  {
    id: 13,
    name: "Gorra",
    description: "Gorra protectora del sol para partidos calurosos",
    img: "https://imgur.com/9lpvlsr",
    stock: 5,
    price: 35,
    category: "tenis"
  },
  {
    id: 14,
    name: "Medias",
    description: "Medias antideslizantes",
    img: "https://imgur.com/qiuj6rP",
    stock: 10,
    price: 15,
    category: "tenis"
  },
  {
    id: 15,
    name: "Raqueta",
    description: "Raqueta Wilson calidad premium",
    img: "https://imgur.com/1NYRSRH",
    stock: 6,
    price: 160,
    category: "tenis"
  },
  {
    id: 16,
    name: "Zapatillas Adidas",
    description: "Zapatillas Adidas de calidad excepcional",
    img: "https://imgur.com/PZbgN2W",
    stock: 10,
    price: 120,
    category: "tenis"
  },
  
];

export const seedProducts = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};

