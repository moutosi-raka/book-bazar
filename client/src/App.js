import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router/Router';
import  { Toaster } from 'react-hot-toast';
import ReportModal from './pages/Category/ReportModal/ReportModal';
import BookingModel from './pages/Category/BookingModel/BookingModel';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider/AuthProvider';

function App() {
  const {setBookProduct,bookProduct,setReportProduct,reportProduct} = useContext(AuthContext)
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
        {reportProduct && <ReportModal
         reportProduct={reportProduct}
         setReportProduct={setReportProduct}
        ></ReportModal>}
           { bookProduct 
        && <BookingModel 
        bookProduct={bookProduct}
        setBookProduct={setBookProduct}
        ></BookingModel>}
       
    </div>
  );
}

export default App;
