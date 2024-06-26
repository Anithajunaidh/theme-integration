"use client"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { muiThemes } from './muiThemes'; // Adjust the path as necessary

const useMuiTheme = () => {
    const { theme } = useTheme();
    const [muiTheme, setMuiTheme] = useState(muiThemes.light);

    useEffect(() => {
        switch (theme) {
            case 'dark':
                setMuiTheme(muiThemes.dark);
                break;
            case 'emerald':
                setMuiTheme(muiThemes.emerald);
                break;
            case 'pink':
                setMuiTheme(muiThemes.pink);
                break;
            case 'light':
            default:
                setMuiTheme(muiThemes.light);
                break;
        }
    }, [theme]);

    return muiTheme;
};

export default useMuiTheme;
