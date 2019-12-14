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