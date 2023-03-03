export class Article {
  public name: String = '';
  public price: number = 0;
  public description: String = '';

  constructor(name: String, price: number, description: String) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
