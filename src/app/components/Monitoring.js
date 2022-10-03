import React from 'react'
import { Button, Grid, Switch, Tooltip, Typography } from '@mui/material';
//Componenti Custom
import BreadcrumbsCustom from './ui/BreadcrumbsCustom';
import { MONITORING_SECTION, OPTIONS_STATUS } from '../common/monitoring/types';


export default function Monitoring(props) {

  const classes = props.classes;
  const optionsStatus = [...OPTIONS_STATUS];
  const loading = false;
  const sessionRows = [];
  // let moment = require('moment');
  // const [dateFrom, setDateFrom] = useState(moment().subtract(60, "minutes").format('YYYY-MM-DDTHH:mm'));
  // const [dateTo, setDateTo] = useState(moment().format('YYYY-MM-DDTHH:mm'));
  // const ref = React.forwardRef();


  return (
    <Grid container>
      {/* --------------------------- */}
      <Grid item={true} md={12} className="titoloSezione">
        <Typography className="test" >
          Monitoraggio sessioni TERRE
        </Typography>
      </Grid>
      {/* --------------------------- */}

      {/* --------------------------- */}
      <BreadcrumbsCustom sections={[MONITORING_SECTION]} />
      {/* --------------------------- */}

      {/* --------------------------- */}
      <Grid item={true} md={12} className="filterButtonMonitoring">
        <Tooltip title={"Abilita aggiornamento automatico monitoraggio sessioni"}>
          <Switch
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Tooltip>
      </Grid>
      {/* --------------------------- */}

      {/* --------------------------- */}
      <Button variant="contained">Test</Button>
      {/* --------------------------- */}
    </Grid>
  );
}

