import React, {Component} from 'react';


class Banner extends Component {
    render() {

    return (
            <section className="banner size"> 
            <header>
            <div className="video-content">
                <video className="video" autoPlay loop>
                    <source src=".\sass\video\Nowy film_Mały_Trim.mp4"/>
                </video>
            </div>
            <div className="text-content">
                <div className="text">
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptates, nulla veniam voluptate</h3>
                </div>
            </div>
            </header>
        </section>
        )
    }
}

 export default Banner;

