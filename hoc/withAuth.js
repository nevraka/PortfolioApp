import { useGetUser } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';

export default (WrappedComponent, role) => (props) => {
  const { data: { user } = {}, loading, error } = useGetUser({
    fetchPolicy: 'network-only',
  });

  if (!loading && (!user || error) && typeof window !== 'undefined') {
    console.log('case 1', user, error);
    return <Redirect to="/login" />;
  }

  if (user) {
    if (role && user.role !== role) {
      console.log('case 2', user);
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  }

  return <p>Authenticating...</p>;
};
