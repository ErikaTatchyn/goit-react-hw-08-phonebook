import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import css from './UserMenu.module.css';
import { logOut } from 'redux/auth/authOperations';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        variant="contained"
      >
        Logout
      </Button>
    </div>
  );
};
