import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import UserMenu from '../components/UserMenu/UserMenu';
import Navigation from '../components/Navigation';
import AuthNav from '../components/AuthNav';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  justify-content: center;
  border-bottom: 1px solid #e2e3e5;
  background: linear-gradient(to right, #000428, #004e92);
  padding: 0px 15px;
`;

const HeaderContent = styled.div`
  width: 1240px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  letter-spacing: 5px;
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`;

export const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <Navigation />
        <Title></Title>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContent>
    </HeaderContainer>
  );
};
