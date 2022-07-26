import "./Header.css";

import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageHeading from "../../components/PageHeading/PageHeading";
import SingleNews from "../../components/SingleNews/SingleNews";


import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

export default function Header() {
  const [news, setNews] = useState([]);
  const [filteredData, setFilteredData] = useState(news);
  const [isLoading, setLoading] = useState(true);

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
        "https://dev.to/api/articles/latest?per_page=50&tag=react"
      );

      setNews(res.data);
      setFilteredData(res.data);
      setLoading(false);
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
        {isLoading ? <Loader /> : <SingleNews news={filteredData} />}
      </div>
    </>
  );
}
