import getData from "./my-module.js";

const result = getData(1);
result.then((userAndPosts) => console.log(userAndPosts));
