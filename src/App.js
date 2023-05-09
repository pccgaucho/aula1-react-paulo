import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title'
import { Card } from './components/Card';
import { Separator } from './components/Separator';
import { Counter } from './components/Counter';
import { Button } from './components/Button';

function App() {

  const handleClick = () => {
    console.log('Clicou no botão')
  }

  return (
    <>
      <Separator text='Componente de Título'/>
      <Title name='fernando' surname='oliveira' />

      <Separator text='Componente de Card'/>
      <Card name='Eduardo' surname='Franzen' description='Aluno de React JS'/>

      <Separator text='Eventos'/>
      <button onClick={handleClick}>Click-me</button>

      <Separator text='Hooks - useState'/>
      <Counter />

      <Separator text='Componente de Button'/>
      <div className='buttonContainer'>
        <Button text='Criar usuário' />
        <Button text='Criar produto' variant='secundary' />
        <Button text='Criar carrinho' />
      </div>
    </>
  );
}

export default App;
