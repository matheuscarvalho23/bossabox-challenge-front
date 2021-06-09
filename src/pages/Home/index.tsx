import { Container, Header } from './styles';
import Button from '../../components/Button';

function Home() {
  return (
    <Container>
      <h1>VUTTR</h1>
      <h5>Very Useful Tools to Remember</h5>

      <Header>
        <input type='text' />
        <input type='checkbox' />

        <Button icon={true} text='Add' />
      </Header>
    </Container>
  );
}

export default Home;
