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
