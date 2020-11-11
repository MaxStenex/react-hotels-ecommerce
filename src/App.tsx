import React from 'react';
import { Header } from './components/';
import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
    </React.Fragment>
  );
};

export default App;
