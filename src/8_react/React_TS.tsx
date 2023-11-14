// передача дженерика в компонент, явное присвоение дженерика
// тип never

type PageType = "main" | "pools" | "resume";

interface IGeneral<T extends PageType> {
  page: T;
  title: string;
  description: string;
//   subtitle: T extends "main" ? string : never;
}
interface ISub extends IGeneral<PageType> {
  subtitle: string;
}
type Props<T extends PageType> = T extends "main" ? ISub : IGeneral<T>;

const Header = <T extends PageType>(props: Props<T>) => {
  const { description, page, title } = props;
  let subtitle = "";
  const isMainPage = page === "main";
  if (isMainPage) {
    subtitle = props.subtitle;
  }
  return (
    <div>
      <h1>{title}</h1>
      {isMainPage && <h3>{subtitle}</h3>}
      <p>{description}</p>
    </div>
  );
};

const MainPage = () => {
  return <Header page="pools" title="Main" description="this is main page" />;
};
