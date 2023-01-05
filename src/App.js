import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './scss/main.scss'
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Services />
      </main>
    </>
  );
}

export default App;
