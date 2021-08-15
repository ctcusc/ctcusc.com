import styles from '../styles/extlink.module.css'

const ExtLink = (props) => (
  <a
    {...props}
    rel="noopener"
    target={props.target || '_blank'}
    className={styles.link}
  />
)
export default ExtLink
