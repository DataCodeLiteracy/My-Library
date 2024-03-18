import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle('body', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1280px',
  height: '100%',
  margin: '0 auto'
})
