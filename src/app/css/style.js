const drawerWidth = 240;

export default theme => ({
    root: {
        display: 'flex',
        backgroundColor: 'white'
    },
    typographyTitle: {
        minWidth: '350px',
        [
            theme
                .breakpoints
                .up('xs')
        ]: {
            //backgroundColor: green[500],
            fontSize: '15px',
            color: '#2E5FB8'
        },
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            //backgroundColor: green[500],
            fontSize: '25px',
            color: '#2E5FB8'
        },
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            //backgroundColor: green[500],
            fontSize: '30px',
            color: '#2E5FB8'
        }
    },
    toolbar: {
        //paddingRight: 24, // keep right padding when drawer closed
        backgroundColor: "rgb(46,96,185)",
        background: "linear-gradient(90deg, rgba(46,96,185,1) 0%, rgba(0,0,0,1) 100%, rgba(46,96,185,1) 100%) !important"
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        /*theme.mixins.toolbar,*/
    },
    toolbarUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        width: '100%',
        right: '0px'
    },
    appBar: {
        background: '#2e5fb8',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme
            .transitions
            .create([
                'width', 'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme
            .transitions
            .create([
                'width', 'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    menuButtonHidden: {
        display: 'none'
    },
    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        width: theme.spacing(8),
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '100%',
        minHeight: '100vh',
        overflow: 'auto'
    },
    chartContainer: {
        marginLeft: -22
    },
    tableContainer: {
        height: 320
    },
    h5: {
        marginBottom: theme.spacing(2)
    },
    imgLogo: {
        width: 127,
        height: 'auto',
        paddingLeft: 10
    },
    rightIcon: {
        marginLeft: theme.spacing(1)
    },
    spinner: {
        justifyContent: 'center',
        display: 'flex',
        position: 'relative',
        top: '100px'
    },
    backdrop: {
        color: "#fff",
        zIndex: 1201
    }
});