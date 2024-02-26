import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { changeLang } from '../store/HarmonySlice';
import { HiDotsVertical } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";


function Header ({menuAuthor, menuCourse, menuSubscribe, menuContacts, menuFreePart, menuFeedback}){
    const {language} = useSelector(state => state.info);
    const dispatch = useDispatch();
    const [show, setShow] = useState('navigation-box-items d-flex no-li-style align-c viewD');
    const handleShow = () => {
    setShow(show === 'navigation-box-items d-flex no-li-style align-c viewD' ? 'navigation-box-items d-flex no-li-style align-c viewM' : 'navigation-box-items d-flex no-li-style align-c viewD')
  }
    
    return (
        <header>
                <nav className='navigation d-flex align-c justify-sb'>
                    <img src="img/logo.png" alt="logo" className="logo"/>
                    <div className='navigation-box d-flex no-li-style align-c'>
                            <ul className={show}>
                            <li><Link className="menu decor" to="/author" onClick={()=> scroller.scrollTo("author", {
                                duration: 500,
                                smooth: true,})}>{menuAuthor}</Link></li>
                            <li><Link className="menu decor" to='/course' onClick={()=> scroller.scrollTo("course", {
                                duration: 500,
                                smooth: true,})}>{menuCourse}</Link></li>
                            <li><Link className="menu decor" to="/subscribe">{menuSubscribe}</Link></li>
                            <li><Link className="menu decor" to="/contacts" onClick={()=> scroller.scrollTo("contacts", {
                                duration: 500,
                                smooth: true,})}>{menuContacts}</Link></li>
                            <li><Link className="menu decor" to="/challenge">{menuFreePart}</Link></li>
                            <li><Link className="menu decor" to="/feedback">{menuFeedback}</Link></li>
                            <IoCloseCircleOutline className='head-menu-close' onClick={handleShow} />
                            </ul>
                            <p className='navigation-lang' onClick={() => dispatch(changeLang())}>{language}</p>
                            <HiDotsVertical className="resp" onClick={handleShow} />
                    </div>
                </nav>
        </header>

    )
}

export default Header