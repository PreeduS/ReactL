import React from 'react';

class FormRef extends React.Component{
    constructor(){
        super();
        this.state = {
            list:[],
            textState:''         
        }
    }

    submitHandler(e){
        e.preventDefault();
        
        
        
        console.log('refs: ',this.refs.iText.value);
        console.log('refs: ',this.refs.iSelect.value)
        //this.setState( {list:} );
    }
    textStateHandler(e){

        this.setState( {textState: e.target.value} );
    }

    render(){
        const selectList = [
            {val:0,label:''},
            {val:1,label:'option 1'},
            {val:2,label:'option 2'},
            {val:3,label:'option 3'}
        ];
        return(
            <div>
                FormRef:<br />

                <form onSubmit = {this.submitHandler.bind(this)}>

                    
                    TextState: <input 
                        onChange = {this.textStateHandler.bind(this)}
                        value={this.state.textState} 
                        /> <br />
                    {this.state.textState}<br />
                  

                    Text: <input ref = "iText" /> <br />
                    Select:   
                    <select ref = "iSelect">
                        {selectList.map( 
                            listEl =>  <option key = {listEl.val} value={listEl.val}>{listEl.label} </option>
                        )}                   
                    </select><br />
                    <input type="submit" /><br />
                  

                </form>

            </div>
        )
    }

}

export default FormRef;