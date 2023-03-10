import './scss/main.scss'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Documentation from './components/Documentation';
import Satisfaction from './components/Satisfaction';
import WorkingSpace from './components/WorkingSpace';
import Customers from './components/Customers';
import Quotes from './components/Quotes';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

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
        <Customers />
        <Quotes />
        <Faq />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
