import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState } from 'react'

const ToggleGroup = () => {
  const [alignment, setAlignment] = useState<string | null>('left')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment)
  }

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <div>Left Aligned</div>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <div>Middle Aligned</div>
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <div>Right Aligned</div>
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <div>Justified</div>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleGroup
