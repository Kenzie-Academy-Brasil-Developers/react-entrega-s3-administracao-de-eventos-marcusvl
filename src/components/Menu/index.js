import { AppBar, IconButton, MenuItem, Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => history.push(path);

  const onWeddingClick = () => sendTo("/wedding");
  const onGraduationClick = () => sendTo("/graduation");
  const onPartyClick = () => sendTo("/party");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#2E3B55" }}>
        <Toolbar style={{ paddingLeft: "5px" }}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem
            style={{ paddingRight: "3px", paddingLeft: "0", fontSize: "10px" }}
            onClick={() => sendTo("/")}
          >
            Lista de Cervejas
          </MenuItem>
          <MenuItem
            style={{ paddingRight: "3px", fontSize: "10px" }}
            onClick={onWeddingClick}
          >
            Casamento
          </MenuItem>
          <MenuItem
            style={{ paddingRight: "3px", fontSize: "10px" }}
            onClick={onGraduationClick}
          >
            Graduação
          </MenuItem>
          <MenuItem
            style={{ paddingRight: "3px", fontSize: "10px" }}
            onClick={onPartyClick}
          >
            Confraternização
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
