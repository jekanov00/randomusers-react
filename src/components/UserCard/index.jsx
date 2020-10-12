import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.scss';

function UserCard(props) {
  const {
    name: { title, first, last },
    picture: { large },
    email,
  } = props;

  let personName = `${title ?? ''} ${first ?? ''} ${last ?? ''}`;

  return (
    <div className={styles.userCard}>
      <div className={styles.imageWrapper}>
        <img className={styles.cardImage} src={large} alt={personName} />
      </div>
      <h3 className={styles.cardName}>{personName}</h3>
      <p className={styles.cardEmail}>{email}</p>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.object.isRequired,
  gender: PropTypes.oneOf(['male', 'female', null]),
  name: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default UserCard;
