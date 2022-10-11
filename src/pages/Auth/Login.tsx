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
import { LoginRequest } from '../../features/Auth/AuthSlice';

export default function Login() {
  const theme = useAppSelector(state => state.app.theme)
  const [username, setUsername] = React.useState(() => {
    return 'johnd'
  })
  const [password, setPassword] = React.useState(() => {
    return 'm38rmF$'
  })


  const disptach = useAppDispatch()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await disptach(LoginRequest({ username, password }))
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              autoFocus
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <RouterLink to="/forgot">
                <Typography variant="body2" color={theme === 'light' ? 'blue' : 'white'}>
                  Forgot password?
                </Typography>
              </RouterLink>
            </Grid>
            <Grid item>
              <RouterLink to='/signup'>
                <Typography variant="body2" color={theme === 'light' ? 'blue' : 'white'}>
                  {"Don't have an account? Sign Up"}
                </Typography>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}