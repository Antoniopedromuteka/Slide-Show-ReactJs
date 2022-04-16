import React from "react";
 
import Slide from "./Slide";

function App() {

  const slides =[
    {
      id:'Slide1',
      text: 'Slide 1',
      src:"https://kaboompics.com/cache/1/8/7/d/c/187dc45c4524b6dfbdb3d6065689e210eb565379.jpeg",
    },

    {
      id:'Slide2',
      text: 'Slide 2',
      src:"https://kaboompics.com/cache/6/0/3/b/d/603bd6344733971316f97da0c3111f11aad7ddba.jpeg",

    },
    {
      id:'Slide3',
      text: 'Slide 3',
      src:"https://kaboompics.com/cache/1/8/7/d/c/187dc45c4524b6dfbdb3d6065689e210eb565379.jpeg",
    },
  ]


  return (
    <div>

      <Slide slides={slides}/>
       
     
    </div>
  );
}


export default App;
