import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import styles from '../styles/styles.js';

const useStyles = makeStyles(styles);

const PostModal = ({handleClose, open, postInfo}) => {
  const classes = useStyles();
  const {
    name,
    catchPhrase,
    body,
    title
  } = postInfo;

  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle disableTypography className={classes.modal}>
            <Typography variant="h5" className={classes.authorName} gutterBottom>
              {name}
            </Typography>
            <Typography gutterBottom>
              <em>"{catchPhrase}"</em>
            </Typography>
            <IconButton aria-label="close" className={classes.modalCloseButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent} dividers>
          <Typography variant="h5">{title}</Typography>
          <Typography gutterBottom>
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