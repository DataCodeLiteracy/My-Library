import { style } from '@vanilla-extract/css'

// Flex
export const flex = style({
  display: 'flex'
})

export const alignStart = style({
  alignItems: 'flex-start'
})

export const alignEnd = style({
  alignItems: 'flex-end'
})

export const alignCenter = style({
  alignItems: 'center'
})

export const justifyStart = style({
  justifyContent: 'flex-start'
})

export const justifyEnd = style({
  justifyContent: 'flex-end'
})

export const justifyCenter = style({
  justifyContent: 'center'
})

export const justifyBetween = style({
  justifyContent: 'space-between'
})

export const justifyAround = style({
  justifyContent: 'space-around'
})

export const directionRow = style({
  flexDirection: 'row'
})

export const directionRowReverse = style({
  flexDirection: 'row-reverse'
})

export const directionColumn = style({
  flexDirection: 'column'
})

export const directionColumnReverse = style({
  flexDirection: 'column-reverse'
})

export const flexCenterBox = style([flex, alignCenter, justifyCenter])

// Width
export const wFull = style({
  width: '100%'
})

export const wScreen = style({
  width: '100dvw'
})

// Height
export const hFull = style({
  height: '100%'
})

export const hScreen = style({
  height: '100dvh'
})

// Position
export const pAbsolute = style({
  position: 'absolute'
})

export const pRelative = style({
  position: 'relative'
})

export const pFixed = style({
  position: 'fixed'
})

export const pStatic = style({
  position: 'static'
})

export const pSticky = style({
  position: 'sticky'
})
