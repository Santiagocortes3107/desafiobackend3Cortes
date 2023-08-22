const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.products = [];
    this.nextId = 1;
    this.path = filePath;
    this.loadProducts();
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    if (this.products.some(product => product.code === code)) {
      console.log("El código ya está en uso.");
      return;
    }

    const newProduct = {
      id: this.nextId,
      title,
      description,
      price,
      thumbnail: `./img/${thumbnail}`,
      code,
      stock
    };

    this.products.push(newProduct);
    this.saveProducts();
    this.nextId++;
    console.log("Producto agregado correctamente.");
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    const product = this.products.find(product => product.id === productId);

    if (!product) {
      console.log(`Producto con ID ${productId} no encontrado.`);
    }

    return product;
  }

  updateProduct(productId, updatedFields) {
    const productIndex = this.products.findIndex(product => product.id === productId);

    if (productIndex === -1) {
      console.log(`Producto con ID ${productId} no encontrado.`);
      return;
    }

    this.products[productIndex] = { ...this.products[productIndex], ...updatedFields };
    this.saveProducts();
    console.log("Producto actualizado correctamente.");
  }

  deleteProduct(productId) {
    const productIndex = this.products.findIndex(product => product.id === productId);

    if (productIndex === -1) {
      console.log(`Producto con ID ${productId} no encontrado.`);
      return;
    }

    this.products.splice(productIndex, 1);
    this.saveProducts();
    console.log("Producto eliminado correctamente.");
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      this.products = JSON.parse(data);
      const lastProduct = this.products[this.products.length - 1];
      this.nextId = lastProduct ? lastProduct.id + 1 : 1;
    } catch (error) {
      this.products = [];
      this.nextId = 1;
    }
  }

  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 4));
  }
}

module.exports = ProductManager;