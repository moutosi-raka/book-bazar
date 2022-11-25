import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router/Router';

function App() {
  return (
    <div className="m-8 bg-gray-50 px-5 max-w-[1200px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
