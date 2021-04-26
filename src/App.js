import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Editor />
        <div className="card">
          <Preview />
        </div>
      </div>
    </Provider>
  );
}

export default App;
