import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import styles from '../styles/styles.js';

const useStyles = makeStyles(styles);

var count = 1;

const PostModal = ({handleClose, open, modalPost}) => {
  const classes = useStyles();
  const {
    name,
    catchPhrase,
    body,
    title
  } = modalPost;

  console.log(modalPost);
  count++;
  console.log(`i rendered ${count} times`);
  return (
    <div>
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle disableTypography className={classes.modal}>
            <Typography variant="h5" className={classes.authorName} gutterBottom>
              {name}
            </Typography>
            <Typography gutterBottom >
              <em>"{catchPhrase}"</em>
            </Typography>
            <IconButton aria-label="close" className={classes.modalCloseButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent} dividers>
          <Typography
            className={classes.modalTitle}
            align="center"
            variant="h5"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography align="justify" gutterBottom>
            {body}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleClose} color="primary">
            Return to Posts
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PostModal;