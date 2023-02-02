import Axios from 'axios';
import React, { Component, useState } from 'react';


class AgeStats extends Component {

  dbsave(x){



    const request_Calculation = {
      calculation: x
    }

    Axios.post('/api', request_Calculation)
    .then(response => {
      if (response.status === 200) {
      //alert('successfully');
        // props.history.push('/');
      } else {
        alert('Failed ');
      }
    }).catch(error => {
      console.log(error);
    })
    return 


  }
  
  timeSince(date) {
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let difference = Math.abs(today - other_date);

    let days = Math.floor(difference / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;

    return `${years} years ${months} months ${days} days`;

  }
  
  

  render() {
    
    return (
      <div>
        
        
        <h2>{this.dbsave(this.timeSince(this.props.date))}</h2>
        <h4>Age:{this.timeSince(this.props.date)}</h4>
      
        
      </div>
    );
  }
}

export default AgeStats;
