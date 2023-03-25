import Link from 'next/link';

import styles from '../style/header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Header;
