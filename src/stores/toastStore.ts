type CreateStore = () => I_ToastStore;

export const createStore: CreateStore = () => {
  return {
    open: false,

    defaultConfig: {
      autoHideDuration: 5000 // ms
    },

    config: {
      type: "success",
      message: ""
    },

    setRenderConf(config: I_ToastConf): I_ToastStore {
      this.config = {
        ...this.defaultConfig,
        ...config
      };

      return this;
    },

    show() {
      this.open = true;
    },

    hide() {
      this.open = false;
    }
  };
};
