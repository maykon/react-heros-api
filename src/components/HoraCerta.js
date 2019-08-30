import React, { useState, useEffect } from "react"

export default function HoraCerta({ date = new Date() }) {
  const [hora, setHora] = useState(date)

  useEffect(() => {
    const tick = setInterval(() => setHora(new Date()), 1000)

    return () => clearInterval(tick)
  }, [])

  return (
    <div>
      <h1>{hora.toTimeString()}</h1>
    </div>
  );
}
