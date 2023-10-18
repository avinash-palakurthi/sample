import { useEffect } from "react";

const Home = () => {
  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=a34c63ca62354ce89cb70cd91218fb4c"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    getNews();
  }, []);

  return <div className="bg-black h-screen w-full"></div>;
};

export default Home;
