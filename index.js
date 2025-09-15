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

function phoneCatalog(productsData, descriptionsData, stockData, ratingsData) {
    const removeProdPrefix = (id) => id.split('PROD-')[1];

    if (stockData.warehouse.items && stockData.warehouse.items.length) {
        for (const item of stockData.warehouse.items) { 
            item.id = removeProdPrefix(item.id);
        }
    };
    
    if (descriptionsData.descriptions && descriptionsData.descriptions.length) {
        for (const desc of descriptionsData.descriptions) {
            desc.productId = removeProdPrefix(desc.productId);
            
            if (desc.productId === "001") {
                desc.fullDescription = desc.fullDescription.split("-")[0];
            } else if (desc.productId === "002") { 
                desc.fullDescription = desc.fullDescription.split("-")[0];
            }
        }
    };
    
    if (productsData.productName && productsData.productName.length) {
        for (const product of productsData.productName) {
            product.itemId = removeProdPrefix(product.itemId);
            product.categoryType = product.categoryType.toLowerCase();
            
            if (product.itemId === "001") {
                product.productName = product.productName.split("2024")[0];  
            }
        }
    };
    
    if (ratingsData.ratings && ratingsData.ratings.length) {
        for (const rating of ratingsData.ratings) {
            rating.productCode = removeProdPrefix(rating.productCode);
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

const modifiedCreateCatalog = phoneCatalog(productsData, descriptionsData, stockData, ratingsData);

function CreateCatalog(phoneCatalog) {
  const catalogProducts = [];

  phoneCatalog.productsData.productName.forEach(product => {
    const stockItem = phoneCatalog.stockData.warehouse.items.find(item => item.id === product.itemId);
    const inStock = stockItem && stockItem.quantity > 0;
    const quantity = stockItem ? stockItem.quantity : 0;

    const ratingItem = phoneCatalog.ratingsData.ratings.find(rating => rating.productCode === product.itemId);
    const rating = ratingItem ? ratingItem.score : 0;
    const reviews = ratingItem ? ratingItem.reviews : 0;
    
    catalogProducts.push({
      id: product.itemId,
      name: product.productName,
      fullName: product.productName,
      price: product.priceValue,
      category: product.categoryType,
      inStock: inStock,
      quantity: quantity,
      rating: rating,
      reviews: reviews
    })
  })

  return catalogProducts;

};

const catalog = CreateCatalog(modifiedCreateCatalog);

console.log(catalog);