import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyButton() {
  return (
      <button>Soy un botón</button>
  );
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Dayana',
    lastName: 'Carolina'
};

/*const element = (
    <h1>
        Hello, {formatName(user)}!  </h1>
);*/

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;  }
    return <h1>Hello, Stranger.</h1>
}

export default function MyApp() {
    return (
        <div>
            <h1>Bienvenido a mi aplicación {formatName(user)}! </h1>
            <h1>Hey {getGreeting(user)} </h1>
            <MyButton/>
        </div>
    );
};

//export default App;
