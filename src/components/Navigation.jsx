import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  &.active {
    color: red;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home page</Link>
      {isLoggedIn && (
        <>
          <Link to="/about">About page</Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;
