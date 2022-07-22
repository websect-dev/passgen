import { FC } from 'react';
import styles from './App.module.scss';

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <h1>Password generator</h1>
    </div>
  );
};

export default App;
