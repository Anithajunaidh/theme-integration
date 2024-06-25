import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeProvider } from '@mui/material/styles';
import muiThemes from './muiThemes'; // Adjust the path to where your muiThemes file is located

type ThemeNames = keyof typeof muiThemes;

export const useMuiTheme = () => {
    const { theme } = useTheme();
    const [muiTheme, setMuiTheme] = useState(muiThemes.light);

    useEffect(() => {
        if (theme && (muiThemes as any)[theme as ThemeNames]) {
            setMuiTheme((muiThemes as any)[theme as ThemeNames]);
        } else {
            setMuiTheme(muiThemes.light); // Fallback to light theme if theme is undefined or not found
        }
    }, [theme]);

    return muiTheme;
};
