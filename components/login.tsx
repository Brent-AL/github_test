import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Login = () => {
    const paperStyles = {padding: 20, height: '50vh', width: 280, margin: '20px auto' }
    const avatarStyle = {backgroundColor: '#649793;'}
    const btnstyle = {margin: '8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyles}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username' placeholder="Enter username" fullWidth required />
                <TextField label='Password' placeholder="Enter password" type="password" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox 
                            color="primary"
                            name="checkedB" 
                            />
                    }
                    label="Remember Me"
                />
            <Button type="submit" color="primary" fullWidth  variant="contained" style={btnstyle}> Sign In</Button>
            <Typography>
                <Link href='#'>
                    Forgot Password ?
                </Link>
            </Typography> 
            <Typography> Do you have an account ?
                <Link href='#'>
                    Sign Up
                </Link>
            </Typography>           
            </Paper>
        </Grid>
    )
}

export default Login;