import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Age.css'

import AgeStats from './AgeStats';

class Age extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }
  

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div className='App'>
        <Form>
          
          <h3>Enter Your Date Of Birth</h3>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
            
          />

          {''}
          <Button className='button' onClick={() => this.changeBirthday()}>
            Submit
          </Button>


          {this.state.showStats ? (
            <div className='age-stats'>
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}

        </Form>
      </div>
    );
  }
}

export default Age;
