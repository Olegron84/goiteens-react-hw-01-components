import styles from "./Transactionhistory.module.css"
function Transactionhistory({items}){
    return(
        <table className={styles.table} border="1px">
  <thead>
    <tr>
      <th className={styles.td}>Type</th>
      <th className={styles.td}>Amount</th>
      <th className={styles.td}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(data=>(
        <tr>
            <td className={styles.td}>{data.type}</td>
            <td className={styles.td}>{data.amount}</td>
            <td className={styles.td}>{data.currency}</td>
        </tr>
      ))}
  </tbody>
</table>
    )
}
export default Transactionhistory