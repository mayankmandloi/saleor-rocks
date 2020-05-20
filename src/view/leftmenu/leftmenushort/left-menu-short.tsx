import React from 'react'
import { makeStyles, Drawer } from '@material-ui/core'
import Mail from '@material-ui/icons/Mail'
import { Twitter, Instagram, Facebook, GitHub, Menu } from '@material-ui/icons/'
import { style } from './left-menu-short-style'

export function LeftMenuShort(props: {
  onMenuClick: (event: React.KeyboardEvent | React.MouseEvent) => void
}) {
  const useStyle = makeStyles(style)
  const classes = useStyle()

  return (
    <div className={classes.parent}>
      <Drawer variant="permanent">
        <Menu className={classes.menuIcon} onClick={props.onMenuClick} />
        <Instagram />
        <GitHub />
        <Facebook />
        <Twitter />
        <Mail />
      </Drawer>
    </div>
  )
}
