import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import "./stationSummaryPage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import BatteryCharging90Icon from "@mui/icons-material/BatteryCharging90";
import StationMap from "../../../../components/stationMap/StationMap";
import { Box, useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Station One Data",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "bg algae (ppm)",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#1F78B4",
      backgroundColor: "#1F78B4",
    },
  ],
};

const Item = styled(Box)(({ theme }) => ({
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
}));

export default function StationSummaryPage() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Item
          sx={{
            minHeight: "198px",
            justifyContent: "center",
            padding: "0 100px 0 100px",
            alignItems: "center",
          }}
        >
          <Box className="station-data-unit-info">
            <h2>Unit Name</h2>
            <p>H2infO</p>
          </Box>
          <Box className="station-data-unit-info">
            <h2>Battery Life</h2>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>83.4%</p>
              <BatteryCharging90Icon
                fontSize="large"
                sx={{ color: "#1EE90D" }}
              ></BatteryCharging90Icon>
            </Box>
          </Box>
          <Box className="station-data-unit-info">
            <h2>LastReported</h2>
            <p>June 3rd 2022</p>
          </Box>
          <Box className="station-data-unit-info">
            <h2>Location</h2>
            <p>Piney Flats TN</p>
          </Box>
          <Box className="station-data-unit-info">
            <h2>Station Health</h2>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p>Excellent: 92.5%</p>
              <BatteryCharging90Icon
                fontSize="large"
                sx={{ color: "#1EE90D" }}
              ></BatteryCharging90Icon>
            </Box>
          </Box>
        </Item>
      </Grid>
      <Grid xs={12} md={6}>
        <Item sx={{ padding: "30px 30px 30px 30px", marginBottom: "30px" }}>
          <h1>Primary Alarm</h1>
          <Box
            className={"station-data-primary-alarm-topbar"}
            sx={{
              display: "flex",
              flexDirection: "row",
              background: `${
                theme.palette.mode === "dark" ? "#1a2027" : "#f2f2f2"
              }`,
            }}
          >
            <p>Name</p>
            <p>Type</p>
            <p>Threshold</p>
            <p>Clear Warning</p>
            <p>Reading</p>
          </Box>
          <Box
            className={"station-data-primary-alarm-topbar-second"}
            sx={{ display: "flex", flexDirection: "row" }}
            style={
              theme.palette.mode === "dark"
                ? { background: "transparent" }
                : { background: "" }
            }
          >
            <p
              style={{
                background: `${
                  theme.palette.mode === "dark" ? "#1a2027" : "#f2f2f2"
                }`,
              }}
            >
              Low Battery
            </p>
            <p
              style={{
                background: `${
                  theme.palette.mode === "dark" ? "#1a2027" : "#f2f2f2"
                }`,
              }}
            >
              Low Value T
            </p>
            <p
              style={{
                background: `${
                  theme.palette.mode === "dark" ? "#1a2027" : "#f2f2f2"
                }`,
              }}
            >
              10 V
            </p>
            <p
              style={{
                background: `${
                  theme.palette.mode === "dark" ? "#1a2027" : "#f2f2f2"
                }`,
              }}
            >
              11.5 V
            </p>
            <p
              style={{
                background: `${
                  theme.palette.mode === "dark" ? "#1a2027" : "#f2f2f2"
                }`,
              }}
            >
              11.59 V
            </p>
          </Box>
        </Item>
        <Item sx={{ padding: "30px" }}>
          <h1>NOAA Precipitation</h1>
          <Line options={options} data={data} />
        </Item>
      </Grid>
      <Grid xs={12} md={6}>
        <Item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            paddingLeft: "41px",
            paddingRight: "30px",
          }}
        >
          <h1>Location</h1>

          <StationMap></StationMap>
        </Item>
      </Grid>
      <Grid xs={12} md={12}>
        <Item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            paddingLeft: "41px",
            paddingRight: "30px",
          }}
        >
          <h1>DPI Mult Probe</h1>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                width: "100%",
                marginLeft: "10px",
                marginTop: "30px",
              }}
            >
              <h3 style={{ marginRight: "auto" }}>Name</h3>
              <h3 style={{ marginRight: "auto" }}>Last Logged</h3>
              <h3 style={{ marginRight: "auto" }}>Min</h3>
              <h3 style={{ marginRight: "auto" }}>Max</h3>
              <h3 style={{ marginRight: "auto" }}>Average</h3>
              <h3 style={{ marginRight: "auto" }}>Health</h3>
              <h3 style={{ marginRight: "auto" }}>Last 24 Hours</h3>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  background: `${
                    theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2"
                  }`,
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
                style={
                  theme.palette.mode === "dark"
                    ? { background: "#121212" }
                    : { background: "#f2f2f2" }
                }
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  background: `${
                    theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2"
                  }`,
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
                style={
                  theme.palette.mode === "dark"
                    ? { background: "#121212" }
                    : { background: "#f2f2f2" }
                }
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  background: `${
                    theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2"
                  }`,
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
                style={
                  theme.palette.mode === "dark"
                    ? { background: "#121212" }
                    : { background: "#f2f2f2" }
                }
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderRadius: "15px",
                  paddingLeft: "10px",
                }}
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  background: `${
                    theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2"
                  }`,
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
                style={
                  theme.palette.mode === "dark"
                    ? { background: "#121212" }
                    : { background: "#f2f2f2" }
                }
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  background: `${
                    theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2"
                  }`,
                  borderRadius: "15px",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
                style={
                  theme.palette.mode === "dark"
                    ? { background: "#121212" }
                    : { background: "#f2f2f2" }
                }
              >
                <p style={{ marginRight: "auto" }}>Bg Algae (ppm)</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
                <p style={{ marginRight: "auto" }}>N/A</p>
              </Box>
            </Box>
          </Box>
        </Item>
      </Grid>
    </Grid>
  );
}
