import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import Spinner from './Components/Spinner';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<Spinner />}>{element}</Suspense>;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
