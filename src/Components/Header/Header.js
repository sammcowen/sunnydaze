import React from 'react';
import Styles from '../../Styles/Header.module.css';

const Header = () => {
    const navLink = ['About Me', 'My Work', 'Contact'];
    const renderNavLink = (content) => {
        return (
            <ul key = {content}>
                <li>
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