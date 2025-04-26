import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import UserProfileForm, {
  UserPhotoForm,
} from "../../components/UserSettings/ProfileForms/UserProfileForm";

export default function UserProfilePage() {
  return (
    <Box sx={{ flexGrow: 1, margin: "30px 0px 70px 0px" }}>
      <Grid container spacing={4}>
        <Grid xs={12} md={4}>
          <UserPhotoForm></UserPhotoForm>
        </Grid>
        <Grid xs={12} md={6}>
          <UserProfileForm></UserProfileForm>
        </Grid>

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className="save-button">Save</button>
        </Box>
      </Grid>
    </Box>
  );
}
