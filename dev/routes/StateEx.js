import React from 'react';


class StateEx extends React.Component{
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
         on StateEx <br />
  

        {arr.map( (el,i) => <div key = {i} >el</div> )}

      </div>  
    )  
  }
}

export default StateEx;