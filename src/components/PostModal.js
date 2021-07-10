import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Avatar
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import styles from '../styles/styles.js';

const useStyles = makeStyles(styles);

const PostModal = ({handleClose, open, modalPost}) => {
  const classes = useStyles();
  const {
    name,
    catchPhrase,
    avatar,
    body,
    title
  } = modalPost;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        TransitionProps={{
          disableStrictModeCompat: true,
          timeout: 500
        }}
      >
        <DialogTitle disableTypography className={classes.modal}>
          <Box className={classes.dialogTitle}>
            <Avatar className={classes.avatar} alt={`Avatar of ${name}`} src={avatar} />
            <Box>
              <Typography variant="h5" className={classes.authorName} gutterBottom>
                {name}
              </Typography>
              <Typography gutterBottom >
                <em>"{catchPhrase}"</em>
              </Typography>
            </Box>
          </Box>
          <IconButton aria-label="close" className={classes.modalCloseButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.dialogContent} dividers>
          <Typography
            className={classes.modalPostTitle}
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