import User from './User/User';

const ListUser = ({ listUser }) => {
  return (
    <tbody>
      {listUser.map((user, index) => (
        <User key={user._id} user={user} order={index} />
      ))}
    </tbody>
  );
};
export default ListUser;
