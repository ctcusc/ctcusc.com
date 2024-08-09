import yearStyles from '../styles/year.module.css'

type YearProps = {
  fall: number
  spring: number
  selected: boolean
  setSelected: () => void
}

const Year: React.FC<YearProps> = ({ fall, spring, selected, setSelected }) => {
  return (
    <button
      className={selected ? yearStyles.selectedCard : yearStyles.card}
      onClick={setSelected}
    >
      <div className={selected ? yearStyles.selectedFall : yearStyles.fall}>
        {fall}
      </div>
      <div className={selected ? yearStyles.selectedSpring : yearStyles.spring}>
        {spring}
      </div>
    </button>
  )
}

export default Year
