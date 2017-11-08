import React from 'react';


class Basics extends React.Component{

  render(){
    const arr = ['elem1','elem2','elem3'];
    return (
      <div>
         on Basics 
         
         <div>{arr}</div>

         {arr.map( (el,i) => <div key = {i} >el</div> )}
         
      </div>  
    )  
  }
}

export default Basics;