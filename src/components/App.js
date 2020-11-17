import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
    const relList = ["Father","Mother","Brother","Sister"];
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key = "relativeList">
                   {
                relList.map( (rel,idx) => (
                    <li key = {"relativeListItem" + (idx+1)}>{rel}</li>
                ) )}
               </ol>
              
            </div>
        );
    };
}


export default App;
