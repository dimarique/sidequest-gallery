import React from 'react'
import styles from './ButtonWrapper.module.css'

const ButtonWrapper = ({ children }) => {
    return (
        <div className={styles.btnWrapper}>{children}</div>
    )
}

export default ButtonWrapper