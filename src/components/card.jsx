import { Link } from "react-router-dom"

export const Card = ({title, img, desc, url, id, index}) => {
    return(
        <Link to={`/news/${id}`} state={{title, img, desc, url}}>
            <div key={index} style={{backgroundColor: "#FFFFFF", marginRight: "10%", marginBottom:"5%", marginRight:"3%", borderRadius:"15px"}}>
              {img ? (<img style={{borderTopRightRadius:"15px", borderTopLeftRadius:"15px"}} width="100%" alt='img' src={img}/>)
              :
               (<div style={{width:"100%", height:"100px"}} ><p> No Image Available </p></div>)}
              <h4>{title}</h4>
              <p>{desc}</p>
              <a href={url} style={{marginBottom:"10%"}}>Read Full Article →</a>
            </div>
        </Link>
    ) 
}