import React from 'react';
import noticePicture from '../../../pictures/noticePicture.svg';
import classes from './NoticeItem.module.css';

export default function NoticeItem({ picture = noticePicture, digit, title, description }) {
    return (
        <div className={classes.noticeItem}>

            <div className={classes.ellipsePic}>
                <img src={picture} alt="noticePic" />
            </div>

            <div className={classes.textContainer}>
                <div className={classes.digit}>
                    {digit}
                </div>

                <div className={classes.title}>
                    {title}
                </div>

                <div className={classes.description}>
                    {description}
                </div>
            </div>

        </div>
    )
}
