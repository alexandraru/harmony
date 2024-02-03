import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Element} from 'react-scroll';

function Footer (props){
    return (
        <footer>
            <Element name="contacts" id='contacts' className="container">
                {props.text.map((el, index) => (<p key={index} className="contacts">{el.footer}</p>))}
                <div className="icons">
                <a className='decor' href="https://www.instagram.com/studying_harmony/">
                    <FaInstagram />
                </a>
                <a className='decor' href="https://www.youtube.com/channel/UCvX1qCmQPKypj8OKUNmMDvA/featured">
                    <FaYoutube />
                </a>
                </div>
            </Element>
    </footer>
    )
}

export default Footer