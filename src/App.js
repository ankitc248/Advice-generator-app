import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient;

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title data-rh="true">Advice Generator</title>
        </Helmet>
      </HelmetProvider>
      <div className="App">
        <main>
          <QueryClientProvider client={queryClient}>
            <Advice />
          </QueryClientProvider>
          <div className='divider'></div>
          <button type='button' onClick={getAdvice}><img src={'/images/icon-dice.svg'} width='25' alt='dice-icon' /></button>
        </main>
      </div>
    </>
  );
}

function getAdvice() {
  const diceButton = document.getElementsByTagName('button')[0];
  diceButton.classList.add('rotate-dice');
  setTimeout(function () { diceButton.classList.remove('rotate-dice') }, 1000);
}

function Advice() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.adviceslip.com/advice').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <p className='advice-id'>Advice #{data.slip.id}</p>
      <p className='advice-body'>&#8220;{data.slip.advice}&#8221;</p>
    </>
  )
}