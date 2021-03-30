import styles from '../styles/value.module.css'

export default function Value({ title, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.index}>1</div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
