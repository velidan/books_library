const data = [
  {
    id: 0,
    author: "John Smith",
    title: "Policenauts",
    date: "1996-10-15T02:35:32.000Z"
  },
  {
    id: 1,
    author: "Rei Kinshima",
    title: "The land of violence",
    date: "2001-05-12T05:21:37.000Z"
  },
  {
    id: 2,
    author: "Nicolas Rawenclaw",
    title: "Happy moments",
    date: "2007-02-03T02:43:37.000Z"
  },
  {
    id: 3,
    author: "Alatiel Vestra",
    title: "The metal incognito",
    date: "2010-11-04T01:43:37.000Z"
  }
];

export default {
  get: (url: string) => Promise.resolve(data),
  post: () => alert("post")
};
