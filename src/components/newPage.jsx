import { useLocation } from "react-router-dom"

export const NewPage = () => {
  let location = useLocation();
  const {title, img, desc, url} = location.state
    return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center", justifyItems:"center", alignContent:"center"}}>
      <div style={{padding:"10px",backgroundColor:"#f9f9f9", width:"50%", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px", marginTop:"10%", marginBottom:"10%", borderRadius:"10px"}}>
     
              <div><h3>{title}</h3>
              <img src={img} alt={title} width="100%" />
              <p>{desc}</p>
              <a href={url}>Read More</a>
            </div> 
    </div>
    </div>
    )
}