export enum StoresEnum {
  booksStore = "booksStore",
  toastStore = "toastStore"
}

export type RootStore = {
  [StoresEnum.booksStore]: I_BooksStore;
  [StoresEnum.toastStore]: I_ToastStore;
};
