// 迭代器模式

// 书
class Book {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

// 迭代器接口
interface IIterator {
  hasNext: () => void
  next: () => void
}

// 集合接口
interface Aggregate {
  iterator: () => IIterator
}

// 书架
class BookShelf implements Aggregate {
  private last: number
  private maxSize: number
  private books: Book[]
  constructor(maxSize: number) {
    this.last = 0
    this.maxSize = maxSize
    this.books = new Array(this.maxSize)
  }

  public appendBook(book: Book) {
    if (this.last < this.maxSize) {
      this.books[this.last] = book
      this.last++
    }
  }

  public getBookAt(index: number) {
    return this.books[index]
  }

  public getLength() {
    return this.books.length
  }

  public iterator() {
    return new BookShelfIterator(this)
  }
}

// 书架迭代器
class BookShelfIterator implements IIterator {
  public index
  public bookShelf
  constructor(bookShelf: BookShelf) {
    this.index = 0
    this.bookShelf = bookShelf
  }

  hasNext() {
    return this.index < this.bookShelf.getLength() ? true : false
  }

  next() {
    const book = this.bookShelf.getBookAt(this.index)
    this.index++;
    return book
  }
}

// 测试代码
function main() {
  const bookShelf = new BookShelf(4)

  bookShelf.appendBook(new Book("book1"))
  bookShelf.appendBook(new Book("book2"))
  bookShelf.appendBook(new Book("book3"))
  bookShelf.appendBook(new Book("book4"))

  const it = bookShelf.iterator()

  while (it.hasNext()) {
    const book = it.next()
    console.log(book.getName())
  }
}

export default main
