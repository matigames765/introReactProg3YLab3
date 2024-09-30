import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import { useForm } from "../../hooks/useForm"
import { FC } from "react"

interface IPropsFormProduct{
    handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({handleAddProduct}) => {
    const {handleChange, values, resetForm} = useForm({
        nombre:'',
        imagen:'',
        precio:0
    }
    )

    const handleSubmitForm = () => {
        handleAddProduct(values);
        resetForm();
    }

  return (
    <div className="p-4 border rounded m-3">
        <FormGroup controlId="formNombre">
            <FormLabel>
                Nombre
            </FormLabel>
            <FormControl type="text" 
            name="nombre" 
            placeholder="Ingrese nombre producto"
            value={values.nombre}
            onChange={handleChange}>
            </FormControl>
        </FormGroup>
        <FormGroup controlId="formNombre">
            <FormLabel>
                Imagen
            </FormLabel>
            <FormControl type="text" 
            name="imagen" 
            placeholder="Ingrese imagen del producto"
            value={values.imagen}
            onChange={handleChange}>
            </FormControl>
        </FormGroup>
        <FormGroup controlId="formNombre">
            <FormLabel>
                Precio
            </FormLabel>
            <FormControl type="number" 
            name="precio" 
            placeholder="Ingrese precio del producto"
            value={values.precio}
            onChange={handleChange}>
            </FormControl>
        </FormGroup>
        <div className="d-flex justify-content center mt-4">
            <Button onClick={handleSubmitForm} variant="primary">Enviar Producto</Button>
        </div>
    </div>
  )
}
