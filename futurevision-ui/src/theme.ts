import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: { main: '#0ea5e9', light: '#38bdf8', dark: '#0284c7' },
    secondary: { main: '#14b8a6', light: '#2dd4bf', dark: '#0f766e' },
    background: { default: '#071521', paper: '#0c1b2b' },
    divider: 'rgba(56,189,248,0.15)',
    text: { primary: '#e6f1ff', secondary: '#a8c5d1' }
  },
  typography: {
    fontFamily: 'Cairo, Poppins, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '.1px' },
    h2: { fontWeight: 700, letterSpacing: '.1px' },
    h3: { fontWeight: 600, letterSpacing: '.1px' },
    button: { textTransform: 'none', fontWeight: 700 }
  },
  shape: { borderRadius: 16 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(7,21,33,0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(56,189,248,0.12)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px rgba(2,132,199,0.15)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(7,21,33,0.7)',
          borderBottom: '1px solid rgba(56,189,248,0.12)'
        }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'box-shadow .25s, transform .2s'
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(90deg, #0ea5e9, #14b8a6)'
        },
        containedSecondary: {
          backgroundImage: 'linear-gradient(90deg, #14b8a6, #0ea5e9)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: '2px 10px',
          ':hover': {
            backgroundColor: 'rgba(56,189,248,0.06)',
            boxShadow: '0 0 14px rgba(14,165,233,0.25)'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(56,189,248,0.15)' }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { height: 3, borderRadius: 3 }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: 'rgba(14,165,233,0.12)'
        }
      }
    }
  }
})

