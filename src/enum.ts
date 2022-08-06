enum RType {
  SUCCESS = 5,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}
interface APIResponse1<T> {
  status: number;
  type1: RType;
  data: T;
}

const response1: APIResponse1<object> = {
  status: 400,
  type1: RType.FAILURE,
  data: {
    name: "test",
  },
};
console.log(response1.type1); //6
