import React, { useState } from 'react';
import "./index.css"
import Layout from './component/presentation/Layout';
import { Provider } from 'react-redux';
import { store } from './ReduxStore/CardObjectStore';

function App() {
  const [state, setState] = useState(0)
  return (
    <>
    <Provider store={store}>
       <Layout></Layout>
    </Provider>
        
       
    </>
  )
}

export default App;