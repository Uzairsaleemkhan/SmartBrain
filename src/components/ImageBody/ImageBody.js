
import React from "react";
import "./ImageBody.css";


const ImageBody=({input,data})=>{
console.log(data)








    return(
        <div className="imageContainer">
            <img className="image" src={input} alt="" />
            {
            
                data.map((item,index)=>{
                 
                    return(
                        <div key={index} style={{
                            top:item.topRow*100+'%',left:item.leftCol*100+'%',right:(1-item.rightCol)*100+'%',bottom:(1-item.bottomRow)*100+'%'
                        }} className="box">
                            
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ImageBody;