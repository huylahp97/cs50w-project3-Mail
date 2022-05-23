
import './App.css';
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import GlobalStyles from './components/GlobalStyles';
import Button from './components/Button'

function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <Heading />
        <Paragraph />
        <Button />
        <Button primary />
      </div>
    </GlobalStyles>
  );
}

export default App;
