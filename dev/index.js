import React from 'react';
import ReactDOM from 'react-dom';


import RouterNav from './components/RouterNav/RouterNav';


//Styles
require('./index.scss');


const App = () =>(
  <div>

     
        <RouterNav />
     



  </div>
);

  ReactDOM.render(<App />, document.getElementById('app'));
