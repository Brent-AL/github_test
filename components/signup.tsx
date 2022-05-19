import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Signup = () => {
    const paperStyles = {padding: 20, height: '50vh', width: 280, margin: '20px auto' }
    const avatarStyle = {backgroundColor: '#649793'}
    const btnstyle = {margin: '15px 0'}
    const headerStyle = {margin: '0'}
    const formStyle = {margin: '5px 0'}
    
    return (
        <Grid>
            <Paper elevation={10} style={paperStyles}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleOutlineIcon /></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption" gutterBottom>Create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth required label='Name' placeholder="Enter name" />
                    <TextField fullWidth required label='Email' placeholder="Enter email" />
                    <TextField fullWidth required label='Phone Number' placeholder="Enter phone number" />
                    <TextField fullWidth required label='Password' placeholder="Enter password" type="password" />
                    <TextField fullWidth required label='Confirm Password' placeholder="Confirm password" type="password" />

                    <FormControlLabel style={formStyle}
                        control={
                            <Checkbox
                                color="primary"
                                name="checkedB"
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                </form>
            <Button type="submit" color="primary" fullWidth  variant="contained" style={btnstyle}> Sign Up</Button>
            </Paper>
        </Grid>
    )
}

export default Signup;