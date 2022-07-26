import { useState, useEffect } from "react";
import "./SingleNews.css";
import axios from "axios";

export default function SingleNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        "https://dev.to/api/articles/latest?per_page=50&tag=react"
      );

      setNews(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {news.map((article, id) => {
        let day = new Date(article.created_at).toLocaleDateString("en-gb", {
          day: "numeric",
        });
        let month = new Date(article.created_at).toLocaleDateString("en-gb", {
          month: "short",
        });
        return (
          <figure key={id} className="snip1312">
            <div className="image">
              {" "}
              <img src={article.social_image} alt="news" />
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
                  {" " + article.user.username}
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
