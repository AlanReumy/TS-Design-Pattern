// 在父类中定义处理流程，在子类中实现具体处理

// 使用抽象类定义处理流程
abstract class AbstractDisplay {
  public abstract open(): void
  public abstract print(): void
  public abstract close(): void
  public display(): void {
    this.open()
    for (let i = 0; i < 5; i++) {
      this.print()
    }
    this.close()
  }
}

class CharDisplay extends AbstractDisplay {
  constructor(public ch: string) {
    super()
  }
  public open(): void {
    console.log("<<");
  }

  public print(): void {
    console.log(this.ch)
  }

  public close(): void {
    console.log(">>");
  }
}


// 子类负责具体实现
class StringDisplay extends AbstractDisplay {
  constructor(public str: string) {
    super()
  }
  public open(): void {
    console.log("--");
  }

  public print(): void {
    console.log(this.str)
  }

  public close(): void {
    this.printLine()
  }

  private printLine() {
    for (let i = 0; i < 5; i++) {
      console.log("~~~");
    }
  }
}


function main() {
  const d1 = new CharDisplay("H")
  const d2 = new StringDisplay("Hello World")
  d1.display()
  d2.display()
}

export default main