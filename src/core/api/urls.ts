export default {
  host: "https://host",
  get booksUrl() {
    return `${this.host}/books`;
  }
};
