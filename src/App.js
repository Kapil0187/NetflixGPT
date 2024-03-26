import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Body/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
