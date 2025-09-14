const productsData = {
  productName: [
    {
        itemId: "PROD-001",
        productName: "Смартфон Galaxy Ultra 2024",
        priceValue: 89999,
        categoryType: "ЭЛЕКТРОНИКА"
    },
    {
    itemId: "PROD-002", 
        productName: "Беспроводные наушники SoundMax Pro",
        priceValue: 12999,
        categoryType: "АКСЕССУАРЫ"
    }
  ]
};
const descriptionsData = {
  descriptions: [
    {
      productId: "PROD-001",
      fullDescription: "Флагманский смартфон с камерой 108 МП и батареей на 2 дня - модель 2024 года"
    },
    {
      productId: "PROD-002",
      fullDescription: "Наушники с шумоподавлением и временем работы до 30 часов - версия Pro"
    }
  ]
};
const stockData = {
  warehouse: {
    items: [
      { id: "PROD-001", quantity: 15, location: "A-12" },
      { id: "PROD-002", quantity: 0, location: "B-07" },
      { id: "PROD-003", quantity: 8, location: "C-03" }
    ]
  }
};
const ratingsData = {
  ratings: [
    { productCode: "PROD-001", score: 4.8, reviews: 125 },
    { productCode: "PROD-002", score: 4.5, reviews: 89 },
    { productCode: "PROD-003", score: 4.2, reviews: 67 }
  ]
};

function createCatalog(productsData, descriptionsData, stockData, ratingsData) {
    if (stockData.warehouse.items && stockData.warehouse.items.length) {
        for (const item of stockData.warehouse.items) { 
            item.id = item.id.replaceAll('-', '');
            item.id = item.id.toLowerCase();
        }
    };
    
    if (descriptionsData.descriptions && descriptionsData.descriptions.length) {
        for (const desc of descriptionsData.descriptions) {
            if (desc.productId === "PROD-001") {
                desc.fullDescription = desc.fullDescription.replace("- модель 2024 года", "").trim();
            } else if (desc.productId === "PROD-002") { 
                desc.fullDescription = desc.fullDescription.replace("- версия Pro", "").trim();
            }
        }
    };
    
    if (productsData.productName && productsData.productName.length) {
        for (const product of productsData.productName) {
            product.categoryType = product.categoryType.toLowerCase();
            if (product.itemId === "PROD-001") {
                product.productName = product.productName.replace("2024", "").trim();  
            }
        }
    };
    
    const quantityInStock = stockData.warehouse.items.filter(item => item.quantity > 0);
    
    return {
        productsData,
        descriptionsData,
        stockData,
        ratingsData,
        quantityInStock
    }
};

const catalog = createCatalog(productsData, descriptionsData, stockData, ratingsData);

const catalogProducts = [];

catalog.productsData.productName.forEach(product => {
  catalogProducts.push({
      id: product.itemId,
      name: product.productName,
      fullName: `${product.productName} 2024`,
      price: product.priceValue,
      category: product.categoryType
    })
  }
);

if (catalog.descriptionsData?.descriptions?.length) {
    for (const description of catalog.descriptionsData.descriptions) {
        const product = catalogProducts.find(p => p.id === description.productId);
        if (product) {
            product.description = description.fullDescription;
        }
    }
};

// if (stockData.warehouse.items && stockData.warehouse.items.length) {
//     for (const stock of stockData.warehouse.items) {
//         const stocks = catalogProducts.find(s => quantity > 0);
//         if (stocks) {
//             product.description = description.fullDescription;
//         }
//     }
// }