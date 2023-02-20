// 单例模式

class Singleton {
  private static singleton = new Singleton()
  private constructor() {
    console.log("生成了一个实例");
  }

  public static getSingletonInstance() {
    return this.singleton
  }
}

function main() {
  const obj1 = Singleton.getSingletonInstance()
  const obj2 = Singleton.getSingletonInstance()
  console.log(obj1 === obj2)
}

export default main