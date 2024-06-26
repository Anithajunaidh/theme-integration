'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMuiTheme from './useMuiTheme';

const ClientThemeProvider = ({ children }) => {
    const muiTheme = useMuiTheme();

    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ClientThemeProvider;
