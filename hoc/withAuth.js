import { useGetUser } from '@/apollo/actions';
import Redirect from '@/components/shared/Redirect';

export default (WrappedComponent) => (props) => {
  const { data: { user } = {}, loading, error } = useGetUser({
    fetchPolicy: 'network-only',
  });

  if (!loading && (!user || error) && typeof window !== 'undefined') {
    return <Redirect to="/login" />;
  }

  if (user) {
    return <WrappedComponent {...props} />;
  }

  return <p>Authenticating...</p>;
};
