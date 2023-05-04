
import styles from "./Profile.module.css"
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.username}>@{tag}</p>
        <p className={styles.username}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile