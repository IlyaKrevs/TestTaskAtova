import React from 'react'
import classes from './CoursesItem.module.css';

import TwiceColourText from '../../TwiceColourText/TwiceColourText';

import viewPic from '../../../pictures/viewers.svg';
import calendarPic from '../../../pictures/calendar.svg';
import startPic from '../../../pictures/Star.svg';

export default function CoursesItem({ fullObj }) {



    return (
        <div className={classes.coursesItem}>

            <div className={classes.imgContainer}>
                <img src={fullObj.pic} alt="itemPic" />
            </div>


            <div className={classes.textContainer}>
                <div className={classes.titleText}>
                    <TwiceColourText basicText={fullObj.title.basicText} colourPart={fullObj.title.colourText} />

                </div>
                <div className={classes.descriptionText}>
                    {fullObj.description}
                </div>
            </div>

            <div className={classes.bottomContainer}>


                <div className={classes.iconItem}>

                    <div className={classes.iconContainer}>
                        <img src={viewPic} alt="viewPic" />
                    </div>
                    <div className={classes.iconText}>
                        150 views
                    </div>
                </div>


                <div className={classes.iconItem}>

                    <div className={classes.iconContainer}>
                        <img src={calendarPic} alt="viewPic" />
                    </div>
                    <div className={classes.iconText}>
                        18 day
                    </div>
                </div>


                <div className={classes.iconItem}>

                    <div className={classes.iconContainer}>
                        <img src={startPic} alt="viewPic" />
                    </div>
                    <div className={classes.iconText}>
                        30 Review
                    </div>
                </div>
            </div>


        </div>
    )
}
