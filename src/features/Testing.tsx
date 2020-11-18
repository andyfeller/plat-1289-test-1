import React from 'react';
import { Box, Typography, Link, BellIcon } from '@forge/foundry';

/** Testing section.  */
const Testing = () => {
  return (
    <Box p={2}>
      <Typography variant="h3" gutterBottom>
        <BellIcon style={{ marginRight: 5 }} />
        Testing
      </Typography>
      <Box
        display="inline-flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
      >
        <Typography variant="body1">
          For unit testing, Jest + @testing-library/react is recommended.
          Together they allow you to render React components, find elements, and
          make assertions on them. Integration and E2E test support is not
          included currently, but we recommend utilizing Cypress for it as
          needed.
        </Typography>
        <Box display="flex" flexDirection="row" gap={2}>
          <Link href="https://testing-library.com/docs/react-testing-library/intro">
            @testing-library/react
          </Link>
          <Link href="https://jestjs.io/en/">Jest</Link>
          <Link href="https://www.cypress.io/">Cypress</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Testing;
