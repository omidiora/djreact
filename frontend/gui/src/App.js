import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from './components/containers/Layout';
import ArticleListView from './components/containers/ArticleListView';
import {BrowserRouter as Router ,Switch} from 'react-router-dom';
import BaseRouter from './routes';


function App() {
  return (
    <div className="App">
<Router>

     <CustomLayout>
        <BaseRouter/>
      </CustomLayout>


      </Router>
       </div>
  );
}

export default App;
