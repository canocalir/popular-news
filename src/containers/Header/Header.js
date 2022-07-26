import "./Header.css";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <HeaderLogo />
        <SearchBar />
      </div>
      <PageHeading />
    </>
  );
}
