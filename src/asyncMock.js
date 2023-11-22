const products = [
    { id: "1", name: "Botines", img: "../public/img/Imagen Rugby 01.webp", price: 10000, category: "rugby", description: "Botines de alta calidad.", stock: 10 },
    { id: "2", name: "Pantalon", img: "../public/img/Imagen Rugby 02.webp", price: 8000, category: "rugby", description: "Pantalon de algodon.", stock: 10 },
    { id: "3", name: "Protector", img: "../public/img/Imagen Rugby 04.webp", price: 6500, category: "rugby", description: "Protector bucal de gran calidad.", stock: 10 },
    { id: "4", name: "Tie", img: "../public/img/Imagen Rugby 06.webp", price: 6000, category: "rugby", description: "Tie para no errar una.", stock: 10 },
    { id: "5", name: "Pelota", img: "../public/img/Imagen Futbol 06.webp", price: 9000, category: "futbol", description: "Pelota increible.", stock: 10 },
    { id: "6", name: "Camiseta", img: "../public/img/Imagen Futbol02.webp", price: 10000, category: "futbol", description: "Una Camiseta de gran calidad.", stock: 10 },
    { id: "7", name: "Pantalón", img: "../public/img/Imagen Futbol 04.webp", price: 5500, category: "futbol", description: "Un pantalon de gran calidad.", stock: 10 },
  ];
    
    export const getProducts = () => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          setTimeout(() => {
            resolve(products);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };
  
    export const getProductById = (id) => {
      return new Promise((resolve, reject) => {
        
        if (products.length > 0) {
          const product = products.find( p => p.id === id);
          
          setTimeout(() => {
            if(!product) {
              reject(`No se encuentra el producto con el id ${id}`)
            }
            resolve(product);
          }, 2000);
        } else {
          reject("No hay productos");
        }
      });
    };