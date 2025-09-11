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
    { productCode: "PROD-004", score: 4.2, reviews: 67 }
  ]
};

function createCatalog(productsData, descriptionsData, stockData, ratingsData) {

    for (const items of stockData.warehouse.items) { 
        if (stockData.warehouse.items && stockData.warehouse.items.length)
            items.id = items.id.replaceAll('-', ''), 
                items.id = items.id.toLowerCase()
                    for (const desc of descriptionsData.descriptions) {
                        if (descriptionsData.descriptions && descriptionsData.descriptions.length)
                        if (desc.productId === "PROD-001") {
                            desc.fullDescription = desc.fullDescription.replace("- модель 2024 года", "").trim()
                                } else if (desc.productId === "PROD-002") { 
                                desc.fullDescription = desc.fullDescription.replace("- версия Pro", "").trim()
                                }
                            } 
                                for (const product of productsData.productName) {
                                    if (productsData.productName && productsData.productName.length)
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
// console.log(JSON.stringify(catalog, null, 2));