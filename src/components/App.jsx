import '../styles/App.css'

function App() {

  return (
    <div className='App'>
      <header className='header__container'>
        <h1 className='header__tittle'>TODO</h1>
        <button
          className='header__change-theme'
        >
          <img
            src='src\images\icon-sun.svg'
            alt='sun icon'
          />
        </button>
      </header>

      <body className='todo__container'>
        <section className='todo__input'>
          <label 
            htmlFor="newTask" 
            className="todo__input-label"
          >uwu</label>
          <input type="text" id="newTask" />
        </section>

        <section className="todo__list"></section>
        <section className="todo__panel"></section>
      </body>


    </div>
  )
}

export default App
