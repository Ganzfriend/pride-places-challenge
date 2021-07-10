import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles/styles.js';
import Posts from './components/Posts.js';

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Posts />
    </div>
  );
};

export default App;
