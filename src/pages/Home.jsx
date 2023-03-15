import { Helmet } from 'react-helmet';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomePage />
    </>
  );
}
