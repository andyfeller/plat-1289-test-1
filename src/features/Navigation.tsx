import React from 'react';
import { AppBar, Toolbar, Logo, Typography, makeStyles } from '@forge/foundry';
import NavLinkItem from './NavLinkItem';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.typography.pxToRem(22),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    // Overpass... sigh
    position: 'relative',
    top: -2,
  },
  logo: {
    // adjusted due to built-in logo space
    marginRight: theme.spacing(0.5),
  },
  logoDivider: {
    color: 'inherit',
    borderLeft: `1px solid ${theme.palette.secondary.contrastText}`,
    marginRight: theme.spacing(1),
    width: 1,
    height: 32,
  },
}));

/** Basic navigation component that shows links in the nav bar. */
const Navigation: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary">
      <Toolbar>
        <Logo size="large" color="white" className={classes.logo} />
        <div className={classes.logoDivider} />
        <Typography variant="h1" color="inherit" className={classes.title}>
          Bandwidth Web App
        </Typography>
        <NavLinkItem exact to="/">
          Getting started
        </NavLinkItem>
        <NavLinkItem to="/demo">Demo</NavLinkItem>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
