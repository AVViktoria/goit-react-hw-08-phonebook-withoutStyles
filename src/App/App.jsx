import '../index.scss';
//*      Components      //
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Section from 'components/Section/Section';


// import { useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Switch } from 'react-router-dom';
// import AppBar from './components/AppBar';
// import Container from './components/Container';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';
// import { authOperations, authSelectors } from './redux/auth';

// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterView = lazy(() => import('./views/RegisterView'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const TodosView = lazy(() => import('./views/TodosView'));
// const UploadView = lazy(() => import('./views/UploadView'));

//*      Root      //
export default function App() {
 
  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <ContactForm  />
        </Container>
        <Container>
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList
          />
        </Container>
      </Section>
    </>
  );
}
