import React, { Suspense } from 'react';
import { ThemeProvider, CssBaseline, Loader } from '@forge/foundry';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './features/Navigation';
import Routes from './Routes';

/** Top level application component. */
const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <div>
              <Navigation />
              <Routes />
            </div>
          </Suspense>
        </ThemeProvider>
      </CssBaseline>
    </Router>
  );
};

export default App;
