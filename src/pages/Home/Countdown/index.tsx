import { useEffect } from "react"
import { differenceInSeconds } from "date-fns"
import { useContext } from "react"
import { CycleContext } from "@/components/context/useContext"
import { CountDownContainer, SeparatorCountDown } from "./styles"

const CountDown = () => {
    
    const { activeCycle, activeCycleId, markCurrentCycleIsFinished, secondsAmountPassed, timeAmountPassed } = useContext(CycleContext)
    const totalSeconds = activeCycle? activeCycle.MinutesAmount * 60 : 0
    useEffect(() =>{
        let interval: ReturnType<typeof setInterval>
        if(activeCycle){
          interval = setInterval(() =>{
            const secondsDifference = differenceInSeconds(new Date(), activeCycle.started)
            new Date(activeCycle.started)

            if(secondsDifference >= totalSeconds){
              markCurrentCycleIsFinished()
              timeAmountPassed(totalSeconds)
              clearInterval(interval)
            }
            else{
                timeAmountPassed(secondsDifference)
            }
            
            
          }, 1000)
        }
        return () =>{
          clearInterval(interval)
        }
      }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleIsFinished, timeAmountPassed])
    
      const currentSeconds = activeCycle? totalSeconds - secondsAmountPassed : 0

      const minutesAmount = Math.floor(currentSeconds / 60)
      const secondsAmount = currentSeconds % 60
      const minutes = String(minutesAmount).padStart(2, '0')
      const seconds = String(secondsAmount).padStart(2, '0')

    return (
    <CountDownContainer>
    <span>{minutes[0]}</span>
    <span>{minutes[1]}</span>
    <SeparatorCountDown>:</SeparatorCountDown>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
  </CountDownContainer>

  )
}

export default CountDown