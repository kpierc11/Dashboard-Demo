"use client"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut, Line, Pie } from "react-chartjs-2";
import AddonSidebar from "./AddonSidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Tooltip
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

export const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow: "none",
  border: "1px solid #919EAB",
  textAlign: "center",
  borderRadius: "15px",
  minHeight: "1000px",
}));

const layout = [
  { i: "a", x: 0, y: 0, w: 3, h: 3, static: false },
  { i: "b", x: 5, y: 1, w: 3, h: 3, minW: 4, maxW: 8 },
  { i: "c", x: 12, y: 2, w: 3, h: 3 },
];

export default function EditAddonPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <AddonSidebar></AddonSidebar>
        <Grid item xs={10}>
          <Item>
            <Box
              sx={{
                borderBottom: "1px solid gray",
                height: 110,
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h2 style={{ paddingLeft: "30px" }}>My Dashboard</h2>
            </Box>
            <GridLayout
              className="layout"
              layout={layout}
              cols={12}
              rowHeight={100}
              width={1300}
            >
              <Paper
                key="a"
                style={{
                  border: "1px solid #919EAB",
                  borderRadius: 10,
                  boxShadow: "none",
                }}
              >
                <Doughnut options={options} data={pieData} />
              </Paper>
              <Paper
                key="b"
                style={{
                  border: "1px solid #919EAB",
                  borderRadius: 10,
                  boxShadow: "none",
                }}
              >
                <Pie options={options} data={pieData} />
              </Paper>
              <Paper
                key="c"
                style={{
                  border: "1px solid #919EAB",
                  borderRadius: 10,
                  boxShadow: "none",
                }}
              >
                <Line options={options} data={data} />
              </Paper>
            </GridLayout>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
