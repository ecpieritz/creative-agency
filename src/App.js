import './scss/main.scss'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Documentation from './components/Documentation';
import Satisfaction from './components/Satisfaction';
import WorkingSpace from './components/WorkingSpace';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <main>
        <Services />
        <Documentation />
        <Satisfaction />
        <WorkingSpace />
      </main>
    </>
  );
}

export default App;
