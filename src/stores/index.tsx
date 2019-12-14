import * as React from "react";
import { useLocalStore } from "mobx-react";

import { createStore as createBooksStore } from "./bookStore";
import { RootStore } from "./types";

// we don't want to fight aganist null checking and Typescript's Object is possibly 'null' violation
export const storeContext = React.createContext<RootStore>({} as RootStore);

type FCType = { children?: React.ReactNode };

export const StoreProvider: React.FC = ({ children }: FCType) => {
  const booksStore = useLocalStore(createBooksStore);
  const rootStore: RootStore = {
    booksStore
  };

  return (
    <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
export * from "./types";
