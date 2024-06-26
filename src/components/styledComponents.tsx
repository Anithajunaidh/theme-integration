"use client"
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));
