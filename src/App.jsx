import logo from './logo.svg';
import './App.css';
import Contacto from './components/contact';

function App() {
  const userList = [
    { name: 'Pepe', estado: 'Soltero', image: 'http://placekitten.com/200/300?ts=1' },
    { name: 'Maria', estado: 'Hola', image: 'http://placekitten.com/200/300?ts=2' },
    { name: 'Paco', estado: 'Feliz', image: 'http://placekitten.com/200/300?ts=3' },
    { name: 'Irene', estado: 'Cansada', image: 'http://placekitten.com/200/300?ts=4' },
    { name: 'Jessie', estado: 'Casada', image: 'http://placekitten.com/200/300?ts=5' },
  ];

  return (
    <div className="App">
      {userList.map((user) => <Contacto name={ user.name } image={ user.image } estado={ user.estado }></Contacto>)}
    </div>
  )
  
}

export default App;
