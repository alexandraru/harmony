import React from 'react';
import Button from 'react-bootstrap/Button';
import { Element} from 'react-scroll';
import {Link} from 'react-router-dom';

function Author (props){
    return (
        <>
        {props.text.map((el, index) => (
        <section key={index} className="author">
            <div className="container">
                    <div className="title-box">
                        <h1 className="title">{el.headerTitle}</h1>
                        <p className="title-text">{el.headerText}</p>
                        <div className="button">
                            <Link className='decor' to="/challenge"><Button className='title-button' variant="info">{el.headerButton1}</Button>{' '}</Link>
                            <Link className='decor' to="/subscribe"><Button className='title-button' variant="info">{el.headerButton2}</Button>{' '}</Link>
                        </div>
                    </div>
                </div>
            <h2 className="author-title">{el.authorTitle}</h2>
            <Element name="author" className="container d-flex align-c justify-sb">
                <img src="/img/author.jpg" alt="author" className="author-photo"/>
                <div className='author-about'>
                    <h3 className="author-name">{el.authorName}</h3>
                    <h4 className="author-manager">{el.authorManager}</h4>
                    <p className="author-text">{el.autorText}</p>
                </div>
            </Element>
    </section>))}
        </>
    )
}

export default Author