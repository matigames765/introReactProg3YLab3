import { FC } from "react"

interface IProspsMiPrimerComponent{
    text: string,
    color: string,
    fontSize?: number
}

export const MiPrimerComponent: FC<IProspsMiPrimerComponent> = ({text, color, fontSize}) => {
  return (
    <div style ={{color:`${color}`, fontSize: `${fontSize}rem`}}><p>{text}</p></div>
  )
}
