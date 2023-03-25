import React from 'react';
import Link from 'next/link';

import MainContainer from '../components/MainContainer';
import styles from '../style/users.module.scss';

const Users = ({ users }) => {
  return (
    <MainContainer>
      <div className={styles.users}>
        <h1>Upers page</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
                <div>
                  <b>{user.name}</b>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.website}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
