import React from "react";
import './ImageURLInput.css';
import {useEffect} from "react";




const ImageURLInput =({onInputChange,text,onSubmit})=>{

    return (
        <div>
            <p className="f3 tc">
                {'This magic brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="center">
                <div className=" form pa4 br3 shadow-5 center ">
                    <input onChange={onInputChange} value={text} type="text" className="f4 pa2 w-70 center" />
                    <button onClick={onSubmit} className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>

    )
}


export default ImageURLInput;

