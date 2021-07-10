const styles = ({palette, breakpoint, spacing}) => (
  {
    app: {
      textAlign: 'center',
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    posts: {

    },
    post: {
      '&:hover': {
        cursor: 'pointer',
        boxShadow: '20px white'
      }

    },
    postTitle: {
      color: '#61dafb'
    },
    modal: {
      margin: 0,
      padding: spacing(2),
    },
    modalCloseButton: {
      position: 'absolute',
      right: spacing(1),
      top: spacing(1),
      color: palette.grey[500],
    },
    dialogActions: {
      margin: 0,
      padding: spacing(1),
    },
    dialogContent: {
      padding: spacing(2),
    }
  }
);

export default styles;