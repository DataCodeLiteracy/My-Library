import { style } from '@vanilla-extract/css'
import { f } from '@/styles/functions'

export const backdropStyle = style([
  f.pFixed,
  {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '10'
  }
])
