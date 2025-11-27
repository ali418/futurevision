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
import { Link as RouterLink, useLocation } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

export default function SideNav() {
  const [open, setOpen] = useState({});
  const handleClick = (label) => {
    setOpen((prevOpen) => ({ ...prevOpen, [label]: !prevOpen[label] }));
  };
  const location = useLocation()
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
            {
              label: 'إقامة السعودية',
              icon: <ReactCountryFlag countryCode="SA" svg style={{ width: '1.5em', height: '1.5em' }} />,
              items: [
                { to: '/procedures/saudi-residency/sudan', label: 'جهة القدوم السودان', countryCode: 'SD' },
                { to: '/procedures/saudi-residency/uganda', label: 'جهة القدوم يوغندا', countryCode: 'UG' },
                { to: '/procedures/saudi-residency/uae', label: 'جهة القدوم الإمارات', countryCode: 'AE' },
              ]
            },
            { to: '/procedures/saudi-family-visit', label: 'زيارة عائلية السعودية' },
            { to: '/procedures/saudi-recruitment', label: 'استقدام لي السعودية' },
          ],
        },
        {
          label: 'خدمات سياحية',
          items: [
            { to: '/tourism/uganda', label: 'أوغندا' },
            { to: '/tourism/saudi', label: 'السعودية' },
            { to: '/tourism/uae', label: 'الإمارات' },
            { to: '/tourism/egypt', label: 'مصر' },
            { to: '/tourism/malaysia', label: 'ماليزيا' },
          ],
        },
      ],
    },
    { to: '/jobs', label: 'الوظائف', icon: <WorkOutlineRoundedIcon /> },
    { to: '/about', label: 'من نحن', icon: <InfoOutlinedIcon /> },
    { to: '/vision', label: 'رؤيتنا', icon: <AutoAwesomeRoundedIcon /> },
  ];

  const renderNavItems = (items, level) => {
    return items.map((it) => {
      if (it.items) {
        return (
          <React.Fragment key={it.label}>
            <ListItemButton
              onClick={() => handleClick(it.label)}
              sx={{
                pl: level * 2,
                transition: 'all .2s',
                ':hover': {
                  boxShadow: '0 0 14px rgba(141,112,255,0.35)',
                  background: 'rgba(255,255,255,0.04)'
                }
              }}
            >
              <ListItemIcon sx={{ color: 'text.secondary' }}>{it.icon}</ListItemIcon>
              <ListItemText primary={it.label} />
              {open[it.label] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[it.label]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderNavItems(it.items, level + 1)}
              </List>
            </Collapse>
          </React.Fragment>
        );
      } else {
        return (
          <ListItemButton
            key={it.to}
            component={RouterLink}
            to={it.to}
            selected={location.pathname === it.to}
            sx={{ pl: level * 2 + 4, ':hover': { background: 'rgba(255,255,255,0.04)' } }}
          >
            {it.countryCode && (
              <ListItemIcon>
                <ReactCountryFlag countryCode={it.countryCode} svg style={{ width: '1.5em', height: '1.5em' }} />
              </ListItemIcon>
            )}
            <ListItemText primary={it.label} />
          </ListItemButton>
        );
      }
    });
  };

  return (
    <Box sx={{
      width: 220,
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      background: 'rgba(17,24,42,0.4)',
      borderRight: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 30px rgba(46,124,194,0.25)',
      zIndex: 2
    }}>
      <Box sx={{ px: 2, py: 3, textAlign: 'center' }}>
        <Box component="img" src="/logo.jpg" sx={{ width: 120, mx: 'auto', display: 'block', borderRadius: 2, boxShadow: '0 0 20px rgba(212,175,55,0.35)' }} />
        <Box sx={{ mt: 1, fontWeight: 700, color: 'primary.main' }}>Future Vision</Box>
      </Box>
      <Divider />
      <List>
        {renderNavItems(items, 0)}
      </List>
    </Box>
  )
}
