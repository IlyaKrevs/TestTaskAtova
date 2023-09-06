import React from 'react';
import classes from './FirstSection.module.css';
import NoticeItem from './NoticeItem/NoticeItem';


export default function FirstSection() {

    let firstNotice = {
        digit: '10,000',
        title: 'all students',
        description: 'Lorem Ipsum is simply dummy text of the ',
    }

    let secondNotice = {
        digit: '5000+',
        title: 'success',
        description: 'Lorem Ipsum is simply dummy text of the ',
    }

    let thirdNotice = {
        digit: '6000+',
        title: 'industry',
        description: 'Lorem Ipsum is simply dummy text of the ',
    }

    let fourthNotice = {
        digit: '8,000',
        title: 'expart',
        description: 'Lorem Ipsum is simply dummy text of the ',
    }

    let myArr = [firstNotice, secondNotice, thirdNotice, fourthNotice];

    return (
        <div className={classes.firstSection}>

            <div className={classes.textContainer}>
                <div className={classes.titleContainer}>
                    <div className={classes.firstTitle}>Learn On Your Schedule</div>
                    <div className={classes.secondTitle}>Contrary to popular belief, Lorem Ipsum is not simply </div>
                </div>

                <div className={classes.searchContainer}>
                    <input className={classes.simpleInput} type="text" placeholder='Select category' />
                    <input className={classes.simpleInput} type="text" placeholder='keyboard' />
                    <input className={classes.searchBtn} type="button" value="search" />
                </div>
            </div>

            <div className={classes.bottomContainer}>
                <div className={classes.bottomNoticeContainer}>

                    {myArr.map(item => {
                        return <NoticeItem digit={item.digit} title={item.title} description={item.description} />
                    })}


                </div>
            </div>
        </div>
    )
}
