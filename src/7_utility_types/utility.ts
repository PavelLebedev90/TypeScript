type Query = {
  sort?: string;
  name: string;
  city: string;
  params: {
    page: number;
    per_page: number;
  };
};

//? Record
const write: TWrite<"user" | "admin", { id: number; name: string }> = {
  admin: {
    id: 1,
    name: "Vitya",
  },
  user: {
    id: 2,
    name: "Vasya",
  },
};

type TWrite<T extends string | symbol, U extends unknown> = {
  [Key in T]: U;
};


//? Omit
type TMiss = Miss<Query, "sort">;

type Miss<T extends Record<string, unknown>, U extends keyof T> = {
  [Key in keyof T as Key extends U ? never : Key]: T[Key];
};

//? Pick

type Choose_1<T extends Record<string, unknown>, K extends keyof T> = {
  [Key in keyof T as Key extends K ? Key : never]: T[Key];
};

type Choose_2<T extends Record<string, unknown>, K extends keyof T> = {
  [Key in K]: T[Key];
};

type TChoose_1 = Pick<Query, "sort" | "city">;
type TChoose_2 = Choose_2<Query, "sort" | "city">;

//? Partial
type Fractional<T> = {
  [Key in keyof T]?: T[Key];
};

type TFractional = Fractional<Query>;
type TDeepFractional = DeepFractional<Query>;

type DeepFractional<T> = T extends Record<string, unknown>
  ? {
      [Key in keyof T]?: DeepFractional<T[Key]>;
    }
  : T;

//?
type Necessary<T> = {
  [Key in keyof T]-?: T[Key];
};
type TNecessary = Necessary<TDeepFractional>;

//? Readonly
type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};
type TMyReadonly = MyReadonly<Query>;

//?Exclude
type MyExclude<T, U> = T extends U ? never : T;
type TMyExclude = MyExclude<"sort" | "city", "sort">;

//?Extract
type MyExtract<T, U> = T extends U ? T : never;
type TMyExtract = MyExtract<"sort" | "city", "sort">;
//?NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T;
type TMyNonNullable = MyNonNullable<string[] | null | undefined>;

//?Parameters

type Options<T extends (...args: any[]) => unknown> = T extends (
  ...args: infer P
) => unknown
  ? P
  : unknown;




type TOptions = Parameters<
  (
    id: number,
    name: string,
    options: {
      sort: "desc";
    }
  ) => void
>;
//?ReturnType
type MyReturnType<T extends (...args: any[]) => unknown> = T extends (
  ...args: any[]
) => infer R
  ? R
  : unknown;

function f2() {
  return {
    id: 1,
    name: "Boris",
    options: {
      sort: "desc",
    },
  };
}
type TMyReturnType = MyReturnType<typeof f2>;

//? Uppercase Lowercase Capitalize Uncapitalize
type TUppercase = Uppercase<'hello'>
type TLowercase = Lowercase<'HELLO'>
type TCapitalize = Capitalize<'hello'>
type TUncapitalize = Uncapitalize<'Hello'>


//?https://github.com/type-challenges/type-challenges