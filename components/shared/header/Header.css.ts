import { f } from '@/styles/functions'
import { style } from '@vanilla-extract/css'

export const nav = style([
  f.flex,
  f.justifyBetween,
  { padding: '10px 20px', borderBottom: '1px solid rgba(0,0,0,0.2)' }
])

export const leftBox = style([f.flex, { width: '60%' }])
export const rightBox = style([f.flexCenterBox])

export const logo = style({ marginRight: '20px' })

export const buttons = style([f.flex, f.justifyAround, { width: '80%' }])

export const inputWrap = style([
  f.flex,
  f.alignCenter,
  {
    position: 'relative',
    marginRight: '20px'
  }
])

export const searchInput = style({
  width: '300px',
  height: '35px',
  padding: '0px 20px',
  border: 'none',
  borderRadius: '10px',
  outline: 'none',
  backgroundColor: 'rgba(0,0,0,0.14)'
})

export const icon = style({
  position: 'absolute',
  right: '10px'
})
