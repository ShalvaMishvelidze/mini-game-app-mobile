import { Provider } from 'react-redux';
import Page from './app';
import { store } from './store';

export default App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};
