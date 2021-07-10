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
      width: '60vw'

    },
    post: {
      border: '1px solid white',
      borderRadius: 10,
      boxShadow: '2px 1px 4px 1px gray',
      marginTop: spacing(3),
      marginBottom: spacing(3),
      padding: 10,
      '&:hover': {
        cursor: 'pointer',
        boxShadow: '3px 4px 4px 5px gray',
      },
      '&:active': {
        cursor: 'pointer',
        boxShadow: `1px 2px 2px 5px ${palette.grey[700]}`,
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    authorName: {
      color: '#61dafb'
    }
  }
);

export default styles;