import React from 'react';
import { Box, Typography, Link, CodeIcon } from '@forge/foundry';

/** Foundry section.  */
const Foundry = () => {
  return (
    <Box p={2}>
      <Typography variant="h3" gutterBottom>
        <CodeIcon style={{ marginRight: 5 }} />
        Foundry
      </Typography>
      <Box
        display="inline-flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
      >
        <Typography variant="body1">
          Foundry is Bandwidth&apos;s component library. It wraps Material-UI
          and provides out-of-the-box styling that matches Bandwidth&apos;s
          brand.
        </Typography>
        <Box display="flex" flexDirection="row" gap={2}>
          <Link href="https://github.com/Bandwidth/foundry">Repository</Link>
          <Link href="https://d25g44s2opgzyn.cloudfront.net/latest/index.html?path=/docs/components-appbar--showcase">
            Documentation
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Foundry;
