import { Cycle, cyclesReducer } from "@/reducers/cycles";
import { differenceInSeconds } from "date-fns";
import { createContext, useState, useReducer, useEffect } from "react";
import { ReactNode } from 'react';

interface CreateCycle {
  task: string;
  MinutesAmount: number;
}

interface CycleContextTypes {
  newCycle: Cycle[]; 
  activeCycle: Cycle | null;
  activeCycleId: string | null;
  secondsAmountPassed: number;
  markCurrentCycleIsFinished: () => void;
  timeAmountPassed: (seconds: number) => void;
  handleStopCycle: () => void;
  handleCreateNewTask: (data: CreateCycle) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const CycleContext = createContext({} as CycleContextTypes);

export function CreateCycleContext({ children }: ChildrenProps) {
  const [newCycleState, dispatch] = useReducer(cyclesReducer, {
    cycle: [],
    activeCycleId: null,
  }, (initialState) =>{
    const storageStateAsJson = localStorage.getItem('@ignite-timer:cycles-state')

    if(storageStateAsJson){
      return JSON.parse(storageStateAsJson)
    }
    return initialState
    
  });

  useEffect(() =>{
    const stateJSON = JSON.stringify(newCycleState)
    localStorage.setItem('@ignite-timer:cycles-state', stateJSON)
  }, [newCycleState])

  const { activeCycleId, cycle } = newCycleState;
  const activeCycle = cycle.find((cycle) => cycle.id === activeCycleId);

  const [secondsAmountPassed, setSecondsAmountPassed] = useState(() =>{
    if(activeCycle){
      return  differenceInSeconds(new Date(), new Date(activeCycle.started))                  
    }
    return 0
  });
  

  function handleCreateNewTask(data: CreateCycle) {
    const id = String(new Date().getTime());
    const newCycle = {
      id,
      task: data.task,
      MinutesAmount: data.MinutesAmount,
      started: new Date(),
    };

    dispatch({
      type: 'CREATE_NEWCYCLE',
      payload: {
        newCycle,
      },
    });

    setSecondsAmountPassed(0);
  }

  function markCurrentCycleIsFinished() {
    dispatch({
      type: 'MARK_CURRENTCYCLE_AS_FINISHED',
      payload: {
        activeCycleId,
      },
    });
  }

  function handleStopCycle() {
    dispatch({
      type: 'HANDLE_STOPCYCLE',
      payload: {
        activeCycleId,
      },
    });
  }

  function timeAmountPassed(seconds: number) {
    setSecondsAmountPassed(seconds);
  }

  return (
    <CycleContext.Provider
      value={{
        newCycle: newCycleState.cycle, 
        activeCycle,
        markCurrentCycleIsFinished,
        activeCycleId,
        secondsAmountPassed,
        handleCreateNewTask,
        handleStopCycle,
        timeAmountPassed,
      }}>
      {children}
    </CycleContext.Provider>
  );
}
