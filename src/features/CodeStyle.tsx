import React from 'react';
import { Box, Typography, Link, EditIcon } from '@forge/foundry';

/** Code style section  */
const CodeStyle = () => {
  return (
    <Box p={2}>
      <Typography variant="h3" gutterBottom>
        <EditIcon style={{ marginRight: 5 }} />
        Code style and formatting
      </Typography>
      <Box
        display="inline-flex"
        flexDirection="column"
        gap={1}
        alignItems="flex-start"
      >
        For basic code formatting and style, we recommend a combination of
        Prettier and ESLint, configured with Airbnb default linting rules. These
        packages will help keep your code consistently formatted and written. We
        encourage tweaking of linting rules as needed, but it is best to
        understand why the rules exist first.
        <Box display="flex" flexDirection="row" gap={2}>
          <Link href="https://code.visualstudio.com/">VSCode</Link>
          <Link href="https://prettier.io/">Prettier</Link>
          <Link href="https://eslint.org/">ESLint</Link>
          <Link href="https://airbnb.io/javascript/">Airbnb-lint docs</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CodeStyle;
