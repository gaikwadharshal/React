import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function RegistrationForm() {
  return (
    <div className="RegistrationForm" style={{width: '100vh'}}>
      <h1 style={{ textAlign:'center' }}>Registration Form</h1>
      <Container maxWidth="50px">
        <Box
          component="section"
          sx={{
            p: 2,
            border: '1px solid grey',
            borderRadius: '8px', // Example: Adding borderRadius
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Example: Adding boxShadow
            minHeight: '100%', // Ensure the box takes up at least the full height
            display: 'flex',
            flexDirection: 'column', // Ensure children stack vertically
          }}
        >
          <div>
            <TextField id="standard-basic" label="First Name" variant="outlined" fullWidth />
          </div>
          <div>
            <TextField id="standard-basic" label="Last Name" variant="outlined" fullWidth />
          </div>
          <div>
            <TextField id="standard-basic" label="Email" variant="outlined" type="email" fullWidth />
          </div>
          <div>
            <TextField id="standard-basic" label="Gender" variant="outlined" fullWidth />
          </div>
          <div>
            <TextField
              id="birthdate"
              label="Date of Birth"
              variant="outlined"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </div>
          <div>
            <TextField id="standard-basic" label="Phone No" variant="outlined" fullWidth />
          </div>
          <div>
            <TextField id="standard-basic" label="Password" variant="outlined" type="password" fullWidth />
          </div>
          <div>
            <TextField id="standard-basic" label="Confirm Password" variant="outlined" type="password" fullWidth />
          </div>
          <div style={{ marginTop: '16px', alignSelf: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={() => {
                alert('You have successfully registered');
              }}
              fullWidth
              sx={{
                bgcolor: 'success.main', // Example: Using theme color for background
                '&:hover': {
                  bgcolor: 'success.dark', // Example: Darken theme color on hover
                },
              }}
            >
              Register
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default RegistrationForm;
