import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Element} from 'react-scroll';

function Footer ({footer}){
    return (
        <footer>
            <Element name="contacts" id='contacts' className="container">
               <p className="contacts">{footer}<a target='_blank' href='https://www.instagram.com/studying_harmony/'>@studying_harmony</a></p>
                <div className="icons">
                <a className='decor' target='_blank' href="https://www.instagram.com/studying_harmony/">
                    <FaInstagram />
                </a>
                <a className='decor' target='_blank' href="https://www.youtube.com/channel/UCvX1qCmQPKypj8OKUNmMDvA/featured">
                    <FaYoutube />
                </a>
                </div>
            </Element>
    </footer>
    )
}

export default Footer