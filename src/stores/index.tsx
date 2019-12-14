import * as React from "react";
import { useLocalStore } from "mobx-react";

import { createStore as createBooksStore } from "./bookStore";
import { createStore as createToast } from "./toastStore";
import { RootStore } from "./types";

// we don't want to fight aganist null checking and Typescript's Object is possibly 'null' violation
export const storeContext = React.createContext<RootStore>({} as RootStore);

type FCType = { children?: React.ReactNode };

export const StoreProvider: React.FC = ({ children }: FCType) => {
  // should be used a service to automatically provide a root store, store isntance etc.
  const booksStore = useLocalStore(createBooksStore);
  const toastStore = useLocalStore(createToast);
  const rootStore: RootStore = {
    booksStore,
    toastStore
  };

  return (
    <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
export * from "./types";
