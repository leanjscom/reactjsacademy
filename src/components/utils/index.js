import React from 'react'
import styled from 'styled-components'

const SCREEN_XS_MAX = '767px'
const SCREEN_SM_MIN = '768px'
const SCREEN_SM_MAX = '991px'
const SCREEN_MD_MIN = '992px'
const SCREEN_MD_MAX = '1199px'
const SCREEN_LG_MIN = '1200px'

const UseThisInGatsby2WithReact163ToHidDisplayMultipleComponents = ({
  children,
  ...props
}) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: props.className,
    })
  )

const Comp = ({ children, ...props }) =>
  React.cloneElement(children, {
    className: props.className,
  })

export const HideSingleComponentUsingCss = styled(Comp)`
    ${props =>
      props.xs
        ? `
        @media (max-width: ${SCREEN_XS_MAX}) {
            display:none;
        }
    `
        : ''}
    ${props =>
      props.sm
        ? `
        @media (min-width:${SCREEN_SM_MIN}) and (max-width: ${SCREEN_SM_MAX}) {
            display:none;
        }
    `
        : ''}
    ${props =>
      props.md
        ? `
        @media (min-width: ${SCREEN_MD_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
            display:none;
        }
    `
        : ''}
    ${props =>
      props.lg
        ? `
       @media (min-width: ${SCREEN_LG_MIN}) {
        display: none;
       }
    `
        : ''}
`

export const DisplaySingleComponentUsingCss = styled(Comp)`
    display:none;
    ${props =>
      props.xs
        ? `
        @media (max-width: ${SCREEN_XS_MAX}) {
            display:block;
        }
    `
        : ''}
    ${props =>
      props.sm
        ? `
        @media (min-width:${SCREEN_SM_MIN}) and (max-width: ${SCREEN_SM_MAX}) {
            display:block;
        }
    `
        : ''}
    ${props =>
      props.md
        ? `
        @media (min-width: ${SCREEN_MD_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
            display:block;
        }
    `
        : ''}
    ${props =>
      props.lg
        ? `
       @media (min-width: ${SCREEN_LG_MIN}) {
        display: block;
       }
    `
        : ''}
`
