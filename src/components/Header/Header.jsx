import React from 'react'
import classes from './Header.module.css';

import mainLogo from '../../pictures/mainLogo.svg';
import SimpleRectangleBtn from '../SimpleRectangleBtn/SimpleRectangleBtn';

export default function Header() {

    let navTextArr = ['Home', 'About', 'Courses', 'Admission', 'Serviev',];

    return (
        <div className={classes.header}>

            <div className={classes.logoContainer}>
                <img src={mainLogo} alt="mainLogo" />
            </div>

            <div className={classes.navContainer}>

                {navTextArr.map(item => {
                    return <div className={classes.navItem}>
                        <p className={classes.navText}>{item}</p>
                    </div>
                })}

            </div>

            <div className={classes.btnContainer}>

                <SimpleRectangleBtn size='menu' text="Sigh in" colour='empty' />
                <SimpleRectangleBtn size='menu' text="Sign up" />

            </div>
        </div>
    )
}
