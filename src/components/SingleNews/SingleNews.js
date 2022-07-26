import { useState, useEffect } from "react";
import "./SingleNews.css";
import axios from "axios";

export default function SingleNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        "https://newsapi.org/v2/everything?q=developer&apiKey=4e2552b196c0470baff20d4fc4a506d9"
      );
      setNews(res.data.articles);
    };
    fetchData();
    document.getElementsByClassName("hover").onmouseleave = () => {
      document.getElementsByClassName("hover").remove();
    };
  }, []);

  console.log(news);

  return (
    <>
      {news.map((article, id) => {
        let day = new Date(article.publishedAt).toLocaleDateString("en-gb", {
          day: "numeric",
        });
        let month = new Date(article.publishedAt).toLocaleDateString("en-gb", {
          month: "short",
        });
        return (
          <figure key={id} className="snip1312">
            <div className="image">
              {" "}
              <img src={article.urlToImage} alt="news" />
            </div>
            <figcaption>
              <div className="date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <footer>
                <div className="author">
                  <i className="fa-solid fa-user-pen"></i>
                  Author:
                  {" " + article.author}
                </div>
              </footer>
            </figcaption>
            <a href={article.url}> </a>
          </figure>
        );
      })}
    </>
  );
}
