"use client"
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  boxShadow: "none",
  border: "1px solid #919EAB",
  textAlign: "center",
  borderRadius: "15px",
  minHeight: "800px",
}));

export default function AddonsPage() {
  let layouts = [];

  for (let i = 0; i < 12; i++) {
    const element = (
      <Paper
        sx={{
          width: 400,
          borderRadius: 3,
          border: "1px solid #919EAB",
          marginRight: "20px",
          marginLeft: "10px",
          marginBottom: "50px",
          flex: "0 0 20%",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
          padding: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: 0,
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap",
            paddingLeft: "20px",
            paddingTop: "20px",
            borderBottom: "2px solid #83bfd2",
            width: "100%",
          }}
        >
          <p>MyDashboard</p>
          <p>Created: March 21, 2023</p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 2 }}>
          <FavoriteBorderIcon
            sx={{ color: "#1c7ed9", marginRight: 2 }}
          ></FavoriteBorderIcon>
          <ShareIcon sx={{ color: "#1c7ed9", marginRight: "auto" }}></ShareIcon>
          <Link href="/addons/edit">
            <EditIcon sx={{ color: "#1c7ed9", marginRight: 2 }}></EditIcon>
          </Link>
          <DeleteIcon sx={{ color: "#1c7ed9", marginRight: 2 }}></DeleteIcon>
        </Box>
      </Paper>
    );

    layouts.push(element);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Box
              sx={{
                borderBottom: "1px solid gray",
                height: 110,
                width: "100%",
                display: "flex",
                alignItems: "center",
                padding:2,
              }}
            >
              <h2 style={{ paddingLeft: "30px", marginRight:"auto" }}>Custom Layouts</h2>
              <button  style={{alignItems:"center", padding:10, marginRight:20}}>Add new layout</button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 5,
              }}
            >
              {layouts.map((element) => {
                return element;
              })}
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
