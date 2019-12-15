const validatorService: ValidatorService = {
  createRequiredValidate: (msg?: string) => (val: string) => {
    const finalMsg = msg ? msg : "Required";
    return !val ? finalMsg : null;
  },

  dateValidate(val: string, re: string) {
    alert(val);
    alert(re);
    return null;
    // return !val ? msg : null;
  }
};

export { validatorService };
