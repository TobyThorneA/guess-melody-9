import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { Provider } from 'react-redux';
import { fetchQuestRoomsAction } from 'store/api-actions';
import { store } from 'store';

store.dispatch(fetchQuestRoomsAction())



render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);
