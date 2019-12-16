import { dateService } from "shared/services";
import { toPascalCase, cleanStr } from "shared/utils";

function getEmptyBook() {
  return {
    // id shouldn't be there in the real case as the server should create it.
    id: Date.now(),
    title: "",
    author: "",
    date: dateService.createCurrentDate()
  };
}

export default class Book implements I_Book {
  id: number;
  author: string;
  date: string;

  // title will be tranformed in the real time
  private _title: string;

  constructor(data: BookTypeClient = getEmptyBook()) {
    const { id, title, author, date } = data;

    this.id = id;
    this.author = author;
    this.date = date;

    this._title = title;
  }

  get title() {
    /* it's like an Angular PIPE. But I'd like to do such things in models
     * instead chaoticly in the Views. It didn't change the initial format
     * because pipe is just a View-transformation.
     * But we could map it at in/out stage or transform during on change etc.
     * Depends on the requirements
     * */
    return toPascalCase(cleanStr(this._title));
  }

  set title(val: string) {
    this._title = val;
  }
}
