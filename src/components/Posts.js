import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostModal from './PostModal.js';
import styles from '../styles/styles.js';

const useStyles = makeStyles(styles);

const Posts = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  const matchUser = (_id) => users.find(({id}) => id === _id) || users.find(({id}) => id === Math.ceil(Math.random() * 10));

  useEffect(() => {
    getData();
    getUsers();
  }, []);

  return (
    <div className={classes.posts}>
      {!!users.length && posts?.map(({body, id, title, userId}) => {
        // I was asked to provide the post author's catchPhrase, but what I'm seeing in the data provided by this API, it's not the author's catchPhrase, but rather the company's
        // If this isn't the catchPhrase you were looking for, I'd be happy to go back and fix this error, or even provide alternate dummy data for the author's catchPhrase! Just let me know :)
        const {name, company} = matchUser(userId);
        const {catchPhrase} = company;
        const postInfo = {name, catchPhrase, body, title};
        return (
          <div key={id} className={classes.post}>
            <div onClick={handleClickOpen}>
              <h5 className={classes.postTitle}>
                  {title}
              </h5>
              <h6>{body}</h6>
            </div>
            <PostModal open={open} handleClose={handleClose} postInfo={postInfo} />
          </div>
        )
      })}
    </div>
  );
};

export default Posts;