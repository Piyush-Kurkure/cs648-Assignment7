/* global db print */
/* eslint no-restricted-globals: "off" */
db.products.remove({});
db.deleted_products.remove({});
db.counters.remove({});
const Categories = ['Shirts', 'Jeans', 'Jackets', 'Sweaters', 'Accessories'];
const Names = ['Puma', 'Nike'];
const Images = ['https://media.kohlsimg.com/is/image/kohls/1070546_Quartz_Stone?wid=500&hei=500&op_sharpen=1', 'https://media.kohlsimg.com/is/image/kohls/923076_Zinfandel?wid=500&hei=500&op_sharpen=1'];
const incount = db.products.count();
for (let i = 0; i < 75; i += 1) {
  const category = Categories[Math.floor(Math.random() * 5)];
  const name = Names[Math.floor(Math.random() * 2)];
  const price = Math.ceil(Math.random() * 200);
  const image = Images[Math.floor(Math.random() * 2)];
  const id = incount + i + 1;
  const product = {
    category, name, price, image, id,
  };
  db.products.insertOne(product);
}
const it = db.products.count();
db.counters.insert({ _id: 'products', current: it });
print('New product count:', it);
