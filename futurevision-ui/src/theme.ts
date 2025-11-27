import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: { main: '#d4af37', light: '#e6c866', dark: '#a88726' },
    secondary: { main: '#2e7cc2', light: '#5aa0de', dark: '#205a8f' },
    background: { default: '#0b1220', paper: '#0f1627' },
    divider: 'rgba(255,255,255,0.08)',
    text: { primary: '#f5f7fa', secondary: '#c7d0e0' }
  },
  typography: {
    fontFamily: 'Cairo, Poppins, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '.2px' },
    h2: { fontWeight: 700, letterSpacing: '.2px' },
    h3: { fontWeight: 600, letterSpacing: '.2px' },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17,24,42,0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.08)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(17,24,42,0.6)',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'box-shadow .25s, transform .2s'
        },
        containedPrimary: {
          backgroundImage: 'linear-gradient(90deg, #2e7cc2, #d4af37)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '2px 8px',
          ':hover': {
            backgroundColor: 'rgba(255,255,255,0.04)',
            boxShadow: '0 0 14px rgba(141,112,255,0.25)'
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: 'rgba(255,255,255,0.08)' }
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { height: 3, borderRadius: 3 }
      }
    }
  }
})

