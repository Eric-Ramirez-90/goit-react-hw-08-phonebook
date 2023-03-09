import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operation';
// Libraries
import 'react-toastify/dist/ReactToastify.css';
// Components
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { SharedLayout } from '../SharedLayout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SharedLayout>
      <ContactForm />
      <Filter />
      <ContactList />
    </SharedLayout>
  );
}

export default App;
