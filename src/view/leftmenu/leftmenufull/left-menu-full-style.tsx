
export const style = (theme: { breakpoints: { up: (arg0: string) => any; down: (arg0: string) => any; }; }) => ({
  parent: {
    display: "flex",
    "flex-direction": "column",
    height: "inherit",
  },
  bottomIcon: {
    width: "100%",
    '&>button': {
      'min-width':'0px'
    }
  },
  menuItem: {
      "flex-grow": 1,
      

      [theme.breakpoints.up('md')]:{
        '& li': {
          margin: '5px',
          padding: '10px'
      }
    },
      [theme.breakpoints.down('sm')]:{
        '& li': {
          margin: '0px',
          padding: '10px 0px',
      }
    }

  }
});