import React from 'react';


import { connect } from 'react-redux';
import { setCurrentPage } from "../../common/application";
import { Typography, Breadcrumbs } from '@mui/material';
// import styles from './../../css/'

const BreadcrumbsCustom = (props) => {
  // const { classes } = props.classes;
  const arraySections = props.sections;

    return (
      <Breadcrumbs aria-label="Breadcrumb" className="breadcrumbs">
        <Typography className={"breadcrumbs " + (arraySections.length > 0 ? 'classes.linkSection':'')} color="textPrimary" onClick={() => { props.isNotDefaultPath?props.onClick('home'):props.setCurrentPage('home') }}>Homepage</Typography> {/*props.isNotDefaultPath è per verificare che il path dell'url sia diverso da quello base */}
        {arraySections.map((elem, index) => (
        <Typography key={'section-'+elem.name}   className={"breadcrumbs " + (arraySections.length!==index+1 ? 'classes.linkSection':'')} color="textPrimary" onClick={() => { props.onClick?props.onClick(elem.link):props.setCurrentPage(elem.link) }}>{elem.name}</Typography>
        ))} 
      </Breadcrumbs>
    );

};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
  }
}
// export default connect(null,null)(withStyles(styles)(BreadcrumbsCustom));
export default  connect(mapDispatchToProps,null)(BreadcrumbsCustom);