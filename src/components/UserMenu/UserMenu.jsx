import defaultAvatar from './default-avatar.png';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  margin-right: 4px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Name = styled.span`
  font-weight: 700;
  margin-right: 30px;
  margin-left: 20px;
  color: #ffffff;
`;

const LogOff = styled.button`
  border: none;
  cursor: pointer;
  background-color: #189ac9;
  padding: 10px 20px;
  border-radius: 5px;
`;

const UserMenu = () => {
  const avatar = defaultAvatar;

  const { onLogOut } = useContext(AuthContext);

  return (
    <Container>
      <Avatar src={avatar} alt="" width="32" />
      <Name>Welcome</Name>
      <LogOff
        type="button"
        onClick={() => {
          onLogOut();
        }}
      >
        Log off
      </LogOff>
    </Container>
  );
};

export default UserMenu;
