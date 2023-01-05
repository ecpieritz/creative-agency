import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './scss/main.scss'
import Services from './components/Services';
import Documentation from './components/Documentation';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Services />
        <Documentation />
      </main>
    </>
  );
}

export default App;
