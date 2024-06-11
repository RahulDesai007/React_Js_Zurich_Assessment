import React, { useState } from 'react';

//Material UI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//react router
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";


function Copyright(props) {
    return (
        <p variant="body2" color="text.secondary" align="center" style={{marginTop:"60px", color:"grey"}}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.capgemini.com/">
                Capgemini
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </p>
    );
}

const theme = createTheme();

const Login = () => {
    const [selected, setSelected] = useState(null);
    const defaultValues = {
        email: "",
        password: ""
    };
    const [actions, setActions] = useState([
        "Sign In"
    ]);
    const [emailErrorText, setEmailErrorText] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");
    const [formValues, setFormValues] = useState(defaultValues);
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        if (!formValues.email) {
            setEmailErrorText("Please enter email");
        } else {
            setEmailErrorText("");
        }
        if (!formValues.password) {
            setPasswordErrorText("Please enter password");
        } else {
            setPasswordErrorText("");
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formValues.email) {
            setEmailErrorText("Please enter email");
        }
        else if (!formValues.password) {
            setPasswordErrorText("Please enter password");
        } else {
            localStorage.setItem('setAuthFlag', 'true');
            history.push('/Dashboard')
        }

    };

    return (
        <ThemeProvider theme={theme} >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
            </Helmet>
            <Grid container component="main" sx={{
                height: '100vh',
                backgroundImage: 'url(https://thumbs.dreamstime.com/b/medical-coverage-insurance-concept-hands-doctor-covering-symbols-icons-blue-background-copy-space-web-banner-template-152592412.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />

                    <Box
                        sx={{
                            marginTop: 11,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                width: 400,
                                display: 'flex',
                                flexWrap: 'wrap',
                                opacity: 0.9,
                                padding: 4
                            }} >

                            <Typography component="h1" variant="h5">
                                Sign in 
                            </Typography>
                            <form sx={{ mt: 1 }} >
                                <TextField

                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email or Username"
                                    onChange={handleChange}
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={!!emailErrorText}
                                    helperText={emailErrorText}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    type="password"
                                    label="Password"
                                    onChange={handleChange}
                                    name="password"
                                    autoComplete="current-password"
                                    error={!!passwordErrorText}
                                    helperText={passwordErrorText}

                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Link
                                    href='/Dashboard '
                                    to='/Dashboard'
                                    style={{ textDecoration: "none" }}
                                />
                                {actions.map(action => (

                                    <Button
                                        name={action}
                                        setSelected={setSelected}
                                        selected={selected}
                                        onClick={handleSubmit}
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}>
                                        {action.charAt(0).toUpperCase() + action.slice(1)}
                                    </Button>

                                ))}
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Box>
                    <Copyright  />
                </Container>
            </Grid>
        </ThemeProvider>
    );
}

export default Login