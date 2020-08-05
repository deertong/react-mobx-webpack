import Loadable from 'react-loadable';
import Loading from '../components/loading/Loading'

export default function dynamic(compPromise) {
  return Loadable({
    loader: () => {
      return compPromise;
    },
    loading: Loading
  });
}