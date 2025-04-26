import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./userSettings.css";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Paper } from "@mui/material";

const roles = [
  {
    value: "Phone Call",
    label: "Phone Call",
  },
  {
    value: "Text Message",
    label: "Text Message",
  },
  {
    value: "Disabled",
    label: "Disabled",
  },
];

export default function AuthenticationForm() {
  const [role, setRole] = useState("Disabled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  return (
    <Paper className="form-bg-box" sx={{boxShadow:"none"}}>
      <Box
        className="pass-box"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Divider textAlign="left">Password</Divider>
          <TextField
            id="outlined-password1"
            label="Old Password"
            type="password"
          />
          <TextField
            id="outlined-password2"
            label="New Password"
            type="password"
          />
          <TextField
            id="outlined-password3"
            label="Confirm New Password"
            type="password"
          />
        </Box>
      </Box>
      <Box
        className="two-fact-box"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Divider textAlign="left">Two Factor Authentication</Divider>
        <TextField
          id="outlined-select-role"
          select
          label="Enable"
          value={role}
          onChange={handleChange}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="outlined" label="Phone Number" type="integer" />
        <p>
          You will receive a code with the phone number you provide to complete
          the log in process.
        </p>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <button className="save-button">Save</button>
      </Box>
    </Paper>
  );
}
