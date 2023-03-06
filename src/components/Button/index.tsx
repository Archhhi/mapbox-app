import React from 'react'
import styles from './styles.module.css'

interface ButtonProps {
  text: string
  disabled: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick
}): JSX.Element => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
