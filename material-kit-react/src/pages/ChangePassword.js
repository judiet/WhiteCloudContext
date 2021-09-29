/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
// Amplify
import { AmplifyAuthenticator, AmplifyRequireNewPassword } from '@aws-amplify/ui-react';
import { Auth, Amplify } from 'aws-amplify';
import { Box, styled } from '@mui/system';
import { Container } from '@mui/material';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Page from '../components/Page';
import { MotionContainer } from '../components/animate';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

const ChangePassword = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  useEffect(
    () =>
      onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData);
        console.log(authData);
      }),
    []
  );

  return (
    <RootStyle title="Passwört ändern | Unnear">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <AmplifyAuthenticator>
              <AmplifyRequireNewPassword
                user={user}
                headerText="My Custom Require New Password Text"
              />
            </AmplifyAuthenticator>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
};

export default ChangePassword;
