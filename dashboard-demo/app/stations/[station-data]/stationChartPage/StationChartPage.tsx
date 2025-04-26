import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "../stationSummaryPage/stationSummaryPage.css";
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
import GridViewIcon from "@mui/icons-material/GridView";
import { Box } from "@mui/material";

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

const Item = styled(Paper)(({ theme }) => ({
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

export default function StationChartPage() {
  return (
    <Box>
      <Box><GridViewIcon></GridViewIcon></Box>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Item>
            <Line options={options} data={data} />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <Line options={options} data={data} />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <Line options={options} data={data} />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <Line options={options} data={data} />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <Line options={options} data={data} />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <Line options={options} data={data} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
