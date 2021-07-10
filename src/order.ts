import Item from './item';

export default class Order {
  code: string;
  items: Item[];

  constructor() {
    this.code = `${Math.floor(Math.random() * 100000)}`;
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getSubtotal(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  getTaxes(): number {
    return this.items.reduce((acc, item) => acc + item.calculateTaxes(), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTaxes();
  }
}