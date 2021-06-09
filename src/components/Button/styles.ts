import styled from 'styled-components';

interface StyleButtonProps {
  disabled?: Boolean;
}

export const Container = styled.button<StyleButtonProps>`
  width: 130px;
  height: 30px;

  background: var(--mostLightestBlue);
  border-radius: 5px;
  color: var(--blue);

  font-weight: 600;

  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: background 0.2s;

  opacity: ${(props) => (props.disabled ? 0.3 : 1)};

  &:hover {
    background: var(--lightestBlue);
    transition: background 0.2s;
  }
`;
