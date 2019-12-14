export enum StoresEnum {
  booksStore = "booksStore"
}

export type RootStore = {
  [StoresEnum.booksStore]: I_BooksStore;
};
