import './App.css';
import Comments from './componets/Comments';
import FirstContent from './componets/FirstContent';
import Header from './componets/Header';
import SecondContent from './componets/SecondContent';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstContent />
      <SecondContent />
      <Comments />
    </div>
  );
}

export default App;
