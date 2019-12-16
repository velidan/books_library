type BookBase = {
	id: number;
	author: string;
	title: string;
}

/* just a demo to show how to separate different presentation types of the Same Model
  'date' could have some specific types for the backend only
*/
type BookTypeServer = BookBase & {
	date: string;
}

/* just a demo to show how to separate different presentation types of the Same Model.
  'date' could have some specific types for the client only
*/
type BookTypeClient = BookBase & {
	date: string;
}

interface I_Book extends BookTypeClient {
	date: string
};

// type Validator = (val: string, ...args?: any) => string | null;

type ValidatorService = {
	createRequiredValidate: (msg?: string) => (val: string) => boolean | msg;
	dateValidate: (val: string) => boolean | string;
}

type DateService = {
	
}

type FormFieldError = {
	// https://react-hook-form.com/api/#errors
	ref: object; 
	type: string
	message: string;
}


interface I_DateService {
	/** DD.MM.YYYY */
	dateFormat: string;

	/* current Date in the client format */
	formattedCurrentDate: string;

	createCurrentDate: () => string;
	isValidFormat: (str: string, format?: string) => boolean;
	formatISO: (isoStr: string, dateFormat?: string) => string;
	formatDateToStr: (dateFns: Date, dateFormat?: string) => string;
}