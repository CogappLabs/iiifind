import React, { useEffect, useState } from 'react';

function CountdownTimer({ start, setDisabled }) {
  const [timeLeft, setTimeLeft] = useState(1 * 60);

  useEffect(() => {
    if (!start) return;

    // exit early when we reach 0
    if (!timeLeft) {
      setDisabled(true);
      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-run the effect
    // when we update it
  }, [start, timeLeft, setDisabled]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Countdown</h2>
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}

export default CountdownTimer;