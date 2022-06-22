import { Button, Grid, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React, { useEffect, useState } from "react";
import Schedule from "./components/Schedule";
import Courses from "./components/Courses";
import { Course } from "./components/Courses";


import { studyprogram } from "./data/studyprograms";

const UDEStudyCompass = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [studyprograms, setStudyPrograms] = useState(studyprogram);
 

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Grid container style={{ paddingTop: 24 }}>
      <Grid item xs={0} md={1} />
      {/* <Grid item xs style={{ backgroundColor: "#fff", height: "100vh" }}> */}
      <Grid item xs>
        {/* TODO: Your new components here */}
        <Typography variant="h2" align="center" gutterBottom>
          New StudyCompass Homepage
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {/* TODO: Your new left side components here */}
            <Grid container justify="space-between">
              <Typography variant="h6" color="textSecondary">
                Your semester overview
              </Typography>
              <Button
                color="primary"
                variant="contained"
                endIcon={!showSchedule ? <ArrowForwardIcon /> : <></>}
                startIcon={showSchedule ? <ArrowBackIcon /> : <></>}
                onClick={() => setShowSchedule(!showSchedule)}
              >
                {showSchedule ? `Hide schedule` : `Show schedule`}
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            {/* TODO: Your new right side components here */}
            {showSchedule ? <Schedule /> : 
            <Grid item container direction="column" spacing={2} >
                  {/* Here should all the components come */}
                 
                <Grid item> <Courses/></Grid>
                  
                <Grid item container direction="column" spacing={2}>
                    {studyprograms.map(studyprogram => (<Grid item><Course studyprogram={studyprogram}/></Grid>))}
                  </Grid>
             
            </Grid>}
          </Grid>
         
        </Grid>
      </Grid>
      <Grid item xs={0} md={1} />
    </Grid>
  );
};

export default UDEStudyCompass;
