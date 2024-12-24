'use client';

import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Header Menu Bar */}
      <AppBar position="static" color="inherit">
        <Toolbar>
        <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Next JS Practice Website
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" variant="outlined">
              <Link href="/inputs" style={{ textDecoration: 'none', color: 'inherit' }}>
                INPUTS
              </Link>
            </Button>
            <Button color="inherit" variant="outlined">
              <Link href="/data-display" style={{ textDecoration: 'none', color: 'inherit' }}>
                DATA DISPLAY
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dynamic Page Content */}
      <Container sx={{ mt: 4 }}>{children}</Container>
    </div>
  );
}
