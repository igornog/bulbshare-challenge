import Box from '@mui/material/Box/Box';
import styled from 'styled-components';

export const StyledImage = styled.img<{
  bannerImage?: string;
}>`
  width: 100%;
  height: 500px;
  background-image: url(${({ bannerImage }) => bannerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 4px 4px;

  position: relative;
  top: 4px;
`;

export const BannerBackground = styled.div<{
  isMobile?: boolean;
}>`
  background-color: #ffffff;
  padding: ${({ isMobile }) => (isMobile ? '5px' : '20px')};
  z-index: 1;
  position: absolute;
  bottom: 5%;
  left: 0;
`;

export const StyledBox = styled(Box)`
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: transform 0.2s ease-in-out;
  }
`;
