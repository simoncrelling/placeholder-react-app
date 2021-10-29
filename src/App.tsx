import './App.scss';
import { PostList } from './posts/components/PostList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <PostList />
      </header>
    </div>
  );
}

export default App;
