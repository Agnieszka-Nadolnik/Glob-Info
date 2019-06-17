import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../sass/main.scss';
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import FormSearch from './Components/Form';
import About from './Components/About';
import Footer from './Components/Footer';
// import Allinformation from './Components/Input';
import Form from 'react-bootstrap/Form';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';


  class Contact extends Component {
      render() {
          return  (
            <Form style={{padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Form.Group controlId="formGroupEmail" style={{width: '40vw'}}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword"style={{width: '40vw'}}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <textarea placeholder="Message" style={{display: 'block', width: '40vw', borderColor: 'lightgrey'}}></textarea>
            <button style={{backgroundColor: "orange", border: 'none', marginTop:"10px", width: '10vw' }}>Submit</button>
           
          </Form>
          )
      }
  }


  class Websites extends Component {
    render() {
    return (
           <section className='deal'>
               <h4> Travel Websites</h4>
                <ul>
                    <li><a href="https://www.lonelyplanet.com/" target="blank">www.lonelyplanet.com</a></li>
                    <li><a href="https://www.expedia.com/" target="blank">www.expedia.com</a></li>
                    <li><a href="https://www.tripadvisor.com/" target="blank">www.expedia.com</a></li>
                    <li><a href="https://www.smartertravel.com/" target="blank">www.smartertravel.com</a></li>
                    <li><a href="https://www.kayak.com/" target="blank">www.kayak.com</a></li>
                </ul>
            </section>
         
        )
    }
}



class App extends Component {
        render()  {
        return ( 
            <HashRouter>
            <>
            <Nav/>
            <Banner/>
            <Switch>
            <Route exact path='/' component={FormSearch} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/' component={FormSearch} />
            <Route exact path='/hotdeal' component={Websites} />
            </Switch>
            <About/>
            <Footer/>
            </>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)

  
            
