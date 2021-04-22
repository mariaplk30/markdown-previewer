import './App.css';
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import { Provider } from 'react-redux';
import store from './store';

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
