import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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

export function EditUserPhotoForm() {
  const [imgFile, setImageFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(() => {
    const storedImage:any = localStorage.getItem("avatar-image");
    return storedImage;
  });

  const updateImage = (e: any) => {
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    const fileReader = new FileReader();

    if (imgFile) {
      fileReader.onload = (e) => {
        const { result }: any = e.target;
        if (result) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(imgFile);
      localStorage.setItem("avatar-image", fileDataURL);
    }
  });

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
          color="default"
          aria-label="upload picture"
          component="label"
          sx={{ margin: "15px" }}
        >
          <input hidden accept="image/*" type="file" onChange={updateImage} />
          <Avatar src={fileDataURL} sx={{ width: "180px", height: "180px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default function EditUserForm() {
  const [role, setRole] = useState("Admin");
  const theme = useTheme();
  const location = useLocation();
  const editUserData = location.state;

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
              defaultValue={`${editUserData.name}`}
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
              defaultValue={`${editUserData.type}`}
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
