import React, { useState } from 'react'
import styles from './ButtonNext.module.css'

const ButtonNext = ({ currentIndex, setCurrentIndex, images }) => {



    const handleNext = () => {
        currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)

    }

    return (
        <div>
            <button className={styles.buttonNext} onClick={handleNext}>Next</button>
        </div>
    )
}

export default ButtonNext