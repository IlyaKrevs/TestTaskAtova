import React, { createRef, useEffect, useState } from 'react'
import classes from './Carousel.module.css';


export default function Carousel({ children, arrowType, gap = 20 }) {

    let lentaRef = createRef();


    let currentArrowContainerType;
    let currentArrowSize;

    if (arrowType === 'classic') {
        currentArrowContainerType = classes.classicArrowContainerSize
        currentArrowSize = classes.classicArrowSize
    } else if (arrowType === 'special') {
        currentArrowContainerType = classes.specialArrowContainerSize
        currentArrowSize = classes.specialArrowSize
    }


    let [translateXState, setTranslateXState] = useState(0);


    let lentaClientWidth;
    let lentaScrollWidth;
    let basicGap = gap;

    let maxMoveLength;
    let oneClickMovingLength;

    useEffect(() => {

        lentaClientWidth = lentaRef.current.clientWidth;
        lentaScrollWidth = lentaRef.current.scrollWidth;

        oneClickMovingLength = lentaClientWidth + basicGap;
        maxMoveLength = lentaScrollWidth - lentaClientWidth;
    }, [lentaRef])





    function leftMove() {
        if ((translateXState - oneClickMovingLength) > -maxMoveLength) {
            setTranslateXState(translateXState - oneClickMovingLength)
        } else {
            setTranslateXState(-maxMoveLength);
        }
    }

    function rightMove() {
        if ((translateXState + oneClickMovingLength) <= 0) {
            setTranslateXState(translateXState + oneClickMovingLength)
        } else {
            setTranslateXState(0)
        }
    }


    return (
        <div className={classes.carouselContainer}>

            <div className={[classes.arrowContainer, classes.leftArrow, currentArrowContainerType].join(' ')}
                onClick={() => rightMove()}
            >
                <div className={currentArrowSize}></div>
            </div>

            <div className={classes.carouselViewPort}>

                <div className={classes.carouselLenta}
                    ref={lentaRef}
                    style={{
                        transform: `translateX(${translateXState}px)`,
                        gap: gap,
                    }}
                >

                    {children}

                </div>
            </div>


            <div className={[classes.arrowContainer, classes.rightArrow, currentArrowContainerType].join(' ')}
                onClick={() => leftMove()}
            >
                <div className={currentArrowSize}></div>
            </div>

        </div>
    )
}
