import { HistoryComponent, HistoryList, Status } from "./style";
import { useContext } from "react";
import { CycleContext } from "@/components/context/useContext";
import { formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'

export default function History() {
  const { newCycle } = useContext(CycleContext);

  return (
    <HistoryComponent>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {newCycle.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.MinutesAmount} minutos</td>
                  <td>{formatDistanceToNow(cycle.started, {
                    addSuffix: true,
                    locale: ptBR
                  })}</td>
                  <td>
                    {cycle.finishedDate && (
                      <Status color="green">Concluído</Status>
                    )}
                    {cycle.stopCycle && (
                      <Status color="red">Interrompido</Status>
                    )}
                     {!cycle.stopCycle && !cycle.finishedDate &&(
                      <Status color="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryComponent>
  );
}
