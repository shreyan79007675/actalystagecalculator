import Axios from 'axios';
import { useState } from 'react';
import './App.css';
import Age from './components/Age';
import List from './components/List';




function App() {
  
  
  return (

    <div className="mainContainer">
      
      <div className="contentArea">
      
        <div className="right">
       
          
          <h2 style={{justifyContent:"center",color:"red"}}>Actalyst Technologies Internship Coding Challenge</h2>
          <h3 style={{justifyContent:"center",color:"Blue"}}>Age Calculator</h3>

       <div  >
          <Age/>
          
          
        
          
        </div>
            
                
              

             

              
            
              
          
        </div>
        <div className="left">
        
          <h1>Hello User!</h1>
          <div>

            <List/>
          </div>
          
          
        
          
          
          

          
          
          
            
            
          
          
          
        </div>
      </div>
      
      
    </div>
    
    

  );
}

export default App;
