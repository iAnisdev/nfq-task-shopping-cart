import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SignupRequest } from '../../features/Auth/AuthSlice';
import { SignupFormValues } from './../../Types/auth';
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SignUp() {
  const theme = useAppSelector(state => state.app.theme)
  const [snackBarContent, setSnackBarContent] = React.useState(() => {
    return {
      open: false,
      message: ''
    }
  })

  const handleSnackBarClose = (): void => {
    setSnackBarContent({
      message: '',
      open: false
    })
  }
  const disptach = useAppDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget)
    let user: SignupFormValues = {
      email: '',
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      cpassword: ''
    }

    for (let [key, value] of Array.from(formData.entries())) {
      if (user.hasOwnProperty(key)) {
        user[key] = value.toString()
      }
    }
    if (user.cpassword.trim() !== user.password.trim()) {
      setSnackBarContent({
        message: 'Both password didnt match',
        open: true
      })
    } else {
      disptach(SignupRequest({
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname
        }
      }))
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  id="cpassword"
                  autoComplete="repeat-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to='/login'>
                  <Typography variant="body2" color={theme === 'light' ? 'blue' : 'white'}>
                    Already have an account? Sign in
                  </Typography>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        autoHideDuration={5000}
        open={snackBarContent.open}
        onClose={handleSnackBarClose}
        message={snackBarContent.message}
      >
        <Alert onClose={handleSnackBarClose} severity="error" sx={{ width: '100%' }}>
          {snackBarContent.message}
        </Alert>
      </Snackbar>
    </>
  );
}