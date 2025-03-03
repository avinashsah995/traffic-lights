import * as React from 'react';
import { FC } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const drawerWidth = 240;
const navItems = [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/avinashsah995/', type: 'external' },
    { name: 'Github', link: 'https://github.com/avinashsah995', type: 'external' },
    { name: 'Email', link: 'mailto:sahavinash977@gmail.com', type: 'email' },
    { name: 'Resume', link: '/pdf/AVINASH SAH.pdf', type: 'download' }
];

interface HeaderProps {
    window?: () => Window;
}

const Header: FC<HeaderProps> = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleClick = (item: { name: string; link: string; type: string }) => {
        if (typeof window === 'undefined') return;
    
        if (item.type === 'external') {
            window.open(item.link, '_blank');
        } else if (item.type === 'email') {
            window.location.href = item.link;
        } else if (item.type === 'download') {
            const link = document.createElement('a');
            link.href = item.link;
            link.download = 'Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
                <Image src="/images/logo.svg" width={160} height={40} alt="logo" />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item)}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = typeof window !== 'undefined' ? document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'black', color: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Image src="/images/logo.svg" width={160} height={40} alt="logo" />
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.name} sx={{ color: 'white' }} onClick={() => handleClick(item)}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' }, color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default Header
