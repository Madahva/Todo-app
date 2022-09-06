import '../styles/App.css'
import Header from './Header.jsx';
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import TodoFilter from './TodoFilter.jsx';

function App() {

  return (
    <div className='App'>
      <BackgroundImage />
      <Header />
      <main className='todo'>
        <TodoInput />
        <TodoList />
        <TodoFilter />
      </main>
    </div>
  )
}

export default App;
