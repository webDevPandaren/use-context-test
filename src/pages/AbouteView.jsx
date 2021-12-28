import { Header } from './HeaderView';
import styled from 'styled-components';

const Title = styled.h2`
  letter-spacing: 3px;
  color: #03032e;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  margin-top: 200px;
`;

const MainContainer = styled.div`
  background: linear-gradient(to right, #8360c3, #2ebf91);
  height: 100vw;
`;

export function About() {
  return (
    <MainContainer>
      <Header />
      <Title>About page</Title>
    </MainContainer>
  );
}
