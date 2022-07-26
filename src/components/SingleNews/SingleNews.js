import "./SingleNews.css";

export default function SingleNews({ news }) {
  return (
    <>
      {news.length === 0 ? (
        <h3 className="search-alert">Sorry Nothing Came Out</h3>
      ) : (
        news.map((article, id) => {
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
        })
      )}
    </>
  );
}
