import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  function calculateCountdown() {
    const targetDate = dayjs('2023-09-29')
    const currentDate = dayjs()

    const days = targetDate.diff(currentDate, 'days')
    const hours = targetDate.subtract(days, 'days').diff(currentDate, 'hours')
    const minutes = targetDate
      .subtract(days, 'days')
      .subtract(hours, 'hours')
      .diff(currentDate, 'minutes')

    return { days, hours, minutes }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes } = calculateCountdown()

      setCountdown({
        days,
        hours,
        minutes,
      })
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [countdown.minutes])

  return (
    <div className="flex gap-3">
      <div>
        <span className="rounded bg-white font-mono text-7xl text-zinc-900">
          {countdown.days.toString().padStart(2, '0')}
        </span>

        <span className="mt-2 block w-full text-center text-2xl">Dias</span>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="h-2 w-2 bg-white" />
        <div className="h-2 w-2 bg-white" />
      </div>

      <div>
        <span className="rounded bg-white font-mono text-7xl text-zinc-900">
          {countdown.hours.toString().padStart(2, '0')}
        </span>

        <span className="mt-2 block w-full text-center text-2xl">Horas</span>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="h-2 w-2 bg-white" />
        <div className="h-2 w-2 bg-white" />
      </div>

      <div>
        <span className="rounded bg-white font-mono text-7xl text-zinc-900">
          {countdown.minutes.toString().padStart(2, '0')}
        </span>

        <span className="mt-2 block w-full text-center text-2xl">Min</span>
      </div>
    </div>
  )
}
