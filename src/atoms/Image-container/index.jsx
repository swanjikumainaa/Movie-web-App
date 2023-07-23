import React from "react";
import './style.css'

const IMAGE_BASE_URL=process.env.REACT_APP_IMAGE_BASE_URL;

const ImageContainer =({props})=>{
    return(
        <div>
             <div key={props.id} className="images">
                <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt={props.title}/>                
            </div>
        </div>
    )
}
export default ImageContainer