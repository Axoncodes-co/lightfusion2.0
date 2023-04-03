import { useState } from 'react';
import { Box, TextField, IconButton, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  searchButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const classes = useStyles();

  const toggleExpanded = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.searchBox}>
        <TextField
          className={classes.input}
          placeholder="Search"
          variant="outlined"
          size="small"
          onFocus={isMobile ? toggleExpanded : null}
          onBlur={isMobile ? toggleExpanded : null}
        />
        <IconButton
          className={classes.searchButton}
          size="medium"
          onClick={() => console.log('Search clicked')}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      {expanded && (
        <Box className={classes.searchBox}>
          <TextField
            className={classes.input}
            placeholder="Search"
            variant="outlined"
            size="small"
          />
          <IconButton
            className={classes.searchButton}
            size="medium"
            onClick={() => console.log('Search clicked')}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
