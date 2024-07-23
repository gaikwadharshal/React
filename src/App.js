

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <Container maxWidth="sm">
      <Box component="section" sx={{ p: 2, border: '1px solid grey' }}>
      <div>
      <TextField id="standard-basic" label="First Name" variant="standard" />
      </div>
      <div>
      <TextField id="standard-basic" label="Last Name" variant="standard" />
      </div>
      <div>
      <TextField id="standard-basic" label="Mail ID" variant="standard" type="email" />
      </div>
      <div>
      <TextField id="standard-basic" label="Gender" variant="standard" />
      </div>
      <div>
        <TextField
          id="birthdate"
          label="Date of Birth"
          variant="standard"
          type="date" // Use type="date" for date picker
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
      <TextField id="standard-basic" label="Password" variant="standard" type="password" />
      </div>
      <div>
      <TextField id="standard-basic" label="Conform Password" variant="standard" type="password" />
      </div>
      
      <Button color='success' variant="contained"
       onClick={() => {
       alert('You have successfully registered');
       }}
>
       Register
      </Button>

      
      </Box>
      </Container>
    </div>
  );
}

export default App;
