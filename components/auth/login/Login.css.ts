import { style } from '@vanilla-extract/css'
import { f } from '@/styles/functions'

export const headerText = style({
  margin: '4px 0px 20px 0px',
  fontSize: '24px',
  textAlign: 'center'
})

export const labelText = style({
  display: 'block',
  margin: '6px 0px 6px 4px',
  fontSize: '14px',
  color: 'rgba(0,0,0,0.8)'
})

export const registerButtonWrap = style({
  marginTop: '16px'
})

export const whiteButtonStyle = style([
  f.wFull,
  {
    height: '44px',
    padding: '10px',
    margin: '10px 0px',
    fontSize: '13px',
    color: '#E191FD',
    border: '1px solid #E191FD',
    borderRadius: '10px',
    backgroundColor: 'white'
  }
])

export const resetPasswordWrap = style([
  f.flex,
  {
    justifyContent: 'flex-end',
    paddingRight: '10px',
    margin: '10px 0px',
    fontSize: '12px'
  }
])

export const resetPasswordButtonStyle = style({
  paddingBottom: '2px',
  margin: '0px 4px',
  color: 'black',
  selectors: {
    '&:hover': {
      borderBottom: '1px solid rgba(0,0,0,0.3)'
    }
  }
})
