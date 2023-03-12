import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import Layout from 'components/Layout/Layout';
import Filter from 'components/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      <Layout>
        <ContactForm />
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>

        <ContactList />
      </Layout>
    </>
  );
}
