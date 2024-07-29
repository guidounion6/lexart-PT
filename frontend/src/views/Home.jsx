import { useLocation } from 'react-router-dom';
import EditProduct from "../components/EditProduct";
import NewProduct from "../components/NewProduct";
import ProductsList from "../components/ProductsList";
import useFetchProducts from '../hooks/useFetchProducts';
import { useEffect } from 'react';

const Home = () => {
  const location = useLocation();
  const { products } = useFetchProducts();

  const renderContent = () => {
    switch (location.pathname) {
      case '/new':
        return <NewProduct />;
      case '/edit':
        return <EditProduct />;
      default:
        return <ProductsList />;
    }
  };

  useEffect(() => {
   
  }, [products])
  

  return (
    <div className="w-full p-5 flex justify-center">
      {renderContent()}
    </div>
  );
};

export default Home;

