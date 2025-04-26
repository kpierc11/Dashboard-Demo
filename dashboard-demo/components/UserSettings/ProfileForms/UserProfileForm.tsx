import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { createRef } from "react";
import { Paper } from "@mui/material";

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

export function UserPhotoForm() {
  return (
    <Paper
      className="photo-box"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "85%" },
        boxShadow: "none",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow:"none"
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
        <TextField
          id="outlined"
          label="Name"
        />
        <TextField
          id="outlined"
          label="Phone Number"
          type="integer"
        />
      </Paper>
    </Paper>
  );
}
export default function UserProfileForm() {
  const [role, setRole] = useState("Admin");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Box>
      <Paper
        className="form-box"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          boxShadow: "none",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined" label="Name" />
        <TextField id="outlined" label="Phone Number" type="integer" />
        <TextField
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
        <TextField id="outlined" label="Work Number" type="integer" />
        <TextField id="outlined" label="Email" style={{ width: 510 }} />
        <TextField
          id="outlined"
          label="Notes"
          type="string"
          style={{ width: 510 }}
          multiline
          rows={5}
        />
      </Paper>
    </Box>
  );
}
