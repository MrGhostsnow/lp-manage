import './App.css';
import Banner from './componets/Banner';
import Comments from './componets/Comments';
import FirstContent from './componets/FirstContent';
import Footer from './componets/Footer';
import Header from './componets/Header';
import SecondContent from './componets/SecondContent';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstContent />
      <SecondContent />
      <Comments />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
