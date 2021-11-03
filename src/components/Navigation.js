import React from "react";

import Drawer from "@material-ui/core/Drawer";

import Logo from "../logo.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navigationLogo: {
    width: "50%",
    borderRadius: 10,
  },
  navigationLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationDrawer: {
    width: 240,
  },
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        classes={{ paper: classes.navigationDrawer }}
        variant="permanent"
        open="true"
      >
        <div className={classes.navigationLogoContainer}>
          <img className={classes.navigationLogo} src={Logo} alt="Farmastat" />
        </div>
      </Drawer>
    </div>
  );
};

export default Navigation;
