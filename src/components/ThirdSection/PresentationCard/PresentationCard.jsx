import React from 'react';
import classes from './PresentationCard.module.css';

export default function PresentationCard({ obj }) {
    return (
        <div className={classes.presentationCard}>

            <div className={classes.pictureContainer}>
                <img src={obj.picture} alt="ellipsisPicture" />
            </div>

            <div className={classes.textContainer}>
                <div className={classes.titleText}>
                    {obj.title}
                </div>

                <div className={classes.descriptionText}>
                    {obj.description}
                </div>
            </div>
        </div>
    )
}
