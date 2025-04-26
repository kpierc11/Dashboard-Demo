"use client"
import { Grid, Box, Paper, styled } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import "../edit/editAddonPage.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow: "none",
  border: "1px solid #919EAB",
  textAlign: "center",
  borderRadius: "15px",
  minHeight: "1000px",
}));

export default function AddonSidebar() {
  return (
    <Grid item xs={2}>
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
          <h2 style={{ paddingLeft: "30px" }}>Addons</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "30px",
            fontWeight: 600,
          }}
        >
          <p>Wind Charts:</p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box className="edit-addon-page-icons">
            <PieChartIcon></PieChartIcon>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <AssessmentIcon></AssessmentIcon>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "30px",
            fontWeight: 600,
          }}
        >
          <p>Charts:</p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box className="edit-addon-page-icons">
            <PieChartIcon></PieChartIcon>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <AssessmentIcon></AssessmentIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <ShowChartIcon></ShowChartIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <DonutLargeIcon></DonutLargeIcon>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "30px",
            fontWeight: 600,
          }}
        >
          <p>Accumulation:</p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box className="edit-addon-page-icons">
            <PieChartIcon></PieChartIcon>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <AssessmentIcon></AssessmentIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <ShowChartIcon></ShowChartIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <DonutLargeIcon></DonutLargeIcon>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "30px",
            fontWeight: 600,
          }}
        >
          <p>Last Reading:</p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box className="edit-addon-page-icons">
            <PieChartIcon></PieChartIcon>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <AssessmentIcon></AssessmentIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <ShowChartIcon></ShowChartIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <DonutLargeIcon></DonutLargeIcon>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "30px",
            fontWeight: 600,
          }}
        >
          <p>Clocks:</p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box className="edit-addon-page-icons">
            <PieChartIcon></PieChartIcon>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <AssessmentIcon></AssessmentIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <ShowChartIcon></ShowChartIcon>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className="edit-addon-page-icons">
              <DonutLargeIcon></DonutLargeIcon>
            </Box>
          </Box>
        </Box>
      </Item>
    </Grid>
  );
}
