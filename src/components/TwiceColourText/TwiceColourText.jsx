import React from 'react'
import classes from './TwiceColourText.module.css';

export default function TwiceColourText({ basicText, colourPart, basicColour = 'dark', specialColour = 'red' }) {

    let currentBasicColour = classes.darkColour;
    if (basicColour === 'white') {
        currentBasicColour = classes.whiteColour;
    }


    let createColourText = <span className={classes.redColour}>{colourPart}</span>

    let indexStartColourPart = basicText.indexOf(colourPart);

    let finalText = basicText.split('');

    finalText.splice(indexStartColourPart, colourPart.length, createColourText);

    function createFinalArr(arr) {

        let myTempArr = [];
        let myString = '';

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
                myString = myString + arr[i]

                if (i + 1 === arr.length) {
                    myTempArr.push(myString)
                }

            } else {
                myTempArr.push(myString)
                myTempArr.push(arr[i])
                myString = ''
            }
        }

        return myTempArr
    }

    let myFinalString = createFinalArr(finalText)

    return (
        <div className={currentBasicColour}>
            {myFinalString}
        </div>
    )
}
