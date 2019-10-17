import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'







class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };


    }



    render() {



         return (

            <section className={'first-screen'}>
                <div className={'header-top'}>
                    <h1 className={'header-top__title'}>Триатлонные калькуляторы</h1>
                    <div className="header__socials"><a href={'https://www.facebook.com/seawinda'}><FontAwesomeIcon icon={faFacebookF} size="2x" /></a><a href={'https://www.instagram.com/seawinda/'}><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>

                </div>



            </section>
        )

    }
}



export default Header;
