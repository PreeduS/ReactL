import React from 'react';


class StateEx extends React.Component{
  constructor(){
    super();
    this.state = { list:['first'] };

  }

  listStatePush(){
    var newList = this.state.list;
    newList.push('zzz');   
    this.setState( {list: newList} );
  }


  render(){
    var listArr = this.state.list;
    return (
      <div>
         on StateEx <br />
   
  
        <b onClick = {this.listStatePush.bind(this)} >listStatePush</b>
        {listArr.map( (el,i) => <div key = {i} >{el}</div> )}

      </div>  
    )  
  }
}

export default StateEx;

