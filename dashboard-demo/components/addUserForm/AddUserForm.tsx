import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import "./addUserForm.css";
import { useTheme } from "@mui/material";

const roles = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "User",
    label: "User",
  },
  {
    value: "Viewer",
    label: "Viewer",
  },
];

export function AddUserPhotoForm() {
  return (
    <Box sx={{ marginRight: "15px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <IconButton
          aria-label="upload picture"
          component="label"
          sx={{ margin: "15px" }}
        >
          <input hidden accept="image/*" type="file" />
          <Avatar sx={{ width: "180px", height: "180px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function AddUserForm() {
  const [role, setRole] = React.useState("Admin");
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          padding: "45px 45px 60px 45px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <TextField
              sx={{
                background: `${
                  theme.palette.mode === "dark" ? "#121212" : "white"
                }`,
              }}
              id="outlined"
              label="Name"
            />
            <TextField
              sx={{
                background: `${
                  theme.palette.mode === "dark" ? "#121212" : "white"
                }`,
              }}
              id="outlined"
              label="Phone Number"
              type="integer"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              sx={{
                background: `${
                  theme.palette.mode === "dark" ? "#121212" : "white"
                }`,
              }}
              id="outlined-select-role"
              select
              label="Role"
              value={role}
              onChange={handleChange}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={{
                background: `${
                  theme.palette.mode === "dark" ? "#121212" : "white"
                }`,
              }}
              id="outlined"
              label="Company"
              type="string"
            />
          </Box>
          <TextField
            sx={{
              background: `${
                theme.palette.mode === "dark" ? "#121212" : "white"
              }`,
            }}
            id="outlined"
            label="Email"
            style={{ width: 510 }}
          />

          <TextField
            sx={{
              background: `${
                theme.palette.mode === "dark" ? "#121212" : "white"
              }`,
            }}
            id="outlined"
            label="Notes"
            type="string"
            style={{ width: 510 }}
            multiline
            rows={5}
          />
        </Box>
      </Box>
    </Box>
  );
}
