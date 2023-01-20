import { useState } from "react";
import {
  Autocomplete,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  TextField,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function SelectStatistics() {
  const options = ["Analysis 1", "Analysis 2", "Analysis 3"];

  return (
    <Autocomplete
      disablePortal
      disableClearable
      id="analysis"
      options={options}
      sx={{ flexGrow: 1 }}
      renderInput={(params) => (
        <TextField {...params} label="Select statistics" />
      )}
    />
  );
}

function DisplayStatistics() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ flexGrow: 1, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="statistics"
    >
      <ListItemButton>
        <ListItemText primary="Info" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Model" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Components" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Component 1" />
            <ListItemText primary="1234" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Component 2" />
            <ListItemText primary="5678" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

export default function Statistics() {
  return (
    <>
      <SelectStatistics />
      <DisplayStatistics />
    </>
  );
}
