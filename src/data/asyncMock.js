export const productos = [
    {
        id: 1 ,
        categoria:"ojos" ,
        nombre:"Mascara de Pestañas ", 
        precio:15000 ,
        imagen:"https://i.pinimg.com/564x/76/80/07/768007d8d7793be45ab3150e7ea64b4d.jpg",
        descripcion:"Mascara de pestañas Maybelline Sky High, Very Black, efecto alargador voluminizador",
        stock: 0
    }, 
    {
        id: 2,
        categoria:"ojos" ,
        nombre: "Delineador", 
        precio: 10000,
        imagen: "https://i.pinimg.com/736x/69/27/16/692716cc8de449fc29443e23bd4c3f14.jpg",
        descripcion:"Delineador de ojos KIKO, liquido black",
        stock: 7 
    }, 
    {
        id: 3,
        categoria:"ojos" ,
        nombre:"Sombras" , 
        precio: 20000 ,
        imagen: "https://i.pinimg.com/564x/8f/9a/bb/8f9abbf6646344ff333c4543b2af8cce.jpg",
        descripcion: "Paleta de sombras NARS, tonos tierra ",
        stock: 3
    }, 
    {
        id: 4,
        categoria: "labios",
        nombre: "Delineador de Labios", 
        precio: 5000 ,
        imagen: "https://i.pinimg.com/736x/9e/11/dc/9e11dc7ddadc6914ee57eab44d1c72d2.jpg",
        descripcion: "Delineador de labios NYX, tono nude",
        stock: 0
    }, 
    {
        id: 5,
        categoria:"labios",
        nombre: "Gloss", 
        precio: 8000,
        imagen:"https://i.pinimg.com/564x/85/7a/55/857a5535228dadca65c40ab98788a646.jpg" ,
        descripcion: "Gloss para labios Fenty Beauty Heat, color transparente",
        stock: 20
    }, 
    {
        id: 6,
        categoria:"labios",
        nombre: "Labial", 
        precio: 10000,
        imagen: "https://i.pinimg.com/564x/f2/25/84/f2258459c66d000b12b37fdc994b7f53.jpg",
        descripcion: "Labial MAC en barra matte color nude",
        stock: 8
    }, 
    {
        id:7 ,
        categoria:"rostro" ,
        nombre: "Base", 
        precio: 20000,
        imagen: "https://i.pinimg.com/564x/70/cf/73/70cf734964e658e842a2824d85d259f1.jpg",
        descripcion: "Base Maybelline, Fit Me, acabado matte",
        stock: 5
    }, 
    {
        id:8 ,
        categoria: "rostro",
        nombre: "Corrector", 
        precio: 17000,
        imagen: "https://i.pinimg.com/564x/95/0e/1f/950e1f01ea204532ed6e34e47bf14623.jpg",
        descripcion: "Corrector Maybelline, Fit Me, acabado matte",
        stock: 9
    },
    {
        id: 9,
        categoria: "rostro",
        nombre: "Polvo Compacto", 
        precio: 15000,
        imagen:"https://i.pinimg.com/564x/5c/67/67/5c67674a15a976dff4eb1e4000aaddc6.jpg",
        descripcion: "Polvo Compacto Maybelline, Fit Me, acabado matte",
        stock: 2
    }, 
    {
        id: 10 ,
        categoria: "rostro",
        nombre: "Rubor", 
        precio: 10000,
        imagen: "https://i.pinimg.com/564x/6c/98/2b/6c982b8c45072aeb7b52a3364bb77479.jpg",
        descripcion: "Rubor MAC, acabado mate en color Desert rose",
        stock: 12
    }, 
    {
        id: 11,
        categoria: "rostro",
        nombre: "Iluminador", 
        precio: 10000,
        imagen: "https://i.pinimg.com/736x/1f/bd/ff/1fbdffd8baa2d58db68b2e78741b701c.jpg",
        descripcion: "Iluminador en polvo Fenty Beauty, en tono perla",
        stock: 7
    }, 
    {
        id: 12,
        categoria: "rostro",
        nombre: "Bronzer", 
        precio: 10000,
        imagen:"https://i.pinimg.com/564x/e9/25/d2/e925d28b3a1e47af6b36fe85ec71ce61.jpg" ,
        descripcion: "Bronzer en polvo Benefit Hoola",
        stock: 8
    }
];

// export const getProducts = () => {
//     return new Promise((res) => {
//       setTimeout(() => {
//         res(productos);
//       }, 1000);
//     });
// };

// export const getProductsByCategory = (category) => {
//     return new Promise((res) => {
//       const productosFiltrados = productos.filter(
//         (prod) => prod.categoria === category
//       );
//       setTimeout(() => {
//         res(productosFiltrados);
//       }, 1000);
//     });
// };
  
  
// export const getProductById = (id) => {
//     return new Promise((res) => {
//       const productoFiltrado = productos.find((prod) => prod.id === parseInt(id)); 
//       setTimeout(() => {
//         res(productoFiltrado);
//       }, 1000);
//     });
// };
  