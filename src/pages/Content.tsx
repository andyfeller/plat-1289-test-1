import React from 'react';
import { Box, Typography } from '@forge/foundry';
import CodeStyle from '../features/CodeStyle';
import Foundry from '../features/Foundry';
import Testing from '../features/Testing';
import Help from '../features/Help';

/** A basic content page.  */
const Content = () => {
  return (
    <Box m={5}>
      <Typography variant="h1" gutterBottom>
        Getting started
      </Typography>
      <CodeStyle />
      <hr />
      <Foundry />
      <hr />
      <Testing />
      <hr />
      <Help />
    </Box>
  );
};

export default Content;
