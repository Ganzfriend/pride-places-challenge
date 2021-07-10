import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../styles/styles.js';

const useStyles = makeStyles(styles);

const Posts = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => getData(), []);

  return (
    <div className={classes.posts}>
      {posts?.map(({body, id, title, userId}) => {
        return (
          <div key={id} className={classes.post}>
            <h5 className={classes.postTitle}>{title}</h5>
            <h6>{body}</h6>
          </div>
        )
      })}
    </div>
  );
};

export default Posts;