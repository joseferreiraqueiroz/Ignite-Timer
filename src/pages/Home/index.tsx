import { HandPalm, Play } from "phosphor-react";
import { MainContainer, 
    StopCycleButton,
    PlayCycleButton
}
 from "./style";

import NewCycleForm from "./NewCycleForm";
import CountDown from "./Countdown";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { CycleContext } from "@/components/context/useContext";

const newTaskCycleSchemValidation = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  MinutesAmount: zod.coerce.number().min(1, 'Informe a duração da tarefa').max(60, 'Tempo máximo atingido')
})
type NewTaskTypes = zod.infer<typeof newTaskCycleSchemValidation>

export function Home() {
  const {
     handleCreateNewTask,
     activeCycle,
     handleStopCycle

   } = useContext(CycleContext)
 
  const newCycleForm = useForm<NewTaskTypes>({
          resolver: zodResolver(newTaskCycleSchemValidation),
          defaultValues: {
            task: '',
            MinutesAmount: 0
          }
         
        });

  const { handleSubmit, watch, reset } = newCycleForm 
  const task = watch('task');
  const MinutesAmount = watch('MinutesAmount');
  const isDisabledButton = !task || MinutesAmount <= 0;
 
  function handleCreateNewCycle(data: NewTaskTypes){
    handleCreateNewTask({
      task: data.task, 
      MinutesAmount: data.MinutesAmount, 
    });
    reset()
  }
  
  return (
    <MainContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm/>
          </FormProvider>
          <CountDown/>
        {activeCycle ? (
           <StopCycleButton onClick={handleStopCycle} type="button">
           <HandPalm size={32} />
          Interromper
         </StopCycleButton>
        ) : (
          <PlayCycleButton type="submit" disabled={isDisabledButton}>
          <Play size={32} />
         Começar
        </PlayCycleButton>
        )}
      
      </form>
    </MainContainer>
  );
}
