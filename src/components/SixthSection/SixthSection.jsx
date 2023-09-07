import React from 'react'
import classes from './SixthSection.module.css';

import TwiceColourText from '../TwiceColourText/TwiceColourText';

import companyPic1 from '../../pictures/company1.svg';
import companyPic2 from '../../pictures/company2.svg';
import companyPic3 from '../../pictures/company3.svg';
import companyPic4 from '../../pictures/company4.svg';
import CompanyItem from './CompanyItem/CompanyItem';
import Carousel from '../Carousel/Carousel';



export default function SixthSection() {

    let myArr = [companyPic1, companyPic2, companyPic3, companyPic4, companyPic1, companyPic2, companyPic3, companyPic4, companyPic1, companyPic2, companyPic3, companyPic4];

    function createLentaArr(arr) {
        let myTemp = [];

        for (let i = 0; i < arr.length; i++) {
            myTemp.push(<CompanyItem companyPic={arr[i]} />)
        }

        return myTemp
    }

    let myLentaArr = createLentaArr(myArr)

    return (
        <div className={classes.sixthSection}>
            <div className={classes.titleContainer}>
                <TwiceColourText basicText='OUR Training Partner ' colourPart='Training' />
            </div>

            <div className={classes.companyItemsContainer}>
                <Carousel children={myLentaArr} arrowType='special' gap='0' />

            </div>
        </div>
    )
}
