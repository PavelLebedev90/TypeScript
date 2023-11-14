//?type
type TUser = {
  name: string;
  age: number;
};
type Admin = TUser & {
  high_role: true;
};

// type TUser = {};

//?interface
interface IUser {
  name: string;
  age: number;
}

interface IUser {
  surname: string;
}

interface IAdmin extends IUser {
  high_role: true;
}

interface IUser extends TUser {
  payload: string
}

// const user: IUser = {};

//? тип объединения

export type NumberOrString = number | string;

type UnionUser =
  | {
      username: string;
      password: string;
    }
  | {
      type: string;
    };

// достаточно совпадения с одним из объектных типов
const union_user: UnionUser = { password: "test", type: "user" };

//? Пересечение

type Order = {
  status: "Created";
};

type OneHundredOrder = Order & {
  cost: 100;
};

const myOrder: OneHundredOrder = {
  status: "Created",
  cost: 100,
};

