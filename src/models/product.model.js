export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrL) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrL;
  }

  static get() {
    return products;
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    29.99,
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    39.99,
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
  ),
];
