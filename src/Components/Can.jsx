import { useContext } from 'react'
import { AbilityContext } from '../Context/AbilityContext'


const Can = ({children, action, subject}) => {
const ability = useContext(AbilityContext);

  return (
    ability.can(action, subject) &&
    [children]
  )
}

export default Can