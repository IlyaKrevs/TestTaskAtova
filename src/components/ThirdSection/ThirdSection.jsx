import React from 'react'
import classes from './ThirdSection.module.css';

import TwiceColourText from '../TwiceColourText/TwiceColourText'

import supportPic from '../../pictures/supportPic.svg';
import webinarPic from '../../pictures/webinar.svg';
import technicalSupPic from '../../pictures/technicalSup.svg';
import recruitmentPic from '../../pictures/recruitment.svg';
import PresentationCard from './PresentationCard/PresentationCard';
import SimpleRectangleBtn from '../SimpleRectangleBtn/SimpleRectangleBtn';

export default function ThirdSection() {

    let firstCardObj = {
        picture: supportPic,
        title: '24/7 online Support',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
    }


    let secondCardObj = {
        picture: webinarPic,
        title: 'Class Video',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
    }

    let thirdCardObj = {
        picture: technicalSupPic,
        title: 'Life Time Support',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
    }

    let fourthCardObj = {
        picture: recruitmentPic,
        title: 'Job Placement',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking ',
    }

    let cardArr = [firstCardObj, secondCardObj, thirdCardObj, fourthCardObj,]

    return (
        <div className={classes.thirdSection}>

            <div className={classes.mainTitle}>
                <TwiceColourText basicText='Our Facilities' colourPart='Facilities' />
            </div>

            <div className={classes.presentationCardsContainer}>

                {cardArr.map(item => {
                    return <PresentationCard obj={item} />
                })}
            </div>

            <div className={classes.bottomContainer}>



                <div className={classes.leftPart}>

                    <div className={classes.aboutContainer}>

                        <div className={classes.aboutTextContainer}>
                            <div className={classes.aboutTitle}>
                                <TwiceColourText basicText='Know About E- Learning Platforam' colourPart='E- Learning' />
                            </div>
                            <div className={classes.aboutDescription}>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as op ttposed to using 'Content here

                            </div>
                        </div>
                        <div className={classes.aboutBtnContainer}>
                            <SimpleRectangleBtn text='Read More' size='special' />
                        </div>

                    </div>

                    <div className={classes.aboutVideoContainer}>
                        <div className={classes.videoButton}>
                        </div>
                    </div>
                </div>




                <div className={classes.rightPart}>
                    <div className={classes.registrationTitle}>
                        Registration Form
                    </div>

                    <div className={classes.formContainer}>

                        <input className={classes.formInput} type="text" placeholder='Full Name' />
                        <input className={classes.formInput} type="text" placeholder='Your Mobile' />
                        <input className={classes.formInput} type="text" placeholder='Your Email' />
                        <input className={classes.formInput} type="text" placeholder='Seclact Your Course' />

                        <SimpleRectangleBtn text='Submit' size='form' />
                    </div>
                </div>
            </div>
        </div>
    )
}
