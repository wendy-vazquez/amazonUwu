//Realizar una investigacion de como puedo obtener informacion desde una API con react
//la investigacion debera contener que es un API y como se accede a ella "Fetch"
import { useState } from "react";
import { useEffect } from "react";

let Tarjeta = ({titulo, img, img1, img2, img3, descript, descript1, descript2, descript3,}) => {
  
  return (
    <div className="col-5">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">{titulo}</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <img className="rounded-4 col-6" src={img} style={{width: "50%"}}
                 alt=""/>
            <img className="rounded-4 col-6" src={img1} style={{width: "50%"}}
                 alt=""/>
          </div>
          <div className="row container m-1">
            <p className="text-start col-6">{descript}</p>
            <p className="text-end col-6">{descript1}</p>
          </div>
          <div className="row">
            <img className="rounded-4 col-6" src={img2} style={{width: "50%"}}
                 alt=""/>
            <img className="rounded-4 col-6" src={img3} style={{width: "50%"}}
                 alt=""/>
          </div>
          <div className="row container m-1">
            <p className="text-start col-6">{descript2}</p>
            <p className="text-end col-6">{descript3}</p>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="text-center">
          <button className="btn btn-warning"><img src="src/assets/img/likeUwu.png" style={{width:"20px", height:"20px"}}></img></button>
        </div>
        
      </div>
    </div>
  );
};

export default Tarjeta;
