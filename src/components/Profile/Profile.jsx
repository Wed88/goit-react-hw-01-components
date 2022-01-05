import PropTypes from 'prop-types';
import {
  Card,
  Username,
  Tag,
  Location,
  BoardStats,
  StatList,
  StatTitle,
  StatDesk,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <div>
        <img src={avatar} alt="User avatar" width="250" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <BoardStats>
        <StatList>
          <StatTitle>Followers</StatTitle>
          <StatDesk>{stats.followers}</StatDesk>
        </StatList>
        <StatList>
          <StatTitle>Views</StatTitle>
          <StatDesk>{stats.views}</StatDesk>
        </StatList>
        <StatList>
          <StatTitle>Likes</StatTitle>
          <StatDesk>{stats.likes}</StatDesk>
        </StatList>
      </BoardStats>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
