import { style } from '@vanilla-extract/css'
import { f } from '@/styles/functions'

export const buttonStyle = style([
  f.wFull,
  {
    height: '44px',
    padding: '10px',
    marginBottom: '6px',
    fontSize: '16px',
    color: 'white',
    borderRadius: '10px',
    backgroundColor: '#E191FD'
  }
])

export const disabledButton = style({
  cursor: 'default'
})
