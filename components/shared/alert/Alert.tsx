import * as s from './Alert.css'

import BackDrop from '@/components/shared/backdrop/BackDrop'
import Button from '@/components/shared/button/Button'

import { ReactNode } from 'react'

interface AlertProps {
  open?: boolean
  close?: boolean
  title?: React.ReactNode
  description?: React.ReactNode
  leftButtonLabel?: string | undefined
  rightButtonLabel?: string | undefined
  leftButtonStyle?: string | undefined
  rightButtonStyle?: string | undefined
  onLeftButtonClick?: () => void
  onRightButtonClick?: () => void
  node?: ReactNode
}

const Alert = ({
  open,
  title,
  description,
  leftButtonLabel = '',
  rightButtonLabel = '확인',
  leftButtonStyle,
  rightButtonStyle,
  onLeftButtonClick,
  onRightButtonClick,
  node
}: AlertProps) => {
  if (open === false) {
    return null
  }

  return (
    <BackDrop>
      <section className={s.alertContainer}>
        <div className={s.alertFirstWrap}>
          <div className={s.alertSecondWrap}>
            {title ? <h3 className={s.alertTitle}>{title}</h3> : null}
            {description ? (
              <p className={s.alertDescription}>{description}</p>
            ) : null}
            {node}
          </div>
          <div className={s.alertButtonWrap}>
            {leftButtonLabel !== '' && (
              <Button
                text={leftButtonLabel}
                style={leftButtonStyle || s.alertButton}
                onClick={onLeftButtonClick}
              />
            )}
            <Button
              text={rightButtonLabel}
              style={rightButtonStyle || s.alertButton}
              onClick={onRightButtonClick}
            />
          </div>
        </div>
      </section>
    </BackDrop>
  )
}

export default Alert
