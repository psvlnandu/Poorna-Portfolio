import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Clarkson University": {
      jobTitle: "Research Assistant @",
      duration: "May 2024 - PRESENT",
      desc: [
        "Created a luge track visualization tool for Lake Placid athletes by processing geometric data from various tracks using C++ and the Open Cascade library. Imported and rendered the resulting 3D models in a Unity environment.",
        "Developed Gait Sensory Interaction Test (GaitSIT) using Unity to assess walking dysfunctions (gait analysis) in patients with VR Meta quest 3. ",
        "Developed an Android application for real-time iris detection using smartphone cameras & advanced ML models",
        "Working on an Audio Tampering detection for forensic use in federal investigations."
      ]
    },
    "Horizons Clarkson University": {
      jobTitle: "Horizons Graduate Assistant @",
      duration: "AUG 2024 - PRESENT",
      desc: [
        "Supported a mission-critical production system (Slate CRM) in a higher education environment, managing the student application lifecycle and ensuring data integrity for a key university program.",
        " Analyzed pre- and post-program survey data for camp attendees, identifying key areas of impact that informed strategy for the following year"
      ]
    },
    "EmbedSense Pvt Ltd": {
      jobTitle: "Jr. Android developer",
      duration: "Jun 2023 - DEC 2023",
      desc: [
       "Developed Hoist Pro ( a hoist monitoring app) & Ecotron (an environmental monitoring Android app), IntegratedWhatsApp Business API, leading to a 30% increase in customer engagement, and implemented Firebase authentication for enhanced security."
  
      ]
    },
    "OSOS Pvt Ltd": {
      jobTitle: "Android Developer Intern @",
      duration: "JAN 2023- JUN 2023",
      desc: [
        "Contributed to the development of Spaarks (A local networking app - available on play store: Link)"
      ]
    },
   
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
