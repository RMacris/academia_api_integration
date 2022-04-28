import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {AppLayout} from './pages/app-page/AppLayout.jsx'

import { LoginProvider } from './Contexts/LoginContext';
function App() {

  return (
    <LoginProvider>
          <AppLayout></AppLayout>
    </LoginProvider>
  );
}

export default App;
