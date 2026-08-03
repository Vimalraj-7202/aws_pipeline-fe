'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    // TODO: replace with real API call
    localStorage.setItem('token', 'demo-token');
    router.push('/dashboard');
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#efeeff' }}>
      <Paper elevation={4} sx={{ p: 4, width: 360, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={700} mb={3} textAlign="center" color="#0f0d8b">
          Sign In
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <Typography color="error" fontSize="0.8rem" mt={1}>{error}</Typography>}

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, py: 1.2, bgcolor: '#601b9f', '&:hover': { bgcolor: '#4a1278' } }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
