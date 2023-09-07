import React from 'react'
import classes from './CompanyItem.module.css'


export default function CompanyItem({ companyPic }) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.companyItem}>
                <img src={companyPic} alt="companyPic" />
            </div>
        </div>
    )
}
