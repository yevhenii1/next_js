import Link from 'next/link';

import styles from '../style/404.module.scss';

export default function Error() {
  return (
    <div className={styles.error}>
      <b>404</b>
      <p>Not found</p>
      <Link href="/">Home</Link>
    </div>
  );
}
