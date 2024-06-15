// "use client"
// import { useTheme } from "next-themes"
// function ThemeSwitcher() {
//   const { setTheme, theme } = useTheme();

//   const handleThemeChange = (newTheme: string) => {
//     setTheme(newTheme);
//   };

//   return (
//     <div>
//       <button onClick={() => handleThemeChange('swiss')}>swiss</button>
//       <button onClick={() => handleThemeChange('neon')}>neon</button>
//       <button onClick={() => handleThemeChange('system')}>System</button>
//     </div>
//   );
// }
// export default ThemeSwitcher;
"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className='bg-th-background'>
      <span>
        The current theme is: <strong>{theme}</strong>
      </span>
      <div>
        <label htmlFor="theme-select" className="sr-only mr-2">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">Select Theme</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeChanger;
