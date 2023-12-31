import { useForm } from "react-hook-form"
import  {  zodResolver  } from "@hookform/resolvers/zod"
import { ShemaValidity } from "../SchemaValidity"
import { api } from "../../service/index"

export const FormContact = () => {


    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: zodResolver(ShemaValidity)
    })

    const getData = async (formData) => {
        
        try {
            
            await api.post("/emails", formData)
            alert(`Message sent successfully`)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    const submit = (formData) => {
        getData(formData)
        reset() 
        
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="name" placeholder="Name" {...register("name")} required/>
            {errors.name && <p>{errors.name.message}</p>}
            <input type="email" placeholder="E-mail" {...register("email")} required/>
            {errors.email && <p>{errors.email.message}</p>}

            <select {...register("departament")} required>
                <option value={""}>Select Module</option>
                <option value={"1"}>Module 1</option>
                <option value={"2"}>Module 2</option>
                <option value={"3"}>Module 3</option>
            </select>
            {errors.value && <p>{errors.value.message}</p>}

            <textarea type="text" placeholder="Digite your message" {...register("message")} required/>
            {errors.text && <p>{errors.text.message}</p>}

            <button type="submit">To enter</button>
        </form>

    )
}