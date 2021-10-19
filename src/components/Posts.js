import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import faker from "faker";

import PostModal from "./PostModal.js";
import styles from "../styles/styles.js";

const useStyles = makeStyles(styles);

const Posts = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [modalPost, setModalPost] = useState(null);

  const handleClickPost = (post) => setModalPost(post);

  const handleClose = () => setModalPost(null);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // the linter isn't liking the object literal spread operator for some reason
        // const newUsers = [...json].map(u => {...u, avatar: faker.internet.avatar()});
        const newUsers = [...json].map((u) => {
          u.avatar = faker.internet.avatar();
          return u;
        });
        setUsers(newUsers);
      })
      .catch((err) => console.log(err));
  };

  // I added a conditional to matchUser to find some random user data if, for some reason, it's passed an invalid user id (an id not present in the users array)
  // this is an edge case that would cause errors, so I provided a (not real world) solution to prevent the error by defaulting to other dummy data
  const matchUser = (_id) =>
    users.find(({ id }) => id === _id) ||
    users.find(({ id }) => id === Math.ceil(Math.random() * 10));

  useEffect(() => {
    getData();
    getUsers();
  }, []);

  return (
    <div className={classes.posts}>
      {!!users.length &&
        posts?.map(({ body, id, title, userId }) => {
          // I was asked to provide the post author's catchPhrase, but what I'm seeing in the data provided by this API, it's not the author's catchPhrase, but rather the company's
          // If this isn't the catchPhrase you were looking for, I'd be happy to go back and fix this error, or even provide alternate dummy data for the author's catchPhrase! Just let me know :)
          const { name, company, avatar } = matchUser(userId);
          const { catchPhrase } = company;
          const postInfo = { name, catchPhrase, avatar, body, title };
          return (
            <div key={id} className={classes.post}>
              <div onClick={() => handleClickPost(postInfo)}>
                <h5 className={classes.postTitle}>{title}</h5>
                <h6>{body}</h6>
              </div>
            </div>
          );
        })}
      {modalPost && (
        <PostModal
          open={!!modalPost}
          handleClose={handleClose}
          modalPost={modalPost}
        />
      )}
    </div>
  );
};

export default Posts;
