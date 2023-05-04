import styles from "./friendlistitem.module.css"
function Friendlistitem({isOnline, avatar, name}){
    return(
        <li className={styles.item}>
            <span className={isOnline ? styles.online: styles.notonline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}
export default Friendlistitem