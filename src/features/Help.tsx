import React from 'react';
import { Box, Typography, Link, HelpIcon } from '@forge/foundry';

/** Help section  */
const Help = () => {
  return (
    <Box p={2}>
      <Typography variant="h3" gutterBottom>
        <HelpIcon style={{ marginRight: 5 }} />
        Help
      </Typography>
      <Box
        display="inline-flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
      >
        <Typography variant="body1">
          Feel free to reach out if you have any questions! You can reach us on
          Slack or ask questions on the Bandwidth Stack Overflow instance.
        </Typography>
        <Box display="flex" flexDirection="row" gap={2}>
          <Link href="https://bandwidth.slack.com/archives/CBUENBS0G">
            #react Slack channel
          </Link>
          <Link href="https://stackoverflow.com/c/bandwidth/questions">
            Bandwidth Stack Overflow
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
