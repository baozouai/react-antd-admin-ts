import React, { Suspense } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Spin } from 'antd';
import RenderRoute from '@/components/render-route';
import { routes } from '@/routes';
import Config from '@/config';
function App() {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router basename={Config.BASE_NAME}>
        <RenderRoute routes={routes} />
      </Router>
    </Suspense>

  );
}

export default App;

