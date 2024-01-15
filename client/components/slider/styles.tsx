import styled from 'styled-components';

export const StyledBtnWrapper = styled.div<{
  active: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 10px;

  img {
    width: 25px;
    height: 25px;
    opacity: ${({ active }) => (active ? '.3' : '1')};

    &:first-child {
      transform: rotate(180deg);
      opacity: ${({ active }) => (!active ? '.3' : '1')};
    }
  }
`;

export const StyledArrowBtn = styled.img<{
  active: boolean;
}>`
  ${({ active }) =>
    active &&
    `&: hover {
      cursor: pointer;
      opacity: 0.9;
      transition: opacity 0.2s ease-in-out;
}`}
`;
