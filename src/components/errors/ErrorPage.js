/* eslint-disable */
import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const ErrorPage = (props) => {
  return (
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}
      >
        
        <Typography variant="h4" align="center">
          Oops!
        </Typography>
        <Typography variant="body1" align="center">
          An error has occurred.
        </Typography>
        <Typography variant="body1" align="center">
          Please refresh your page and try again. If this continues to happen please contact <a href="mailto:support@salvit.com">support@salvit.com</a>.
        </Typography>
        {/* <Link to="/">
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                border: '3px solid black'
              },
            }}
          >
            Go Home
          </Button>
      </Link> */}
       
      </Box>
      
  );
}

export default ErrorPage