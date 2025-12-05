import { useState, useEffect } from "react"
import { Card } from "./card"

export function Home() {
      const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=df4a48057eeb4ed2aa96d719fbbd6d32").then(res => res.json()).then(res => setNews(res.articles))
 },[]) 
    return(
        <div>
        <div style={{textAlign: "center"}}>
          <h1>📰 Daily News Hub</h1>
          <p style={{marginBottom:"-7%"}}>Stay updated with the latest headlines</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 30%)", gridTemplateRows:"auto", margin:"10%", textAlign:"center", alignItems:"center", justifyContent:"center"}}>
           {news ? news.map((article, index) => {
            return <Card id={index} title={article.title} url={article.url} img={article.urlToImage} desc={article.description} index={index} />
            } ) : <div>error</div>}
        </div>
      </div> 
    )
}