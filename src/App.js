import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { Provider } from 'react-redux';
import store from './store';

// Mala practica nombrar carpetas con mayusculas, se trabaja todo minuscula
// Coloca nombre significativo a las cosas, no a todo le pongas index
// Solo archivos de componentes se nombran con mayusculas

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor />
        <Preview />
      </div>
    </Provider>
  );
}

export default App;
