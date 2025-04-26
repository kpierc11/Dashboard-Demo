"use client"
import Box from "@mui/material/Box";
import "./stationDataPage.css";
import { useState } from "react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DnsIcon from "@mui/icons-material/Dns";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AlarmsPage from "../../alarms/page";
import StationSummaryPage from "./stationSummaryPage/StationSummaryPage";
import StationChartPage from "./stationChartPage/StationChartPage";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StationDataPage() {
  const [personName, setPersonName] = useState<string[]>([]);
  const [value, setValue] = useState(0);


  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Paper
        sx={{
          width: "100%",
          border: "1px solid #919EAB",
          boxShadow: "none",
          borderRadius: "15px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: 5,
            marginTop: 5,
            paddingLeft: "24px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", marginRight: 10 }}>
            <h3>Selected Station: </h3>
            <FormControl sx={{ m: 1, width: 300 }}>
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Placeholder</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>

                <MenuItem>{}</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Tabs
            value={value}
            onChange={handleChangeValue}
            aria-label="station data tabs"
          >
            <Tab icon={<DnsIcon></DnsIcon>} label="Data" {...a11yProps(0)} />
            <Tab
              icon={<QueryStatsIcon></QueryStatsIcon>}
              label="Graphs"
              {...a11yProps(1)}
            />
            <Tab
              icon={<AccessAlarmsIcon></AccessAlarmsIcon>}
              label="Alarms"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <StationSummaryPage></StationSummaryPage>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StationChartPage />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AlarmsPage />
        </TabPanel>
      </Paper>
    </Box>
  );
}
