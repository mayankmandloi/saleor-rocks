import React, { useState } from 'react'
import { Drawer } from '@material-ui/core'
import { LeftMenuFull } from './leftmenufull/left-menu-full'
import { LeftMenuShort } from './leftmenushort/left-menu-short'

export function LeftMenuWrapper() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsDrawerOpen(open)
  }

  return (
    <React.Fragment key="left">
      <LeftMenuShort onMenuClick={toggleDrawer(true)} />
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <LeftMenuFull />
      </Drawer>
    </React.Fragment>
  )
}
