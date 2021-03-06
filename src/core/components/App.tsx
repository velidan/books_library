import React from "react";
import { Observer } from "mobx-react";

import BooksLibrary from "modules/books-library";
import { storeContext, StoresEnum } from "stores";
import { Toast } from "shared";

export default function App() {
  /* here could be some hook to provide some dedicated stores instead the root store
   * but now it's redundant and I don't want to waste time for it.
   */
  const toastStore = React.useContext(storeContext)[StoresEnum.toastStore];

  return (
    <React.Fragment>
      <BooksLibrary />
      {/* Prevision changes tracking */}
      <Observer>
        {() => (
          <Toast
            open={toastStore.open}
            config={toastStore.config}
            onClose={toastStore.hide}
          />
        )}
      </Observer>
    </React.Fragment>
  );
}
