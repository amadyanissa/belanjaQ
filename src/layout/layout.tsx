import Header from "../components/header";
import NavBar from "../components/navBar";
import MetaTags from "../../src/services/metaTagProcess";

interface ILayoutProps {
  children: React.ReactChild;
  search?: string;
  onChange: (string) => void;
}
export default function Layout(props: ILayoutProps) {
  return (
    <div>
      <MetaTags
        robots="noindex,nofollow"
        title={"BelanjaQ"}
        description={"Ayok Belanja dengan Q"}
        hrefLang={"/"}
        currentURL=""
      ></MetaTags>
      <Header
        onChange={(string) => {
          props.onChange(string);
        }}
        search={props?.search}
      ></Header>
      {props.children}
      <NavBar></NavBar>
    </div>
  );
}
