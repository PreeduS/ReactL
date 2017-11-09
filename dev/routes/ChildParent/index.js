import React from 'react';
import PropTypes from 'prop-types'; 

class InnerChildParent extends React.Component{

  fromParent(){
    console.log('here')
    console.log(this.props)
        this.props.parentFunction('data from child');
  }

  render(){

    return (
      <div>
            InnerChildParent:<br />
           
       
            <div onClick = {this.fromParent.bind(this)}>update parent</div>
         
         
      </div>  
    )  
  }
}

class outerChildParent extends React.Component{
    constructor(){
        super();
        this.state = {data:''};
    }
    parentFunction(data){
      console.log('parentFunction: ' ,data );
        this.setState({data: data});
 
    }

      render(){
    
        return (
          <div>
                on outerChildParent<br />
                state data = {this.state.data}

                <hr />
                <InnerChildParent 
                  parentFunction = {this.parentFunction.bind(this) } 
                  someData = { 'sd:' + Math.random() } 
                />
             
          </div>  
        )  
      }
    }

InnerChildParent.propTypes = {
  parentFunction: PropTypes.func
}


export default outerChildParent;