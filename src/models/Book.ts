export default class Book implements I_Book {
  id: number;
  author: string;
  date: string;

  // title will be tranformed in the real time
  private _title: string;

  constructor(data: BookTypeClient) {
    const { id, title, author, date } = data;

    this.id = id;
    this.author = author;
    this.date = date;

    this._title = title;
  }

  get title() {
    // TODO: clear special symbols
    return this._title.toUpperCase();
  }

  set title(val: string) {
    this._title = val;
  }
}
