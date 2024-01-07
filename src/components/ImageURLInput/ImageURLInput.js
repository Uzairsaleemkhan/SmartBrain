import React from "react";
import './ImageURLInput.css';

const ImageURLInput =()=>{
    return (
        <div>
            <p className="f3 tc">
                {'This magic brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="center">
                <div className=" form pa4 br3 shadow-5 center ">
                    <input type="text" className="f4 pa2 w-70 center" />
                    <button className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>

    )
}


export default ImageURLInput;

