import React from 'react';


//class InnerComponent extends React.Component{
const InnerComponent = ( {propA,children} )=>{


  //render(){
    //var propA = this.props.propA;
    return( 
      <div>
         { propA.map( (el,i) => <div key = {i} >{el}</div> ) }
         children: {children}
      </div>
    
    )
  //}
  
}

class PropsEx extends React.Component{
  constructor(){
    super();
    this.state = {list:['first']};
 
  }
 
  listStatePush(){
    var newList = this.state.list;
    newList.push('el '+ (Math.random()+'').substring(0,4) );   
    this.setState( {list: newList} );
  }


  render(){
    const listArr = this.state.list;

 
    return (
      <div>
         on PropsEx <br />
    
         <b onClick = {this.listStatePush.bind(this)} >listStatePush</b>

        {listArr.map( (el,i) => <div key = {i} >{el}</div> )}

        <br /><br />
        InnerComponent:
        <InnerComponent propA = {listArr} >
          <div>some data from parent</div> 
        </InnerComponent>

      </div>  
    )  
  }
}

export default PropsEx;