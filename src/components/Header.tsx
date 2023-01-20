import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Monastic
          </Typography>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
