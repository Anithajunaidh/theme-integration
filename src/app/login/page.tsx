"use client"
import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { StyledBox, StyledFormBox } from '@/components/styledComponents';
import Slider from '@/components/Slider';

const LoginPage = () => {

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <Container component="main" maxWidth="xs">
            <StyledBox>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <StyledFormBox component="form" onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        className='border-2 border-th-primary-medium'
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </StyledFormBox>
            </StyledBox>
            <Slider />
        </Container>
    );
};

export default LoginPage;
