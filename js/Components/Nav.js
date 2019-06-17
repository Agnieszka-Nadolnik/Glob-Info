import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

class Nav extends Component {

    state = {
        classes: '',
        classesHide: 'hide-nav'
    }
     handleScroll = (e) => {
         const element = document.querySelector('.about');
        e.preventDefault();
         window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.getBoundingClientRect().top - 50 + window.scrollY
  });

     }


    render() {
        let classes;
         const handleScroll = () => {
          if (window.scrollY > 0 && this.state.classes === '') {
            this.setState({
                classes: "fixed-nav"    
            })
            }else if(window.scrollY === 0) {
                this.setState({
                    classes: ''
                })
          } 
        }
        window.addEventListener('scroll', handleScroll); 
        
        

        return (
            <section className={`menu size ${this.state.classes}`}>
               <Link to='/' style={{color: '#f3f0f0', textDecoration: 'none'}}>
                <h2 className="logo">Logo</h2>
                </Link>
                <nav className="menu-nav nav ">
                    <ul>
                        <li><a href='.about' className="link-about" onClick={this.handleScroll} style={{color:'#f3f0f0', textDecoration: 'none'}}>About</a></li>
                        <li>
                            <Link to='/contact' style={{color: '#f3f0f0', textDecoration: 'none'}}>
                            Kontakt
                            </Link>
                        </li>
                       <Link to='/hotdeal' style={{color: '#f3f0f0', textDecoration: 'none'}}>
                           <li>Travel Websites</li>
                        </Link> 
                    </ul>
                </nav>
                <div className="nav-icon">
                    <div></div>
                </div>
            </section>
        )
    }
}

export default Nav;