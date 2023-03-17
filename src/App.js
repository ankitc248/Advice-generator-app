import { useQuery } from 'react-query';
import './App.css';


export default function App() {
  document.title = 'Advice Generator';
  return (
    <>
      <div className="App">
        <main>
            <Advice />
          <div className='divider'></div>
          <button type='button' onClick={getAdvice}><img src={'/images/icon-dice.svg'} width='25' alt='dice-icon' /></button>
        </main>
      </div>
    </>
  );
}

