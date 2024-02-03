import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';


function Header (props){
    return (
        <header>
                <nav className="navigation d-flex align-c justify-sb">
                    <img src="/img/logo.png" alt="logo" className="logo"/>
                    <div className='navigation-box d-flex no-li-style align-c'>
                            {props.text.map((el, index) => (
                            <ul className='navigation-box-items d-flex no-li-style align-c' key={index}><li><Link className="menu decor" to="/author" onClick={()=> scroller.scrollTo("author", {
                                duration: 500,
                                smooth: true, offset: 50})}>{el.menuAuthor}</Link></li>
                            <li><Link className="menu decor" to='/course' onClick={()=> scroller.scrollTo("course", {
                                duration: 500,
                                smooth: true, offset: 50})}>{el.menuCourse}</Link></li>
                            <li><Link className="menu decor" to="/subscribe">{el.menuSubscribe}</Link></li>
                            <li><Link className="menu decor" to="/contacts" onClick={()=> scroller.scrollTo("contacts", {
                                duration: 500,
                                smooth: true, offset: 50})}>{el.menuContacts}</Link></li>
                            <li><Link className="menu decor" to="/challenge">{el.menuFreePart}</Link></li>
                            <li><Link className="menu decor" to="/feedback">{el.menuFeedback}</Link></li></ul>))}
                            <p className='navigation-lang' onClick={props.onChange}>{props.language}</p>
                    </div>
                </nav>
        </header>

    )
}

export default Header