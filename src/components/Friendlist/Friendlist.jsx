import Friendlistitem from "../Friendlistitem/Friendlistitem";
import styles from "./Friendlist.module.css"
function Friendlist({friends_f}) {
  return (
    <ul className={styles.friend_list}>
      {friends_f.map(li=>(
        <Friendlistitem
        isOnline={li.isOnline}
        avatar={li.avatar}
        name={li.name}
        />
      ))}
    </ul>
  )
}
export default Friendlist;
