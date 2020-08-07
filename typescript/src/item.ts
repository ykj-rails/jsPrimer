export class Book {
  constructor(private name: string, private price: number) {}

  public say(app: HTMLElement | null): void {
    if (app) app.innerHTML = `書名:${this.name}　価格:${this.price}円`
  }
}
