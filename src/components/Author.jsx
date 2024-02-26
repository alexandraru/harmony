import React from 'react';
import Button from 'react-bootstrap/Button';
import { Element} from 'react-scroll';
import {Link} from 'react-router-dom';

function Author ({headerTitle, headerText, headerButton1, headerButton2, authorTitle, authorName, authorManager, autorText}){
    return (
        <section  className="author">
            <div className="container">
                    <div className="title-box">
                        <h1 className="title">{headerTitle}</h1>
                        <p className="title-text">{headerText}</p>
                        <div className="button">
                            <Link className='decor' to="/challenge"><Button className='title-button' variant="info">{headerButton1}</Button>{' '}</Link>
                            <Link className='decor' to="/subscribe"><Button className='title-button' variant="info">{headerButton2}</Button>{' '}</Link>
                        </div>
                    </div>
                </div>
            <h2 className="author-title">{authorTitle}</h2>
            <Element name="author" className="container d-flex align-c justify-sb">
                <img src="img/author.jpg" alt="author" className="author-photo"/>
                <div className='author-about'>
                    <h3 className="author-name">{authorName}</h3>
                    <h4 className="author-manager">{authorManager}</h4>
                    <p className="author-text">{autorText}</p>
                </div>
            </Element>
        </section>
    )
}

export default Author