import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, IconButton, Typography} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
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
        <MuiDialogTitle disableTypography className={classes.modal}>
          <Typography variant="h6">{title}</Typography>
            <IconButton aria-label="close" className={classes.modalCloseButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent className={classes.dialogContent} dividers>
          <Typography gutterBottom>
            Author: {name}
          </Typography>
          <Typography gutterBottom>
            Catch Phrase: {catchPhrase}
          </Typography>
          <Typography gutterBottom>
            Post: {body}
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions className={classes.dialogActions}>
          <Button onClick={handleClose} color="primary">
            Return to Posts
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
};

export default PostModal;