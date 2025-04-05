interface CyclesState {
  cycle: Cycle[];
  activeCycleId: string | null;
}
export interface Cycle {
    id: string;
    task: string;
    MinutesAmount: number;
    started: Date;
    stopCycle?: Date;
    finishedDate?: Date;
  }
  
export function cyclesReducer(state: CyclesState, action){
    
    switch(action.type){
      case 'CREATE_NEWCYCLE': 
      return {
        ...state,
        cycle: [...state.cycle, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
      case 'HANDLE_STOPCYCLE':
        return {
          ...state,
          cycle: state.cycle.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, stopCycle: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };
      case 'MARK_CURRENTCYCLE_AS_FINISHED':
        return {
          ...state,
          cycle: state.cycle.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };
      default: 
        return state
    }
  }