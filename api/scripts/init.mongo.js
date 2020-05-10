/* global db print */
/* eslint no-restricted-globals: "off" */
db.products.remove({});
db.deleted_products.remove({});
const productDB = [
  {
    id: 1,
    category: 'Jeans',
    name: 'Nike',
    price: 5,
    image: 'https://media.kohlsimg.com/is/image/kohls/1070546_Quartz_Stone?wid=500&hei=500&op_sharpen=1',
    description: 'This is good Jeans',
  },
  {
    id: 2,
    category: 'Shirts',
    name: 'Adidas',
    price: 4,
    image: 'https://media.kohlsimg.com/is/image/kohls/923076_Zinfandel?wid=500&hei=500&op_sharpen=1',
    description: 'This is good shirt',
  },

];
db.products.insertMany(productDB);
const count = db.products.count();
print('Inserted', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ category: 1 });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });

db.deleted_products.createIndex({ id: 1 }, { unique: true });
