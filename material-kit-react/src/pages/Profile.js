import React, { useState } from 'react';
// material
import { Box, Card, Container, Stack, Typography, CardHeader, Button } from '@mui/material';
// components
import { Navigate, useNavigate } from 'react-router';
import Page from '../components/Page';

export default function Profile() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState('judiet');
  const [email, setEmail] = useState('julian.dietsche@htwg-konstanz.de');

  return (
    <Page title="Dashboard: Profile | Unear">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Profil von {username}
          </Typography>
        </Stack>
        <Card>
          <CardHeader title="Your account credentials" />
          <Box sx={{ px: 3, py: 1 }}>
            <Typography variant="h7" gutterBottom>
              Benutzername:
            </Typography>
          </Box>
          <Box sx={{ px: 3, py: 1 }}>{username}</Box>
          <Box sx={{ px: 3, py: 1 }}>
            <Typography variant="h7" gutterBottom>
              E-Mail-Adresse:
            </Typography>
          </Box>
          <Box sx={{ px: 3, py: 1 }}>{email}</Box>
          <Button
            sx={{ px: 3, py: 1 }}
            onClick={() => {
              navigate('/change', { replace: true });
            }}
          >
            Password ändern
          </Button>
        </Card>
      </Container>
    </Page>
  );
}
