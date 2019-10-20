import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'







class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };


    }



    render() {
         return (

            <section className={'footer__dev-info dev-info'}>
                <div className="dev-info__text">Разработано Сергеевой&nbsp;Еленой: </div>
                <div className="dev-info__socials socials"><a href={'https://www.facebook.com/seawinda'} className={'socials__link'} target={'_blank'}><FontAwesomeIcon icon={faFacebookF} size="2x" /></a><a href={'https://www.instagram.com/seawinda/'} className={'socials__link'} target={'_blank'}><FontAwesomeIcon icon={faInstagram} size="2x" /></a></div>
            </section>
        )

    }
}



export default Footer;
