import { http } from "../../http";
import urls from "./urls";

// real server request simulation
export const getBooks = () => {
  return http.get(urls.booksUrl);
};
