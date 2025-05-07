import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layouts/mainLayout';
import HomePage from '@/pages/Home';
import HotelsListPage from '@/pages/HotelsList';
import HotelDetailsPage from '@/pages/HotelDetails';
import AboutPage from '@/pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'hotels', element: <HotelsListPage /> },
      { path: 'hotels/:id', element: <HotelDetailsPage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
]);
