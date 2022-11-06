// REACT
import React, { Suspense } from 'react';
// ROUTING
import { Route, useLocation, Routes } from 'react-router-dom';
// REDUX
import { connect, ConnectedProps } from 'react-redux'
// LAYOUT
import Layout from './hoc/Layout/Layout';
import withRouter from './hoc/withRouter/withRouter';
// ANIMATION
import { AnimatePresence, motion } from 'framer-motion';
// COMPONENTS
import Home from './containers/Home/Home';
// LAZY LOADING
// MODELS
import Nav_routes_model from './models/Nav_routes_model';

// ROUTES
const publicRoutes = [
  { path: '/', name: 'Naslovnica', Component: Home },
  { path: '/kalkulator-kalorija', name: 'Kalkulator', Component: Home },
  { path: '/kalorijska-tablica', name: 'Tablica', Component: Home },
  { path: '/recepti', name: 'Recepti', Component: Home },
  { path: '/contact', name: 'Kontakt', Component: Home },
  { path: '/profile', name: 'Prijava', Component: Home },
  { path: '/associates', name: 'Suradnici', Component: Home },
  { path: '/terms', name: 'Terms of use', Component: Home },
  { path: '/cookies', name: 'Cookies usage', Component: Home },
  { path: '/privacy', name: 'Privacy policy', Component: Home },
];

const userRoutes = [
  ...publicRoutes,
  { path: '/moji-recepti', name: 'Moji recepti', Component: Home },
];

//
interface RootState {
  auth: {
    user: string | null;
  };
};

// connect redux state
const mapStateToProps = (state: RootState) => {
  return {
    user: state.auth.user,
  };
};

// connect redux functions
const mapDispatch = {
  logout: () => ({ type: 'LOG_OUT' }),
};

// connect redux state and functions
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { };

// init aplication
const App = (props: Props) => {

  // destruct props
  const { user } = props;

  // hook for current route location
  const location = useLocation();

  // animation for changing pages
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  // creating pages
  let pages = publicRoutes.map(({ path, Component }, k) => (
    <Route key={path + k} path={path} element={
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <Component />
      </motion.div>
    } />
  ));

  // routes for nav element
  let navRoutes = publicRoutes.map(route => {
    return new Nav_routes_model(route.path, route.name);
  }).filter(route => route.path !== '*' && route.path !== '/');

  // filter routes for user
  if (user) {
    pages = userRoutes.map(({ path, Component }, k) => (
      <Route key={path + k} path={path} element={
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <Component />
        </motion.div>
      } />
    ));

    navRoutes = userRoutes.map(route => {
      return new Nav_routes_model(route.path, route.name);
    }).filter(route => route.path !== '/profile' && route.path !== '/terms' && route.path !== '/cookies' && route.path !== '/privacy' && route.path !== '/associates');
  };

  // return application
  return (
    <React.Fragment>
      <Suspense fallback={<p>Loading...</p>}>
        <Layout routes={navRoutes}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              {pages}
            </Routes>
          </AnimatePresence>
        </Layout>
      </Suspense>
    </React.Fragment>
  );
};


export default withRouter(connector(App));
