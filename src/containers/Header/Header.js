import "./Header.css";

import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageHeading from "../../components/PageHeading/PageHeading";
import SingleNews from "../../components/SingleNews/SingleNews";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [news, setNews] = useState([]);
  const [filteredData, setFilteredData] = useState(news);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = news.filter((data) => {
      return data.tags.search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        "https://dev.to/api/articles/latest?per_page=100&tag=react"
      );

      setNews(res.data);
      setFilteredData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="header-container">
        <HeaderLogo />
        <SearchBar handleSearch={handleSearch} />
      </div>
      <PageHeading />
      <div className="content-container">
        <SingleNews news={filteredData} />
      </div>
    </>
  );
}
