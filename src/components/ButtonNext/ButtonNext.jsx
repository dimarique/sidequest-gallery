import React from 'react'
import styles from '../ButtonStyles/ButtonStyles.module.css'

const ButtonNext = ({ currentIndex, setCurrentIndex, images }) => {



    const handleNext = () => {
        currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)

    }

    return (
        <>
            <button className={styles.buttonNext} onClick={handleNext}>Next</button>
        </>
    )
}

export default ButtonNext