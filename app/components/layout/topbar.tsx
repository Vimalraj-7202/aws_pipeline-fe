'use client';
import { Box, Typography, Avatar } from '@mui/material';
import { usePathname } from 'next/navigation';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const getPageName = (path: string): string => {
  if (path === '/') return 'Home';
  return path.split('/').filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' / ');
};

const Topbar = () => {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3,
        mt: '2px',
        bgcolor: 'white',
        borderRadius: '8px',
      }}
    >
      <Typography sx={{ fontWeight: 'bold' }}>{getPageName(pathname)}</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <NotificationsActiveOutlinedIcon sx={{ color: 'gray', fontSize: '30px' }} />
        <Avatar src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60" />
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
          <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>Guest User</Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'gray' }}>Employee</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
