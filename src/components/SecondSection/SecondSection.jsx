import React from 'react';
import classes from './SecondSection.module.css';

import TwiceColourText from '../TwiceColourText/TwiceColourText'

import coursesPic1 from '../../pictures/coursesPic1.svg';
import coursesPic2 from '../../pictures/coursesPic2.svg';
import coursesPic3 from '../../pictures/coursesPic3.svg';


import CoursesItem from './CoursesItem/CoursesItem';
import Carousel from '../Carousel/Carousel';

export default function SecondSection() {




    let firstCoursesItem = {
        pic: coursesPic1,
        title: {
            basicText: 'Web Development',
            colourText: 'Development',
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'
    }

    let secondCoursesItem = {
        pic: coursesPic2,
        title: {
            basicText: 'Networking',
            colourText: 'Net',
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'
    }

    let thirdCoursesItem = {
        pic: coursesPic3,
        title: {
            basicText: 'Digital Marketing',
            colourText: 'Marketing',
        },
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumprinting atypesetting industry.'
    }


    let coursesArr = [firstCoursesItem, secondCoursesItem, thirdCoursesItem, thirdCoursesItem, secondCoursesItem, firstCoursesItem, firstCoursesItem,];

    let coursesItemsArr = coursesArr.map(item => {
        return <CoursesItem fullObj={item} />
    })


    return (
        <div className={classes.secondSection}>

            <div className={classes.mainTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="49" viewBox="0 0 52 49" fill="none">
                    <path d="M4.37687 3.59755L47.3991 8.50572L21.6374 43.31L4.37687 3.59755Z" stroke="#FFBEC0" stroke-width="5" />
                </svg>



                <div className={classes.titleText}>
                    <TwiceColourText basicText='OUR COURSES' colourPart='COURSES' />
                </div>



                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52" fill="none">
                    <path d="M5.84616 32.7852L39.0475 4.98819L46.5197 47.6399L5.84616 32.7852Z" stroke="#FFBEC0" stroke-width="5" />
                </svg>
            </div>


            <div className={classes.descriptionContainer}>

                <Carousel children={coursesItemsArr} arrowType='classic' />
            </div>

        </div>
    )
}
