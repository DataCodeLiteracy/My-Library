import * as s from './Button.css'

import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  text: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  style?: string
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const STYLE_BUTTON_DEFAULT = s.buttonStyle

const Button = ({
  text,
  type = 'button',
  style = STYLE_BUTTON_DEFAULT,
  disabled = false,
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${disabled ? s.disabledButton : ''} ${style}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
