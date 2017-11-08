import React from 'react';


class Home extends React.Component{
  constructor(){
    super();
    this.name="name";
  }

  render(){
    const someVar = '123';
    return (
      <div>
         on Home {someVar}, {this.name}..<br />
      </div>  
    )  
  }
}

export default Home;