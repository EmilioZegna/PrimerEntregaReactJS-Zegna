import Botines from "../assets/img/Futbol/Botines.webp";
import Camiseta from "../assets/img/Futbol/CamisetaJapon.webp";
import Campera from "../assets/img/Futbol/Campera.webp";
import Guantes from "../assets/img/Futbol/Guantes.webp";
import Pantalones from "../assets/img/Futbol/Pantalones.webp";
import PelotaFutbol from "../assets/img/Futbol/PelotaFutbol.webp";
import BotinesRugby from "../assets/img/Rugby/BotinesRugby.webp";
import Casco from "../assets/img/Rugby/Casco.webp";
import PelotaRugby from "../assets/img/Rugby/PelotaRugby.webp";
import Protector from "../assets/img/Rugby/ProtectorBucal.webp";
import Short from "../assets/img/Rugby/Short.webp";
import Tie from "../assets/img/Rugby/Tie.webp";
import Gorra from "../assets/img/Tenis/Gorra.webp";
import Medias from "../assets/img/Tenis/Medias.webp";
import Raqueta from "../assets/img/Tenis/Raqueta.webp";
import Zapatillas from "../assets/img/Tenis/ZapatillasTenis.webp;"



const productos = [
  {
    id: 1,
    title: "Botines Adidas",
    description: "Botines de alta calidad para mover la redonda",
    imagen: "../assets/img/Futbol/Botines.webp",
    stock: 5,
    precio: 150,
    imagen: Botines,
    categoryId: "Futbol"
  },
  {
    id: 2,
    title: "Camiseta Japon",
    description: "camiseta de algodon de calidad premium",
    stock: 8,   
    precio: 100,
    imagen: Camiseta,
    categoryId: "futbol"
  },
  {
    id: 3,
    title: "Campera MUTD",
    description: "campera de algodo del Manchester United",
    stock: 10,   
    precio: 120,
    imagen: Campera,
    categoryId: "futbol"
  },
  {
    id: 4,
    title: "Guantes",
    description: "Guantes de calidad premium",
    stock: 5,
    precio: 80,
    imagen: Guantes,
    categoryId: "futbol"
  },
  {
    id: 5,
    title: "Pantalones Boca",
    description: "Pantalones largos de algodon de Boca",
    stock: 4,
    precio: 75,
    imagen: Pantalones,
    categoryId: "futbol"
  },
  {
    id: 6,
    title: "Pelota Futbol",
    description: "pelota original de la Uefa",
    stock: 12,
    precio: 70,
    imagen: PelotaFutbol,
    categoryId: "futbol"
  },
  {
    id: 7,
    title: "Botines Rugby",
    description: "Botines Umbro de alta calidad para jugadores de rugby",
    stock: 8,
    precio: 145,
    imagen: BotinesRugby,
    categoryId: "rugby"
  },
  {
    id: 8,
    title: "Casco",
    description: "Casco protector de golpes",
    stock: 5,
    precio: 50,
    imagen: Casco,
    categoryId: "rugby"
  },
  {
    id: 9,
    title: "Pelota Rugby",
    description: "Pelota original del mundial de rugby",
    stock: 9,
    precio: 80,
    imagen: PelotaRugby,
    categoryId: "rugby"
  },
  {
    id: 10,
    title: "Protector Bucal",
    description: "Protector bucal para jugadores de rugby",
    stock: 15,
    precio: 25,
    imagen: Protector,
    categoryId: "rugby"
  },
  {
    id: 11,
    title: "Short",
    description: "Short de algodon de calidad premium",
    stock: 20,
    precio: 45,
    imagen: Short,
    categoryId: "rugby"
  },
   {
    id: 12,
    title: "Tie",
    description: "Tie para pateadores de primera",
    stock: 8,
    precio: 105,
    imagen: Tie,
    categoryId: "rugby"
  },
  {
    id: 13,
    title: "Gorra",
    description: "Gorra protectora del sol para partidos calurosos",
    stock: 5,
    precio: 35,
    imagen: Gorra,
    categoryId: "tenis"
  },
  {
    id: 14,
    title: "Medias",
    description: "Medias antideslizantes",
    stock: 10,
    precio: 15,
    imagen: Medias,
    categoryId: "tenis"
  },
  {
    id: 15,
    title: "Raqueta",
    description: "Raqueta Wilson calidad premium",
    stock: 6,
    precio: 160,
    imagen: Raqueta,
    categoryId: "tenis"
  },
  {
    id: 16,
    title: "Zapatillas Adidas",
    description: "Zapatillas Adidas de calidad excepcional",
    stock: 10,
    precio: 120,
    imagen: Zapatillas,
    categoryId: "tenis"
  },
  
];

export default productos;