import styled from 'styled-components';

const StyledLink = styled.a`
  color: #3e3f3d;
  text-decoration: none;
  line-height: inherit;
  border-bottom: 1px solid #787a76;
  transition: all .05s ease-in-out;

  &:hover {
    border-bottom-color: #fff;
    color: #787a76;
  }
`;

export default StyledLink;

