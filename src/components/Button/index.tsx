import { Container } from './styles';

interface ButtonProps {
  icon: Boolean;
  text: String;
}

function Button({ icon, text }: ButtonProps) {
  return <Container>{text}</Container>;
}

export default Button;
