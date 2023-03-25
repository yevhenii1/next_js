import { useRouter } from 'next/router';

import MainContainer from '../../components/MainContainer';

const User = ({ user }) => {
  const { query } = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <h4>user id = {query.id}</h4>
      <b>name - {user.name}</b>
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
