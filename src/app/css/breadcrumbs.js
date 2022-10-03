const drawerWidth = 240;

export default theme => ({
    root: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      },
      link: {
        display: 'flex',
      },
      icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
      },
      linkSection: {
        fontWeight: 'bold !important',
        cursor: 'pointer',
        color: '#2e60b9 !important'
      }
});