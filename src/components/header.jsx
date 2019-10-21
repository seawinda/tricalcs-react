import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'







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
                    <div className="header__socials socials"><a href={'https://tele.gg/morskoi_veter'} className={'socials__link'} target={'_blank'}><FontAwesomeIcon icon={faTelegramPlane} size="2x" /></a><a href={'https://www.facebook.com/seawinda'} className={'socials__link'} target={'_blank'}><FontAwesomeIcon icon={faFacebookF} size="2x" /></a><a href={'https://www.instagram.com/seawinda/'} className={'socials__link'} target={'_blank'}><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>

                </div>



            </section>
        )

    }
}



export default Header;
