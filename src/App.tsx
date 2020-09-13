import React, { Suspense } from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import { Spin } from 'antd';
import RenderRoute from '@/components/render-route';
import { routes } from '@/routes';

function App() {
  return (
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
      <Router>
          <RenderRoute routes={routes} />
      </Router>
    </Suspense>

  );
}

export default App;

