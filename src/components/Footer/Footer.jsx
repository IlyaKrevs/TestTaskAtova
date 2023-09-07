import React from 'react';
import classes from './Footer.module.css';

import logoPic from '../../pictures/mainLogo.svg'
import fbPic from '../../pictures/fbIcon.svg'

import homeIcon from '../../pictures/homeIcon.svg'
import phoneIcon from '../../pictures/phoneIcon.svg'
import mailIcon from '../../pictures/mailIcon.svg'
import wwwIcon from '../../pictures/wwwIcon.svg'


export default function Footer() {

    function createSocialItems() {
        let count = 4;

        let myArr = [];

        let socialItem = <div className={classes.socialItem}>
            <img src={fbPic} alt="socialPicture" />
        </div>

        for (let i = 0; i < count; i++) {
            myArr.push(socialItem)
        }

        return myArr;
    }


    let navigationTextArr = ['Home', 'About', 'Course', 'Service', 'Contact',]
    let ourCoursesArr = ['Web design & development', 'Digital Marketion', 'Networking', 'Graphic  Design', 'Video Editing', 'Microsoft office',]


    let contactsTextArr = ['3th floor,Satmasjid Super Market Mohammadpur, Bus Stand, 1207 Dhaka', '+8801713615831', 'atovatechnology@gmail.com', 'atovatach.com',]

    let contactsIconsArr = [homeIcon, phoneIcon, mailIcon, wwwIcon]



    function createFinalContactsArr(iconArr, textArr) {
        let finalContactsArr = []

        for (let i = 0; i < iconArr.length; i++) {
            finalContactsArr.push({
                icon: iconArr[i],
                text: textArr[i],
            })
        }
        return finalContactsArr;
    }

    return (
        <div className={classes.footer}>


            <div className={classes.logoSection}>
                <img src={logoPic} alt="logoPic" />
                <div className={classes.logoSection__title}>
                    CHANGE I GROW I SUCCEED
                </div>
                <div className={classes.logoSection__description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                </div>

                <div className={classes.logoSection__socialContainer}>
                    {createSocialItems()}
                </div>
            </div>


            <div className={classes.infoContainer}>
                <div className={classes.infoList}>
                    <div className={classes.infoList__title}>
                        Nevigation
                    </div>

                    {navigationTextArr.map(item => {
                        return <div className={classes.infoList__item}>
                            {item}
                        </div>
                    })}

                </div>

                <div className={classes.infoList}>
                    <div className={classes.infoList__title}>
                        our course
                    </div>

                    {ourCoursesArr.map(item => {
                        return <div className={classes.infoList__item}>
                            {item}
                        </div>
                    })}

                </div>


                <div className={classes.infoList}>
                    <div className={classes.infoList__title}>
                        Contact
                    </div>

                    {createFinalContactsArr(contactsIconsArr, contactsTextArr).map(item => {
                        return <div className={classes.infoList__item}>
                            <div className={classes.iconsContainer}><img src={item.icon} alt="icon" /></div>
                            {item.text}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
