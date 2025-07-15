import React from 'react'
import styles from './ButtonPrev.module.css'

const ButtonPrev = ({ currentIndex, setCurrentIndex, images }) => {

    const handlePrev = () => {
        currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1)
    }

    return (
        <div>
            <button className={styles.buttonPrev} onClick={handlePrev}>Prev</button>
        </div>
    )
}

export default ButtonPrev