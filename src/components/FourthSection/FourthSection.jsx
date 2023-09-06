import React from 'react'
import classes from './FourthSection.module.css';

import TwiceColourText from '../TwiceColourText/TwiceColourText';

import firstPersonPic from '../../pictures/person1.svg'
import secondPersonPic from '../../pictures/person2.svg'
import thirdPersonPic from '../../pictures/person3.svg'
import fourthPersonPic from '../../pictures/person4.svg'
import PersonCardItem from './PersonCardItem/PersonCardItem';


export default function FourthSection() {

    let firstPersonObj = {
        pic: firstPersonPic,
        title: 'Mehedi Hasan',
        profession: 'Softwore Developer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    }
    let secondPersonObj = {
        pic: secondPersonPic,
        title: 'Israt Jahan',
        profession: 'Graphic Desginr',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    }
    let thirdPersonObj = {
        pic: thirdPersonPic,
        title: 'Minhaj Uddin',
        profession: 'Network Engineer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    }
    let fourthPersonObj = {
        pic: fourthPersonPic,
        title: 'Salma Islam',
        profession: 'Digital Marketer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    }

    let myArr = [firstPersonObj, secondPersonObj, thirdPersonObj, fourthPersonObj,];

    return (
        <div className={classes.fourthSection}>

            <div className={classes.titleContainer}>
                <TwiceColourText basicText='OUR TEAM' colourPart='TEAM' basicColour='white' />
            </div>

            <div className={classes.personCardContainer}>

                {myArr.map(item => {
                    return <PersonCardItem obj={item} />
                })}
            </div>

        </div>
    )
}
