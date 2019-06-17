import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <h4 className="logo end">LOGO 2019 &copy;</h4>
                <div className="icons">
                    <a href="https://www.facebook.com/" target="blank">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="blank">
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="blank">
                    <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
                <a href='#'>Kontakt</a>

        </footer>
        )
    }
}

export default Footer;