// 工厂模式

abstract class Product {
  public abstract use(): void
}

abstract class Factory {
  public create(owner: string) {
    const p = this.createProduct(owner)
    this.registerProduct(p)
    return p
  }
  abstract createProduct(owner: string): Product
  abstract registerProduct(product: Product): void
}

class IDCard extends Product {
  private owner: string
  constructor(owner: string) {
    super()
    this.owner = owner
  }

  public use(): void {
    console.log(`制作 ${this.owner} 的 IDCard`);
  }

  public getOwner() {
    return this.owner
  }
}

class IDCardFactory extends Factory {
  private owners: Product[] = []
  constructor() {
    super()
  }

  createProduct(owner: string): Product {
    return new IDCard(owner)
  }

  registerProduct(product: Product): void {
    this.owners.push(product)
  }
}

function main() {
  const factory = new IDCardFactory()
  const card1 = factory.create("stephen")
  const card2 = factory.create("james")
  const card3 = factory.create("paul")

  card1.use()
  card2.use()
  card3.use()
}

export default main