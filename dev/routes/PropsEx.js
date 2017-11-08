import React from 'react';


//class InnerComponent extends React.Component{
const InnerComponent = ( {propA} )=>{
  
    return( 
      <div>
         { propA.map( (el,i) => <div key = {i} >el</div> ) }
      </div>
    
    )
  
}

class PropsEx extends React.Component{
  constructor(){
    super();
    this.state = {list:['first']};
  }

  render(){
    const arr = this.state.list;
    var timeOut = setTimeout(()=>{
        var newList = this.state.list;
        newList.push('zzz');
        this.setState( {list: newList} );
    },1500);

    if(arr.length >= 5){
        clearTimeout(timeOut);
    }

    return (
      <div>
         on PropsEx <br />
    
        {arr.map( (el,i) => <div key = {i} >el</div> )}

        <br /><br />
        InnerComponent:
        <InnerComponent propA = {arr} />

      </div>  
    )  
  }
}

export default PropsEx;