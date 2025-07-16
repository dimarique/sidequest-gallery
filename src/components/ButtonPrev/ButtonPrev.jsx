import React from 'react'
import styles from '../ButtonStyles/ButtonStyles.module.css'

const ButtonPrev = ({ currentIndex, setCurrentIndex, images }) => {

    const handlePrev = () => {
        currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1)
    }

    return (
        <>
            <button className={styles.buttonPrev} onClick={handlePrev}>Prev</button>
        </>
    )
}

export default ButtonPrev