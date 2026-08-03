'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/components/layout/sidebar';
import { Box, CircularProgress } from '@mui/material';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/auth/login');
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) {
    return (
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: '97.5vh',
        maxHeight: 'calc(100vh - 4px)',
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#fff',
        display: 'flex',
        boxSizing: 'border-box',
        gap: '6px',
      }}
    >
      <Box
        sx={{
          width: '68px',
          background: 'linear-gradient(190deg, #601b9f 0%, #043238ff 70%, teal 90%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            flexGrow: 1,
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#efeeff',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
