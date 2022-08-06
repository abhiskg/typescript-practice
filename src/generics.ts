const addId = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "Mash",
  age: 40,
});

console.log(user.name);

// const addId = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addId({
//   name: "Mash",
//   age: 40,
// });

// console.log(user.name);

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response: APIResponse<object> = {
  status: 200,
  type: "success",
  data: {
    name: "test",
  },
};
