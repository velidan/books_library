import dateService from "../services/dateService";

const validatorService: ValidatorService = {
  createRequiredValidate: (msg?: string) => (val: string) => {
    const finalMsg = msg ? msg : "Required";
    return Boolean(val) || finalMsg;
  },

  dateValidate(val: string) {
    return dateService.isValidFormat(val) || "Invalid format. Use d MMMM yyyy";
  }
};

export { validatorService };
