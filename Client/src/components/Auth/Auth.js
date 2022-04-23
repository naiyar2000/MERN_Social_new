import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input'

const Auth = () => {
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => setSignUp((p) => !p);

    const handleShowPassword = () => setShowPassword((p) => !p);

    const [showPassword, setShowPassword] = useState(false);

    const [isSignUp, setSignUp] = useState(false);
    return (
    <div>
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "Sign Up": "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" half handleChange={handleChange} autoFocus/>
                                    <Input name="lastName" label="Last Name" half handleChange={handleChange} />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmedPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {
                            isSignUp ? "Sign Up" : "Sign In"
                        }
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {
                                    isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    </div>
  )
}

export default Auth