import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTime={3}
        shortRestTime={1}
        longRestTime={2}
        cycles={4}
      />
    </div>
  );
}

export default App;
