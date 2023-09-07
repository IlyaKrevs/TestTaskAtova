import React from 'react'
import classes from './StudentCardItem.module.css'

import leftQuote from '../../../pictures/leftQuote.svg'
import studentsPic from '../../../pictures/studentsPic.svg'

export default function StudentCardItem() {
    return (
        <div className={classes.wrapper}>

            <div className={classes.studentsCardItem}>

                <div className={classes.pictureContainer}>
                    <img className={classes.pictureProps} src={studentsPic} alt="studentsPic" />
                    <div className={classes.specialSymbolContainer}>
                        <img src={leftQuote} alt="leftQuote" />
                    </div>
                </div>

                <div className={classes.cardTitle}>
                    Jabed Hossain
                </div>

                <div className={classes.cardJob}>
                    Web designer
                </div>

                <div className={classes.starContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FCBF49" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FCBF49" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FCBF49" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FCBF49" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FCBF49" />
                    </svg>
                </div>

                <div className={classes.cardDescription}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the It is a long est fact that a reader will be distracted by the readabl
                </div>

            </div>
        </div>

    )
}
