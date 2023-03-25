import { useRouter } from 'next/router';

import MainContainer from '../../components/MainContainer';
import styles from '../../style/user.module.scss';

const User = ({ user }) => {
  const { query } = useRouter();

  console.log('users', user.address);

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
        <div>
          <b>{user.name}</b>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          {/* <p>{user.website.address}</p> */}
        </div>
      </div>
    </MainContainer>
  );
};

export default User;

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
