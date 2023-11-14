
type ApiResponse = {
  data: Array<{
    firstName: string;
    lastName: string;
    age: number;
  }>;
  meta: {
    page: number;
    count: number;
  };
};

//? синтаксис свойства-аксессора
type UserList = ApiResponse["data"];

//? синтаксис массива-аксессора
type User = UserList[number]
type Length = [1,2,3]['length'] //3