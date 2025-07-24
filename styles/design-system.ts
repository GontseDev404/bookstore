// Color palette
export const colors = {
  light: {
    primary: '#1A73E8',
    secondary: '#F4B400',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#222222',
    textSecondary: '#555555',
    border: '#E0E0E0',
    error: '#EA4335',
    success: '#34A853',
    warning: '#FBBC05',
    info: '#4285F4',
    disabled: '#BDBDBD',
    hover: '#E8F0FE',
    active: '#174EA6',
    selected: '#D2E3FC',
  },
  dark: {
    primary: '#8AB4F8',
    secondary: '#FFD600',
    background: '#181818',
    surface: '#232323',
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    border: '#333333',
    error: '#FF6D6D',
    success: '#81C995',
    warning: '#FFD600',
    info: '#8AB4F8',
    disabled: '#555555',
    hover: '#26334D',
    active: '#174EA6',
    selected: '#26334D',
  },
};

// Typography
export const typography = {
  fontFamily: 'Inter, Arial, sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

// Component states
export const states = {
  active: {
    opacity: 1,
    boxShadow: '0 0 0 2px #1A73E8',
  },
  inactive: {
    opacity: 0.7,
    boxShadow: 'none',
  },
  hover: {
    opacity: 1,
    boxShadow: '0 2px 8px rgba(26, 115, 232, 0.08)',
  },
  selected: {
    opacity: 1,
    boxShadow: '0 0 0 2px #F4B400',
  },
  disabled: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
}; 