const { cells } = require("./dbConnection")


[
    {
      "name": "iPhone 13",
      "company": "Apple",
      "description": "El último modelo de Apple con una cámara mejorada y rendimiento superior.",
      "price": 999.99
    },
    {
      "name": "Galaxy S21",
      "company": "Samsung",
      "description": "Smartphone de alta gama con una pantalla increíble y cámara de alta resolución.",
      "price": 899.99
    },
    {
      "name": "Pixel 6",
      "company": "Google",
      "description": "Teléfono inteligente con Android puro y la mejor experiencia de Google.",
      "price": 799.99
    },
    {
      "name": "OnePlus 9",
      "company": "OnePlus",
      "description": "Rendimiento rápido y fluido con una pantalla AMOLED vibrante.",
      "price": 729.99
    },
    {
      "name": "Xperia 1 III",
      "company": "Sony",
      "description": "Teléfono con capacidades multimedia excepcionales y pantalla 4K.",
      "price": 1199.99
    },
    {
      "name": "Mi 11",
      "company": "Xiaomi",
      "description": "Smartphone con excelente relación calidad-price y rendimiento destacado.",
      "price": 699.99
    },
    {
      "name": "Moto G100",
      "company": "Motorola",
      "description": "Teléfono con rendimiento rápido y batería de larga duración.",
      "price": 599.99
    },
    {
      "name": "P40 Pro",
      "company": "Huawei",
      "description": "Teléfono con cámara de alta calidad y diseño elegante.",
      "price": 999.99
    },
    {
      "name": "Redmi Note 10",
      "company": "Xiaomi",
      "description": "Smartphone asequible con buen rendimiento y cámara decente.",
      "price": 199.99
    },
    {
      "name": "Nokia 8.3",
      "company": "Nokia",
      "description": "Teléfono con una cámara versátil y diseño robusto.",
      "price": 499.99
    },
    {
      "name": "Realme GT",
      "company": "Realme",
      "description": "Teléfono con rendimiento de alta gama a un price competitivo.",
      "price": 429.99
    },
    {
      "name": "Asus ROG Phone 5",
      "company": "Asus",
      "description": "Smartphone para juegos con especificaciones potentes y diseño gamer.",
      "price": 999.99
    },
    {
      "name": "iPhone SE",
      "company": "Apple",
      "description": "Teléfono compacto con el rendimiento del iPhone más moderno.",
      "price": 399.99
    },
    {
      "name": "Galaxy A52",
      "company": "Samsung",
      "description": "Teléfono de gama media con buenas características y price accesible.",
      "price": 349.99
    },
    {
      "name": "Pixel 4a",
      "company": "Google",
      "description": "Teléfono asequible con una excelente cámara y experiencia de software.",
      "price": 349.99
    },
    {
      "name": "OnePlus Nord",
      "company": "OnePlus",
      "description": "Smartphone de gama media con buenas especificaciones y diseño moderno.",
      "price": 399.99
    },
    {
      "name": "Xperia 5 II",
      "company": "Sony",
      "description": "Teléfono compacto con características de alta gama y excelente pantalla.",
      "price": 949.99
    },
    {
      "name": "Mi 11 Lite",
      "company": "Xiaomi",
      "description": "Versión más ligera y asequible del Mi 11 con buen rendimiento.",
      "price": 299.99
    },
    {
      "name": "Moto G Power",
      "company": "Motorola",
      "description": "Teléfono con una batería impresionante que dura varios días.",
      "price": 249.99
    },
    {
      "name": "P30 Lite",
      "company": "Huawei",
      "description": "Teléfono de gama media con buenas características y cámara decente.",
      "price": 279.99
    },
    {
      "name": "Redmi 9",
      "company": "Xiaomi",
      "description": "Teléfono económico con especificaciones básicas pero suficientes.",
      "price": 149.99
    },
    {
      "name": "Nokia 5.4",
      "company": "Nokia",
      "description": "Smartphone con buenas características y diseño duradero.",
      "price": 199.99
    },
    {
      "name": "Realme 8",
      "company": "Realme",
      "description": "Teléfono de gama media con una pantalla AMOLED y buen rendimiento.",
      "price": 229.99
    },
    {
      "name": "Asus Zenfone 8",
      "company": "Asus",
      "description": "Teléfono compacto con características de alta gama y buen rendimiento.",
      "price": 699.99
    },
    {
      "name": "iPhone 12 Mini",
      "company": "Apple",
      "description": "Teléfono compacto con todas las características del iPhone 12.",
      "price": 729.99
    },
    {
      "name": "Galaxy Z Fold 2",
      "company": "Samsung",
      "description": "Teléfono plegable de alta gama con una pantalla innovadora.",
      "price": 1999.99
    },
    {
      "name": "Pixel 5",
      "company": "Google",
      "description": "Teléfono con una excelente cámara y experiencia de software puro.",
      "price": 699.99
    },
    {
      "name": "OnePlus 8T",
      "company": "OnePlus",
      "description": "Smartphone con carga rápida y rendimiento fluido.",
      "price": 599.99
    },
    {
      "name": "Xperia 10 III",
      "company": "Sony",
      "description": "Teléfono de gama media con buenas características y diseño compacto.",
      "price": 429.99
    },
    {
      "name": "Mi 10T Pro",
      "company": "Xiaomi",
      "description": "Teléfono con una pantalla de alta frecuencia de actualización y buen rendimiento.",
      "price": 549.99
    },
    {
      "name": "Moto G Stylus",
      "company": "Motorola",
      "description": "Teléfono con un lápiz óptico integrado para mayor productividad.",
      "price": 299.99
    },
    {
      "name": "P40 Lite",
      "company": "Huawei",
      "description": "Smartphone asequible con buenas características y cámara decente.",
      "price": 249.99
    },
    {
      "name": "Redmi Note 9 Pro",
      "company": "Xiaomi",
      "description": "Teléfono con una gran batería y buen rendimiento a un price accesible.",
      "price": 299.99
    },
    {
      "name": "Nokia 3.4",
      "company": "Nokia",
      "description": "Teléfono económico con características básicas pero funcionales.",
      "price": 149.99
    },
    {
      "name": "Realme Narzo 30",
      "company": "Realme",
      "description": "Teléfono económico con buen rendimiento y diseño moderno.",
      "price": 199.99
    },
    {
      "name": "Asus Zenfone 7",
      "company": "Asus",
      "description": "Teléfono con una pantalla sin interrupciones y una cámara giratoria.",
      "price": 749.99
    },
    {
      "name": "iPhone XR",
      "company": "Apple",
      "description": "Teléfono con una pantalla grande y buen rendimiento a un price más accesible.",
      "price": 499.99
    },
    {
      "name": "Galaxy A32",
      "company": "Samsung",
      "description": "Teléfono de gama media con buena batería y pantalla AMOLED.",
      "price": 279.99
    },
    {
      "name": "Pixel 3a",
      "company": "Google",
      "description": "Teléfono asequible con una cámara excelente y software puro.",
      "price": 349.99
    },
    {
      "name": "OnePlus 7T",
      "company": "OnePlus",
      "description": "Smartphone con pantalla fluida y rendimiento excelente.",
      "price": 499.99
    },
    {
      "name": "Xperia L4",
      "company": "Sony",
      "description": "Teléfono económico con características básicas pero funcionales.",
      "price": 199.99
    },
    {
      "name": "Mi 9",
      "company": "Xiaomi",
      "description": "Teléfono con buena relación calidad-precio y rendimiento decente.",
      "price": 399.99
    },
    {
      "name": "Moto E7 Plus",
      "company": "Motorola",
      "description": "Teléfono económico con buena batería y rendimiento básico.",
      "price": 149.99
    },
    {
      "name": "P Smart 2021",
      "company": "Huawei",
      "description": "Teléfono asequible con buena batería y características decentes.",
      "price": 229.99
    },
    {
      "name": "Redmi 8A",
      "company": "Xiaomi",
      "description": "Teléfono básico con buen rendimiento y batería de larga duración.",
      "price": 129.99
    },
    {
      "name": "Nokia 2.4",
      "company": "Nokia",
      "description": "Teléfono económico con características básicas pero funcionales.",
      "price": 129.99
    },
    {
      "name": "Realme C25",
      "company": "Realme",
      "description": "Teléfono económico con buena batería y rendimiento básico.",
      "price": 159.99
    }
  ]
  