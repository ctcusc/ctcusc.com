import styles from '../styles/value.module.css'

export default function Value({ number, title, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.index}>{number}</div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
