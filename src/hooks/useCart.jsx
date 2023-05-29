import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../contextProvider/AuthContext/AuthProvider';


const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [], refetch } = useQuery({
    queryKey: ['orders', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8000/orders?email=${user?.email}`);
      return response.json()
    },
  })

  return [orders, refetch];
};

export default useCart;
