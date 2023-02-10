import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import EmployeeDetailTable from "../EmployeeDetails/EmployeeDetailTable";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Tabss(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 1196 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="week One" {...a11yProps(0)} />
          <Tab label="week Two" {...a11yProps(1)} />
          <Tab label="week Three" {...a11yProps(2)} />
          <Tab label="week Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* {console.log(props.assignments.assignment[0].w1)} */}
        {/* {props.assignment.map((ele) => {
          ele;
        })} */}

        <TabPanel value={value} index={0} dir={theme.direction}>
          <EmployeeDetailTable week_data="w1" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <EmployeeDetailTable week_data1="w1" week_data2="w1" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <EmployeeDetailTable week_data="w1" week_data2="w1" week_data3="w1" />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <EmployeeDetailTable
            week_data="w1"
            week_data2="w1"
            week_data3="w1"
            week_data4="w1"
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
