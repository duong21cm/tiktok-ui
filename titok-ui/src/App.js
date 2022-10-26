//import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router';
import DefaultLayout from './components/Layout/Defaultlayout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((page, index) => {
            const Layout = page.layout || DefaultLayout;
            const Page = page.component;
            return (
              <Route
                key={index}
                path={page.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
