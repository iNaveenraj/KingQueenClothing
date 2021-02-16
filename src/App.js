import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route} from "react-router-dom";

const TempComponent= (props) => {
  console.log(props);
  return(
    <div> 
  <h1>Hello Naveen</h1>
</div>
  );
}
   
function App() {
  return (
    <div className="App">

         <Route path="/" component={HomePage}></Route>
         <Route path= "/temp" component={TempComponent}></Route>
    </div>
  );
}

export default App;
