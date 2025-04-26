"use client";
import Box from "@mui/material/Box/Box";
import Paper from "@mui/material/Paper/Paper";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Switch from "@mui/material/Switch/Switch";
import "../trends/trendsPage.css";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  LocalizationProvider,
  TimePicker,
  DateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Station One Data",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

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

const names = [
  "station1",
  "station2",
  "station3",
  "station4",
  "station5",
  "station6",
];

export default function TrendsPage() {
  const [personName, setPersonName] = useState<string[]>([]);
  const [dataSets, setDataSets] = useState<any>([
    {
      label: "Chlorine",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "#CD5C5C",
      backgroundColor: "#CD5C5C",
    },
  ]);
  const [value, setValue] = useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  let data = {
    labels,
    datasets: dataSets,
  };

  const handleChangeStation = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const handleToggleActive = (
    event: any,
    label: string,
    color: string
  ): void => {
    let isChecked = event.currentTarget.firstChild.checked;

    if (isChecked) {
      let newData = [
        {
          label: label,
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: color,
          backgroundColor: color,
        },
      ];

      setDataSets([...dataSets, ...newData]);
    } else {
      setDataSets(dataSets.filter((a: { label: string }) => a.label !== label));
    }
  };

  return (
    <Paper
      sx={{ padding: 5, boxShadow: "none", borderRadius: "15px" }}
      className="charts-toggle-card"
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginRight: 20 }}
        >
          <FormControl sx={{ width: 300, marginBottom: "29px" }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChangeStation}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select a Station</em>;
                }

                return selected.join(",");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={3}>
              <TimePicker label="Time" value={value} onChange={handleChange} />

              <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={handleChange}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            border: "1px solid #919EAB",
            borderRadius: "15px",
            boxShadow: "none",
            padding: 5,
            width: "100%",
            height: "600px",
          }}
        >
          <Line options={options} data={data} />
        </Paper>

        <Paper
          sx={{ boxShadow: "none", borderRadius: "15px" }}
          className="charts-toggle-card"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
              marginTop: "28px",
            }}
          >
            <Box className="charts-toggle-column">
              <p>DPI multi probe (0/9)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "bg algae (ppm)", "#00BAE2");
                    }}
                  />
                  <p>bg algae (ppm)</p>
                </Box>
                <Box className="chart-toggle-inner-wrapper">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "Chloro (µg/m³)", "#EFF313");
                    }}
                  />
                  <p>Chloro (µg/m³)</p>
                </Box>
              </Box>
            </Box>
            <Box className="charts-toggle-column">
              <p>NOAA Precipitation (0/1)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "Battery (V)", "#005E93");
                    }}
                  />
                  <p>Battery (V)</p>
                </Box>
                <Box className="charts-toggle-switch">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "RSSI", "#6CFA3A");
                    }}
                  />
                  <p>RSSI</p>
                </Box>
              </Box>
            </Box>
            <Box className="charts-toggle-column">
              <p>Statistics (0/1)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "DPA (in)", "#0CFFF0");
                    }}
                  />
                  <p>DPA (in)</p>
                </Box>
                <Box className="charts-toggle-switch">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "Unknown %", "#ED009C");
                    }}
                  />
                  <p>Unknown %</p>
                </Box>
              </Box>
            </Box>
            <Box className="charts-toggle-column">
              <p>Michael Lamptey (0/2)</p>
              <Box className="charts-toggle-wrapper">
                <Box className="chart-toggle-inner-wrapper">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "Station Health", "#FA3A3A");
                    }}
                  />
                  <p>Station Health</p>
                </Box>
                <Box className="charts-toggle-switch">
                  <Switch
                    onClick={(event) => {
                      handleToggleActive(event, "Test Label", "#00BAE2");
                    }}
                  />
                  <p>Unknown %</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}
