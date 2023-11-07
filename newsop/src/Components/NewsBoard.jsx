import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));
        
    },[category])


  return (
    <div>
        <h2 className="text-center">A-Z <span className="badge bg-success">News</span> </h2>
        {articles.map((news,index)=>{
              return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url = {news.url}/>
        })}
    </div>
  )
}

export default NewsBoard