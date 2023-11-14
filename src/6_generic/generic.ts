interface Page<T> {
  title: string;
  content: string;
  lang: T;
}

function getPage<T>(title: string, content: string, lang: T): Page<T> {
  return {
    content,
    lang,
    title,
  };
}
// при вызове не требует передачу дженерика
getPage<'ru'>("Резюме", "content", "ru");

//интерфейсы и типы требуют передачу дженерика, если он есть
const mainPage: Page<string> = {
  content: "content",
  lang: "ru",
  title: "Main Page",
};

//? extends
//ограничение или проверка типа. Является ли переданный тип подтипом ограничения
// тип Т может быть подтипом строки либо самой строкой
//? супертипы и подтипы
type Сomparison<T, U> = T extends U ? true : false;
type TСomparison = Сomparison<string, 'string'>;
// type Distribution
type StringUnion = 'a' | 'b'
type StringBox<T extends string> = T extends string ? {value: T} : never
type TStringBox = StringBox<StringUnion>
type StringBoxWithoutDest<T> = [T] extends [string] ? {value: T} : never
type TStringBoxWithoutDest = StringBoxWithoutDest<StringUnion>

 interface IPage<T extends string> {
  title: string;
  content: string;
  lang: T;
  count: number;
  isValid: boolean;
}
const poolPage: IPage<string> = {
  content: "content",
  lang: "en",
  title: "Pool",
  count: number,
  isValid: true,
};

//? ключевые слова typeof keyof is
//?is
//Анализ потока управления - это анализ, выполняемый TS на основе достижимости кода и
// используемый им для сужения типов с учетом защитников типа и присвоений
//функция предикат
const isNumber = (value: number | string): value is string => {
  return typeof value === "string";
};
//В реализации isNumber мы уточнили тип вводного параметра до number,
// использовав typeof,
// но уточнение не перешло в другие области и утратилось, поэтому TypeScript узнал только,
// что isNumber вернула boolean.
function f1(value: number | string) {
  if (typeof value === "number") {
    // value === number
    value - 1;
  }
  if (isNumber(value)) {
    // value === string | number
    const newValue = value;
  }
}
//?typeof
type TPoolPage = typeof poolPage;

type TPoolPageKeys = keyof typeof poolPage;
type TPoolPageValues = typeof poolPage[keyof typeof poolPage];


function getValue<T extends Record<any, any>, Key extends keyof T>(
  obj: T,
  key: Key
): T[Key] {
  return obj[key];
}

const pollTitle = getValue(poolPage, "title");

//? Управляющие конструкции
//? Условные типы

// есть условие, тип A это подтип B ? верни С иначе D
//A extends B ? C : D

type IsString<T> = T extends string ? true : false;
type Str = IsString<"">;
type NotStr = IsString<{}>;

type FilterKeysByValue<Obj, T> = {
  [Key in keyof Obj]: Obj[Key] extends T ? Key : never;
}[keyof Obj];

type TFilterKeysByValue = FilterKeysByValue<typeof poolPage, number>;

//? Infer - захват типа в условной конструкции
// работает только с условной конструкцией

const tupple: [number, string] = [1, "hello"];

type Reverse<T extends any[]> = T extends [infer First, infer Second]
  ? [Second, First]
  : never;

const tuppleReverse: Reverse<typeof tupple> = ["", 1];
