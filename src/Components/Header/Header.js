import React from 'react';
// import { useContext } from 'react';
// import { NavContext } from '../context/NavContext';
import Styles from '../../Styles/Header.module.css';


const Header = () => {
    // const {activeLinkId} = useContext(NavContext);
    const navLink = ['AboutMe', 'MyWork', 'ContactMe'];
    const renderNavLink = (content) => {
        const scrollToId =`${content}Section`;
        const handleClickNav = () => {
           document.getElementById(scrollToId).scrollIntoView({ behavior:'smooth'});
        }
        return (
            <ul key = {content}>
                <li onClick={handleClickNav}>
                    {content}
                </li>
            </ul>
        )
    }
  return (
<header classname={Styles.header}>
<div className={Styles.container}>
    <div className={Styles.navContainer}>
        <h1>Samm Cowen </h1>
        
        <nav>
            {navLink.map(nav => renderNavLink(nav))}
        </nav>
    </div>
</div>
</header>
  )
}

export default Header