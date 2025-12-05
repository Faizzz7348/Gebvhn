import { ReactNode, useEffect } from 'react';

// Dark theme - fixed, no switching
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    
    // Set fixed dark theme
    root.classList.add('dark');
    
    // Update browser tab/address bar color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#000000');
    }
  }, []);

  return <>{children}</>;
}
