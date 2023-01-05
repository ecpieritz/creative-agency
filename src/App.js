import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './scss/main.scss'
import Services from './components/Services';
import Documentation from './components/Documentation';
import Satisfaction from './components/Satisfaction';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Services />
        <Documentation />
        <Satisfaction />
      </main>
    </>
  );
}

export default App;
