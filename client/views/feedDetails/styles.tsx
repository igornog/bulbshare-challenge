import styled from 'styled-components';
import CloseButton from '../../assets/close-dialog.svg';

export const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export const StyledButton = styled.div`
  background-image: url(${CloseButton});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: none;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.2s ease-in-out;
  }
`;

export const StyledAside = styled.aside`
  background-color: #f6f6f6;
  position: fixed;
  padding: 30px 0;
  height: 100%;
  width: 500px;
  right: 0;
`;
