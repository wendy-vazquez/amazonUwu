import { createContext } from "react";
import Tarjeta from "./componentes/Tarjeta";

const propsContex = createContex();

export default function App() {
  return (
  <div className="container-fluid">
  <div className="row bg-dark">
    <div className="col-12 text-white text-center">
      <h1>Menu de Navegacion</h1>
    </div>
  </div>
 <div className="row">
  <div className="col-2 bg-info"></div>
   <div className="col-8"> 
    <div className="row container m-1"> 
      
       <Tarjeta className="mx-1" titulo="Figuras" img="src/assets/img/lYr.jpg" descript="Los gemelos"
         img1="src/assets/img/lenYrin.jpg" descript1="len and Rin"
         img2="src/assets/img/mikuConejito.jpg" descript2="Miku Figura"
         img3="src/assets/img/mikuMoto.jpg" descript3="Miku en moto figura"/>
     <Tarjeta className="mx-1" titulo="Cute Products" img="src/assets/img/kittyBlush.jpg" descript="Blush"
         img1="Src/assets/img/kittyPerfume.jpg" descript1="Perfume de Kitty"
         img2="Src/assets/img/chilemorronPerfume.jpg" descript2="Perfume del Rol de canela"
         img3="Src/assets/img/myMelodyCrema.jpg" descript3="Perfume de Kitty"/>
     <Tarjeta className="mx-1" titulo="Ropa" 
         img="Src/assets/img/drees.jpg" descript="Ropa"
         img1="Src/assets/img/ropaFresa.jpg" descript1="ropa"
         img2="Src/assets/img/ropaAmarilla.jpg" descript2="Ropa amarilla"
         img3="Src/assets/img/kittyPerfume.jpg" descript3="Perfume de Kitty"/>
     <Tarjeta className="mx-1" titulo="Ropa" 
         img="Src/assets/img/peloAma.jpg" descript="Peluca amarilla"
         img1="Src/assets/img/peloKitty.jpg" descript1="Peluca"
         img2="Src/assets/img/peloA.jpg" descript2="Peluca cute Azul"
         img3="Src/assets/img/peloMiku.jpg" descript3="Peluca de Miku"/> 

    </div>

  </div>
    <div className="col-2 bg-info"></div>
  
 </div>
  <div className="row">
    <div className="col-12 text-center">
      <h1>Ver recomendaciones personalizadasn</h1>
      <button className="btn btn-warning">Identificarse</button>
    </div>
  </div>
  <div className="row bg-dark text-white">
    <div className="col-12 text-center">
      <h4>Inicio de Pagina</h4>
    </div>
  </div>
  </div>
  )
}
