import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import { Galary } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Galary>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Galary>
  );
}

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
