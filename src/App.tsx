
import { AppProduct } from "./components/AppProduct"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"



export const App = () => {
    




  return (
    <div style={{display:'flex',flexDirection: 'column', gap: '2vh'}}>
    {/*<MiPrimerComponent text = {"Texto desde propiedades"} color = "red" fontSize={5}></MiPrimerComponent>
    <ComponentCounter></ComponentCounter>
    <ComponentUseEffect></ComponentUseEffect>
    <FormComponent></FormComponent>*/}
    <AppProduct/>
    </div>
  )
}

