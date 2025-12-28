import React from 'react';
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded'
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import RoomServiceRoundedIcon from '@mui/icons-material/RoomServiceRounded'
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded'
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { useState, useEffect } from 'react'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import Popover from '@mui/material/Popover'
import ListItem from '@mui/material/ListItem'
import Drawer from '@mui/material/Drawer'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import logo from '../assets/logo.png'

type NavItem = {
  to?: string
  label: string
  icon?: React.ReactNode
  items?: NavItem[]
  countryCode?: string
}


export default function SideNav() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [logoFailed, setLogoFailed] = useState(false)
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem('sidenav_collapsed') === '1';
    } catch {
      return false;
    }
  });
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [menuItems, setMenuItems] = useState<NavItem[]>([]);
  const [menuTitle, setMenuTitle] = useState('');
  const handleClick = (label: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [label]: !prevOpen[label] }));
  };
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  useEffect(() => {
    const w = isMobile ? '0px' : (collapsed ? '72px' : '240px');
    document.documentElement.style.setProperty('--sidenav-width', w);
    localStorage.setItem('sidenav_collapsed', collapsed ? '1' : '0');
  }, [collapsed, isMobile]);
  const location = useLocation()
  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>, label: string, items: NavItem[]) => {
    setMenuAnchor(e.currentTarget as HTMLElement)
    setMenuTitle(label)
    const collectLeaf = (arr: NavItem[]) => {
      const out: NavItem[] = []
      for (const x of arr) {
        if (x.items) out.push(...collectLeaf(x.items))
        else out.push(x)
      }
      return out
    }
    setMenuItems(collectLeaf(items))
  }
  const handleCloseMenu = () => {
    setMenuAnchor(null)
    setMenuItems([])
    setMenuTitle('')
  }
  const items = [
    { to: '/', label: 'الرئيسية', icon: <HomeRoundedIcon /> },
    {
      label: 'Visa',
      icon: <TravelExploreRoundedIcon />,
      items: [
        { to: '/visa/uganda', label: 'أوغندا', countryCode: 'UG' },
        {
          label: 'السعودية',
          icon: <ReactCountryFlag countryCode="SA" svg style={{ width: '1.5em', height: '1.5em' }} />,
          items: [
            { to: '/visa/saudi/umrah', label: 'عمرة' },
            { to: '/visa/saudi/gcc-resident', label: 'سياحية لمقيمين مجلس التعاون' }
          ]
        },
        { to: '/visa/uae', label: 'الإمارات', countryCode: 'AE' },
        { to: '/visa/egypt', label: 'مصر', countryCode: 'EG' },
        { to: '/visa/malaysia', label: 'ماليزيا', countryCode: 'MY' },
      ],
    },
    {
      label: 'الخدمات',
      icon: <RoomServiceRoundedIcon />,
      items: [
        {
          label: 'خدمات إجراءات',
          items: [
            { to: '/procedures/saudi-residency/sudan', label: 'جهة القدوم السودان', countryCode: 'SD' },
            { to: '/procedures/saudi-residency/uganda', label: 'جهة القدوم يوغندا', countryCode: 'UG' },
            { to: '/procedures/saudi-residency/uae', label: 'جهة القدوم الإمارات', countryCode: 'AE' },
          ],
        },
        {
          label: 'خدمات سياحية',
          items: [
            {
              label: 'أوغندا',
              icon: <ReactCountryFlag countryCode="UG" svg style={{ width: '1.5em', height: '1.5em' }} />,
              items: [
                { to: '/tourism/uganda?dest=bwindi', label: 'حديقة بويندي' },
                { to: '/tourism/uganda?dest=murchison-falls', label: 'حديقة شلالات مورشيسون الوطنية' },
                { to: '/tourism/uganda?dest=queen-elizabeth', label: 'حديقة الملكة إليزابيث الوطنية' },
                { to: '/tourism/uganda?dest=jinja', label: 'جينجا – مغامرة نهر النيل' },
              ]
            },
            { to: '/tourism/saudi', label: 'السعودية' },
            { to: '/tourism/uae', label: 'الإمارات' },
            { to: '/tourism/egypt', label: 'مصر' },
            { to: '/tourism/malaysia', label: 'ماليزيا' },
            { to: '/request', label: 'طلب خدمة' },
          ],
        },
      ],
    },
    { to: '/flights', label: 'عروض الطيران', icon: <FlightTakeoffRoundedIcon /> },
    { to: '/domestic-workers', label: 'استقدام عمالة منزلية', icon: <CleaningServicesRoundedIcon /> },
    { to: '/jobs', label: 'الوظائف', icon: <WorkOutlineRoundedIcon /> },
    { to: '/about', label: 'من نحن', icon: <InfoOutlinedIcon /> },
    { to: '/vision', label: 'رؤيتنا', icon: <AutoAwesomeRoundedIcon /> },
  ];

  const renderNavItems = (items: NavItem[], level: number): JSX.Element[] => {
    return items.map((it) => {
      if (it.items) {
        const groupButton = (
          <ListItemButton
            onClick={() => !collapsed && handleClick(it.label)}
            {...(collapsed ? { onClick: (e) => handleOpenMenu(e, it.label, it.items) } : {})}
            sx={{
              pl: collapsed ? 1 : level * 2,
              transition: 'all .2s',
              ':hover': {
                boxShadow: '0 0 14px rgba(141,112,255,0.35)',
                background: 'rgba(255,255,255,0.04)'
              }
            }}
          >
            <ListItemIcon sx={{ color: 'text.secondary' }}>{it.icon}</ListItemIcon>
            <ListItemText primary={it.label} sx={{ display: collapsed ? 'none' : 'block' }} />
            {!collapsed && (open[it.label] ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
        );
        return (
          <React.Fragment key={it.label}>
            {collapsed ? (
              <Tooltip title={it.label} placement="right">{groupButton}</Tooltip>
            ) : (
              groupButton
            )}
            {!collapsed && (
              <Collapse in={open[it.label]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {renderNavItems(it.items, level + 1)}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      } else {
        const leafButton = (
          <ListItemButton
            key={it.to}
            component={RouterLink}
            to={it.to}
            selected={location.pathname === it.to}
            onClick={() => { if (isMobile) setMobileOpen(false) }}
            sx={{ pl: collapsed ? 1 : level * 2 + 4, ':hover': { background: 'rgba(255,255,255,0.04)' } }}
          >
            {it.countryCode && (
              <ListItemIcon>
                <ReactCountryFlag countryCode={it.countryCode} svg style={{ width: '1.5em', height: '1.5em' }} />
              </ListItemIcon>
            )}
            <ListItemText primary={it.label} sx={{ display: collapsed ? 'none' : 'block' }} />
          </ListItemButton>
        );
        return collapsed ? (
          <Tooltip key={it.to} title={it.label} placement="right">{leafButton}</Tooltip>
        ) : leafButton;
      }
    });
  };

  return (
    isMobile ? (
      <>
        <Box sx={{ position: 'fixed', top: 12, left: 12, zIndex: 4, display: { xs: 'block', md: 'none' } }}>
          <IconButton aria-label="open menu" onClick={() => setMobileOpen(true)} sx={{ color: 'primary.main', border: '1px solid rgba(14,165,233,0.35)', borderRadius: 2 }}>
            <MenuRoundedIcon />
          </IconButton>
        </Box>
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          PaperProps={{ sx: {
            width: 280,
            background: 'linear-gradient(180deg, rgba(6,22,38,0.95) 0%, rgba(8,31,49,0.95) 100%)',
            borderRight: '1px solid rgba(14,165,233,0.35)',
            backdropFilter: 'blur(10px)'
          } }}
        >
          <Box sx={{ px: 2, py: 3, textAlign: 'center' }}>
            {!logoFailed && (
              <Box component="img" src={logo} alt="Future Vision" onError={() => setLogoFailed(true)} sx={{ width: 112, mx: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(14,165,233,0.28))', opacity: 1 }} />
            )}
            <Box sx={{ mt: 1, fontWeight: 800, color: 'primary.main' }}>Future Vision</Box>
            <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 1 }}>
              <IconButton size="small" onClick={() => setMobileOpen(false)} sx={{ color: 'primary.main', border: '1px solid rgba(14,165,233,0.35)', borderRadius: 2 }}>
                <CloseRoundedIcon />
              </IconButton>
            </Box>
          </Box>
          <Popover
            open={!!menuAnchor}
            anchorEl={menuAnchor}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
            transformOrigin={{ vertical: 'center', horizontal: 'left' }}
            PaperProps={{ sx: { background: 'rgba(7,21,33,0.95)', border: '1px solid rgba(14,165,233,0.35)' } }}
          >
            <List sx={{ minWidth: 220 }}>
              <ListItem sx={{ py: 1.5 }}>
                <ListItemText primary={menuTitle} sx={{ color: 'text.primary' }} />
              </ListItem>
              <Divider />
              {menuItems.map((it) => (
                <ListItemButton key={it.to} component={RouterLink} to={it.to} onClick={handleCloseMenu} sx={{ ':hover': { background: 'rgba(255,255,255,0.04)' } }}>
                  {it.countryCode && (
                    <ListItemIcon>
                      <ReactCountryFlag countryCode={it.countryCode} svg style={{ width: '1.5em', height: '1.5em' }} />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={it.label} />
                </ListItemButton>
              ))}
            </List>
          </Popover>
          <Divider />
          <List>
            {renderNavItems(items, 0)}
          </List>
        </Drawer>
      </>
    ) : (
      <Box sx={{
        width: 'var(--sidenav-width, 240px)',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(6,22,38,0.85) 0%, rgba(8,31,49,0.85) 100%)',
        borderRight: '1px solid rgba(14,165,233,0.25)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 30px rgba(14,165,233,0.15)',
        zIndex: 2,
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': { width: 8 },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(14,165,233,0.35)', borderRadius: 8, border: '2px solid transparent', backgroundClip: 'content-box' }
      }}>
        <Box sx={{ px: 2, py: 3, textAlign: 'center' }}>
          {!logoFailed && (
            <Box component="img" src={logo} alt="Future Vision" onError={() => setLogoFailed(true)} sx={{ width: collapsed ? 64 : 148, mx: 'auto', display: 'block', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(14,165,233,0.28))', opacity: 1 }} />
          )}
          {!collapsed && <Box sx={{ mt: 1, fontWeight: 800, color: 'primary.main' }}>Future Vision</Box>}
          <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
            <Tooltip title={collapsed ? 'تكبير' : 'تصغير'}>
              <IconButton size="small" onClick={() => setCollapsed((c) => !c)} sx={{ color: 'primary.main', border: '1px solid rgba(14,165,233,0.35)', borderRadius: 2 }}>
                {collapsed ? <ChevronRightRoundedIcon /> : <ChevronLeftRoundedIcon />}
              </IconButton>
            </Tooltip>
        </Box>
        </Box>
        <Popover
          open={!!menuAnchor}
          anchorEl={menuAnchor}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
          transformOrigin={{ vertical: 'center', horizontal: 'left' }}
          PaperProps={{ sx: { background: 'rgba(7,21,33,0.85)', border: '1px solid rgba(14,165,233,0.35)' } }}
        >
          <List sx={{ minWidth: 220 }}>
            <ListItem sx={{ py: 1.5 }}>
              <ListItemText primary={menuTitle} sx={{ color: 'text.primary' }} />
            </ListItem>
            <Divider />
            {menuItems.map((it) => (
              <ListItemButton key={it.to} component={RouterLink} to={it.to} onClick={handleCloseMenu} sx={{ ':hover': { background: 'rgba(255,255,255,0.04)' } }}>
                {it.countryCode && (
                  <ListItemIcon>
                    <ReactCountryFlag countryCode={it.countryCode} svg style={{ width: '1.5em', height: '1.5em' }} />
                  </ListItemIcon>
                )}
                <ListItemText primary={it.label} />
              </ListItemButton>
            ))}
          </List>
        </Popover>
        <Divider />
        <List>
          {renderNavItems(items, 0)}
        </List>
      </Box>
    )
  )
}
