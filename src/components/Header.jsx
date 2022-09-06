import '../styles/Header.css'

function Header() {
  return (
    <header className='header'>
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
  );
}

export default  Header;