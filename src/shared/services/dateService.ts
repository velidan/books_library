// TODO: Implement some DI
import { format, parseISO, parse, isValid } from "date-fns";

import regs from "shared/utils/regs";

class DateService implements I_DateService {
  dateFormat: string = "d MMMM yyyy";
  formattedCurrentDate: string;

  constructor() {
    this.formattedCurrentDate = this.createCurrentDate();
  }

  // without date format it returns ISO string by default
  formatDateToStr(date: Date, dateFormat: string = this.dateFormat): string {
    return date ? format(date, dateFormat) : "";
  }

  formatISO(isoStr: string, dateFormat: string = this.dateFormat): string {
    return isoStr ? format(parseISO(isoStr), dateFormat) : "";
  }

  createCurrentDate() {
    return this.formatDateToStr(new Date());
  }

  isValidFormat(str: string, format = this.dateFormat) {
    const isValidTextFormat = regs.dateFormat.test(str);
    // if the format bad we need to prevent next actions
    if (!isValidTextFormat) {
      return false;
    }

    // if format okay we need to check if it's a real date
    const res = parse(str, format, new Date());
    return isValid(res);
  }
}

export default new DateService();
