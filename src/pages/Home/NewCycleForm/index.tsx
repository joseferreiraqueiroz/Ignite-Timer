import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import { useContext } from "react"
import { CycleContext } from "@/components/context/useContext"
import { useFormContext } from "react-hook-form"

const NewCycleForm = () => {
    const { activeCycle } = useContext(CycleContext)
    const { register } = useFormContext()
    return (
    <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text" 
            list="taskName"
            id="task" 
            disabled={!!activeCycle}
            placeholder="Dê o nome para seu projeto"
            {...register('task')}
          />
    
          <datalist id="taskName">
            <option value="banana"></option>
          </datalist>

          <label htmlFor="MinutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="MinutesAmount"
            placeholder="00"
            {...register('MinutesAmount')}
          />
         
          <span>minutos.</span>
        </FormContainer>
  )
}

export default NewCycleForm