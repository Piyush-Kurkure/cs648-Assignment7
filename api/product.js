
const { getDb, getNextSequence } = require('./db.js');

async function get(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  return product;
}

async function list() {
  const db = getDb();
  const products = await db.collection('products').find({}).toArray();
  return products;
}

async function add(_, { product }) {
  const db = getDb();
  const newProduct = { ...product };
  newProduct.id = await getNextSequence('products');
  const result = await db.collection('products').insertOne(newProduct);
  const savedproduct = await db.collection('products')
    .findOne({ _id: result.insertedId });
  return savedproduct;
}
async function update(_, { id, changes }) {
  const db = getDb();
  await db.collection('products').updateOne({ id }, { $set: changes });
  const savedproduct = await db.collection('products').findOne({ id });
  return savedproduct;
}

async function remove(_, { id }) {
  const db = getDb();
  const product = await db.collection('products').findOne({ id });
  if (!product) return false;
  let result = await db.collection('deleted_products').insertOne(product);
  if (result.insertedId) {
    result = await db.collection('products').removeOne({ id });
    return result.deletedCount === 1;
  }
  return false;
}

async function count() {
  const db = getDb();
  const productCount = {};
  const result = await db.collection('products').aggregate([{ $count: 'total' }]).toArray();
  // console.log(result[0].total);
  productCount.total = result[0].total;
  return productCount;
}

module.exports = {
  list,
  add,
  get,
  update,
  delete: remove,
  count,
};
