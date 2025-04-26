"use client"
import { Box, Grid, Paper, styled } from "@mui/material";
import IconMenu from "../../components/iconMenu/IconMenu";


const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  border: "1px solid #919EAB",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "15px",
  height: "100%",
}));

export default function AlarmsPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Item sx={{ marginRight: "27px" }}>
            <Box sx={{ width: "100%", padding: "17px" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <h2 style={{ marginRight: "auto" }}>Alarm Battery</h2>
                <IconMenu  url={""} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Trigger Threshold:</h3>
                <p>Low Value Trigger</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Clear Threshold:</h3>
                <p> 10 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Current Reading:</h3>
                <p>≥ 11.5 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Subscribers:</h3>
                <p>11.59 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Type:</h3>
                <p>User 1</p>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item sx={{ marginRight: "27px" }}>
            <Box sx={{ width: "100%", padding: "17px" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <h2 style={{ marginRight: "auto" }}>Alarm Battery</h2>
                <IconMenu  url={""} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Trigger Threshold:</h3>
                <p>Low Value Trigger</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Clear Threshold:</h3>
                <p> 10 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Current Reading:</h3>
                <p>≥ 11.5 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Subscribers:</h3>
                <p>11.59 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Type:</h3>
                <p>User 1</p>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={4}>
          <Item>
            <Box sx={{ width: "100%", padding: "17px" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <h2 style={{ marginRight: "auto" }}>Alarm Battery</h2>
                <IconMenu  url={""} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Trigger Threshold:</h3>
                <p>Low Value Trigger</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Clear Threshold:</h3>
                <p> 10 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Current Reading:</h3>
                <p>≥ 11.5 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Subscribers:</h3>
                <p>11.59 V</p>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ marginRight: "auto" }}>Type:</h3>
                <p>User 1</p>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid xs={12} md={12}>
          <Item sx={{ marginTop: "38px" }}>
            <Box sx={{ width: "100%", padding: "17px" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <h2 style={{ marginRight: "auto" }}>History</h2>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #919EAB",
                  borderRadius: "15px",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <h3>Timestamp</h3>
                  <p>N/A</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <h3>Parameter</h3>
                  <p>N/A</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <h3>Alarm</h3>
                  <p>N/A</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <h3>Action</h3>
                  <p>N/A</p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: "auto",
                  }}
                >
                  <h3>Reading</h3>
                  <p>N/A</p>
                </Box>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
