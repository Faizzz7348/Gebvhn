import { ReactNode, useEffect } from 'react';

// Ocean Deep Blue Dark theme - fixed, no switching
export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    
    // Set fixed Ocean Deep Blue Dark theme
    root.classList.add('ocean-deep-dark');
    
    // Update browser tab/address bar color to deep ocean blue
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#001F3F'); // Deep ocean blue
    }
  }, []);

  return <>{children}</>;
}
