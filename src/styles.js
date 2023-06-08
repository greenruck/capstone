import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    searchForm: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    searchInput: {
      marginRight: theme.spacing(2),
    },
    artworkList: {
      listStyle: 'none',
      padding: 0,
    },
    artworkItem: {
      marginBottom: theme.spacing(2),
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
    },
    activePage: {
      fontWeight: 'bold',
    },
    errorMessage: {
      color: 'red',
    },
  }));