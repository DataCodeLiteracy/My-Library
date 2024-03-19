import * as s from './BackDrop.css'

import { ReactNode } from 'react'

interface BackDropProps {
  children: ReactNode
  onClose?: () => void
}

const BackDrop = ({ children, onClose }: BackDropProps) => {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose && onClose()
    }
  }

  return (
    <div className={s.backdropStyle} onClick={handleBackDropClick}>
      {children}
    </div>
  )
}

export default BackDrop
