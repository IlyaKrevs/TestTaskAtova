import React from 'react'
import classes from './SimpleRectangleBtn.module.css';

export default function SimpleRectangleBtn({ text, size = 'menu', colour = 'basic' }) {

    let currentColour = classes.basicColour;
    if (colour == 'empty') {
        currentColour = classes.emptyColour
    }



    let currentSize;
    if (size === 'menu') {
        currentSize = classes.menuSize
    } else if (size === 'form') {
        currentSize = classes.formSize
    } else if (size === 'special') {
        currentSize = classes.specialSize
    }

    return (
        <div className={[classes.simpleRectangleBtn, currentColour, currentSize].join(' ')} >
            <p className={classes.btnText}>
                {text}
            </p>
        </div>
    )
}
