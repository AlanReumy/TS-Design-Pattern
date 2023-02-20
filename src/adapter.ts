// 适配器模式

class Banner {
  constructor(protected content: string) { }
  protected showWithParen() {
    console.log(`( ${this.content} )`);
  }
  protected showWithAster() {
    console.log(`* ${this.content} *`);
  }
}

interface Print {
  printWeak: () => void
  printStrong: () => void
}

class PrintBanner extends Banner implements Print {
  constructor(public content: string) {
    super(content)
  }

  public printWeak() {
    this.showWithAster()
  }

  public printStrong() {
    this.showWithParen()
  }
}

function main() {
  const p = new PrintBanner("Hello")
  p.printStrong()
  p.printWeak()
}

export default main