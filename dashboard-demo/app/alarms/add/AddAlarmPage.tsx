import {
  Box,
  Grid,
  MenuItem,
  Paper,
  styled,
  Switch,
  TextField,
  useTheme,
} from "@mui/material";

import "./addAlarmPage.css";
import Link from "next/link";

export default function AddAlarmPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));


  const stations = [
    {
      value: "st1",
      label: "Station 1",
    },
    {
      value: "st2",
      label: "Station 2",
    },
    {
      value: "st3",
      label: "Station 3",
    },
    {
      value: "st4",
      label: "Station 4",
    },
  ];
  const Trigger = [
    {
      value: "tg1",
      label: "Low Value Trigger",
    },
    {
      value: "tg2",
      label: "Medium Value Trigger",
    },
    {
      value: "tg3",
      label: "High Value Trigger",
    },
  ];
  const threshold = [
    {
      value: "th1",
      label: "> 10 V",
    },
    {
      value: "th2",
      label: "> 15 V",
    },
    {
      value: "th3",
      label: "> 20 V",
    },
  ];
  const clearthreshold = [
    {
      value: "ct1",
      label: "> 30 V",
    },
    {
      value: "ct2",
      label: "> 35 V",
    },
    {
      value: "ct3",
      label: "> 40 V",
    },
  ];
  const user = [
    {
      value: "u1",
      label: "John Smith",
    },
    {
      value: "u2",
      label: "Abraham Lincoln",
    },
    {
      value: "u3",
      label: "Mark Zuckerberg",
    },
  ];
  const minutes = [
    {
      value: "m0",
      label: "0 Minutes",
    },
    {
      value: "m1",
      label: "5 Minutes",
    },
    {
      value: "m2",
      label: "10 Minutes",
    },
    {
      value: "m3",
      label: "15 Minutes",
    },
  ];

  const theme = useTheme();

  return (
    <div className="add-alarm-main-container">
      <div className="add-alarm-top-section">
        <h3 className="add-alarm-title">Add Alarm</h3>
      </div>

      <Box>
        <Grid container>
          <Grid xs={12} md={12} lg={6} sx={{ height: "100%" }}>
            <Item className="add-alarm-column-one">
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  paddingLeft: "47px",
                  paddingTop: "34px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "71px",
                  }}
                >
                  <TextField
                    sx={{
                      background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                      marginBottom: "26px",
                      maxWidth: 355,
                      width: "250px",
                    }}
                    required
                    id="outlined-required"
                    label="Alarm Name"
                    defaultValue="Alarm Name..."
                    value="Alarm One"
                  />

                  <TextField
                    sx={{
                      background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                      marginBottom: "26px",
                      maxWidth: 355,
                    }}
                    id="outlined-select-currency"
                    select
                    label="Type"
                    defaultValue="tg1"
                  >
                    {Trigger.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    sx={{
                      background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                      marginBottom: "26px",
                      maxWidth: 355,
                    }}
                    id="outlined-select-currency"
                    select
                    label="Trigger Threshold"
                    defaultValue="th1"
                  >
                    {threshold.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <TextField
                    sx={{
                      background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                      marginBottom: "26px",
                      maxWidth: 355,
                    }}
                    id="outlined-select-currency"
                    select
                    label="Notify User"
                    defaultValue="u1"
                  >
                    {user.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    sx={{
                      background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                      marginBottom: "26px",
                      maxWidth: 355,
                    }}
                    id="outlined-select-currency"
                    select
                    label="Clear Threshold"
                    defaultValue="ct1"
                  >
                    {clearthreshold.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    sx={{
                      background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                      marginBottom: "26px",
                      maxWidth: 355,
                      width: "250px",
                    }}
                    id="outlined-select-currency"
                    select
                    label="Station Name"
                    defaultValue="st1"
                  >
                    {stations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid xs={12} md={12} lg={6} sx={{ height: "100%" }}>
            <Item className="add-alarm-column-two">
              <p className="addalarm-paragraph">
                Would you like to notify this user everytime an alarm is added?
              </p>
              <Switch className="switch-addalarm" />
              <p className="addalarm-switch-text">No</p>
              <p className="addalarm-paragraph">
                Remember data for future use?
              </p>
              <Switch className="switch-addalarm" />
              <p className="addalarm-switch-text">No</p>
              <p className="addalarm-paragraph">Trigger Alarm Within</p>
              <TextField
                sx={{
                  background: `${
                    theme.palette.mode === "dark" ? "#121212" : "#f2f2f2"
                  }`,
                  marginBottom: "30px",
                  marginTop: "13px",
                  maxWidth: 350,
                  width: "189px",
                  marginLeft: "33px",
                }}
                id="outlined-select-currency"
                select
                label="Minutes"
                defaultValue="m0"
              >
                {minutes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Item>
          </Grid>
        </Grid>
        <Box className="add-alarm-bottom-section">
          <button className="addalarm-page-buttons" onClick={()=> <Link href ="/station-data"/>}>Cancel</button>
          <button className="addalarm-page-buttons">Save</button>
        </Box>
      </Box>
    </div>
  );
}
