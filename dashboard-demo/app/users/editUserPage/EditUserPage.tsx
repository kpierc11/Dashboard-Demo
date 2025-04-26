import Box from "@mui/material/Box";
import { Paper, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import EditUserForm, { EditUserPhotoForm } from "../../../components/editUserForm/editUserForm";

export default function EditUserPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  

  return (
    <Paper
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        border: "1px solid #919eab",
        borderRadius: "15px",
      }}
    >
      <Toolbar
        sx={{
          borderBottom: "1px solid #919EAB",
          width: "100%",
        }}
      >
        <Box className="edit-users-title-column">
          <h2>Edit User</h2>
        </Box>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          border: "1px solid #919eab",
          borderRadius: "15px",
          margin: "30px 0px 30px 18px",
        }}
      >
        <EditUserForm />
        <EditUserPhotoForm />
      </Box>
      <Box className="e-button-bg">
        <button
          className="cancel-button"
          onClick={() => {
            navigate("/users/");
          }}
        >
          Cancel
        </button>

        <button
          className="edit-sb"
          onClick={() => {
            navigate("/users/");
          }}
        >
          Save
        </button>
      </Box>
    </Paper>
  );
}
