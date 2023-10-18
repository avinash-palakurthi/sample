import { useEffect, useState } from "react";

const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=a34c63ca62354ce89cb70cd91218fb4c"
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(() => {
    getNews();
  }, [news]);

  return (
    <div className=" mt-20 ml-8justify-items-center  items-center bg-black text-gray-500 grid grid-cols-1 h-auto w-auto sm:grid-cols-1 sm:justify-items-center  md:grid-cols-2 lg:grid-cols-3  lg:justify-items-center  ">
      {news.map((data) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg "
          key={data.index}
        >
          <img className="w-full" src={data.urlToImage} alt="" />
          <div className="px-6 py-4 pt-3 pb-3">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-gray-700 text-base pb-4">{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
