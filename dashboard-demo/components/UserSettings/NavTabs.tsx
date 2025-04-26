import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserProfileForm from "../../pages/userProfilePage/UserProfilePage";
import AuthenticationForm from "./ProfileForms/AuthenticationForm";
import NotificationForm from "./ProfileForms/NotificationForm";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Paper sx={{ p: 3, borderRadius:"0px 0px 15px 15px" }}>
          <Typography>{children}</Typography>
        </Paper>
      )}
    </div>
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

const theme = useTheme();

  return (
    <Paper
      sx={{
        height: "100%",
        border: "1px solid gray",
        borderRadius: "15px",
      }}
    >
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            margin: "50px 18px 0px 18px",
            borderRadius: "15px",
          }}
        >
          <Tab icon={<PersonIcon />} label="Profile" iconPosition="start" />
          <Tab
            icon={<LockPersonIcon />}
            label="Authentication"
            iconPosition="start"
          />
          <Tab
            icon={<NotificationsIcon />}
            label="Notifications"
            iconPosition="start"
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Box>
          <UserProfileForm />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AuthenticationForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NotificationForm />
      </TabPanel>
    </Paper>
  );
}
