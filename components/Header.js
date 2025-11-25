import { useEffect, useState } from 'react';

export default function Header({ title, startDate }) {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    function updateCounter() {
      const start = new Date(startDate);
      const now = new Date();
      const diffMs = now - start;
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      setHours(diffHours);
    }

    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60); // jede Minute

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <h1 className="title">
      {title}
      {' — '}
      <span style={{ color: 'magenta' }}>{hours} Stunden</span> online
    </h1>
  );
}
