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
 
  listStatePush(){
    var newList = this.state.list;
    newList.push('zzz');   
    this.setState( {list: newList} );
  }


  render(){
    const listArr = this.state.list;

 
    return (
      <div>
         on PropsEx <br />
    
         <b onClick = {this.listStatePush.bind(this)} >listStatePush</b>

        {listArr.map( (el,i) => <div key = {i} >el</div> )}

        <br /><br />
        InnerComponent:
        <InnerComponent propA = {listArr} />

      </div>  
    )  
  }
}

export default PropsEx;