import styled from 'styled-components';
import img from '../../media/lighting.jpg';

export const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  /* background-size: cover; */
  backdrop-filter: blur(8.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const DataGridWrapper = styled.div`
display: flex;
  align-items: center;
  /* flex-direction: column; */
  height: 80vh;
  width: 60vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;
