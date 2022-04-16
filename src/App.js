import React from "react";
 
import Slide from "./Slide";

function App() {

  const slides =[
    {
      id:'Slide1',
      text: 'Slide 1',
    },

    {
      id:'Slide2',
      text: 'Slide 2',
    },
    {
      id:'Slide3',
      text: 'Slide 3',
    }
  ]


  return (
    <div>

      <Slide slides={slides}/>
       
     
    </div>
  );
}


export default App;
