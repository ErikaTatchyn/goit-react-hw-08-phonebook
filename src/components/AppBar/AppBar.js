import css from './AppBar.module.css';
import { useSelector } from 'react-redux';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
