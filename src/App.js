import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>Step{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
//DESCRIPTIONS

// new Date(): This creates a new date object with the current date and time.

// getDate(): This method gets the day of the month for the specified date according to local time, as an integer from 1 to 31.

/* setDate(number): This sets the day of the month for a specified date according to local time.
 The number you pass in can be from 1 to 31, but if you pass a number outside this range, it will adjust the month and year accordingly. 
For example, if today is January 31st and you call setDate(32), it will set the date to February 1st. */

/* getMonth(): Returns the month of the specified date according to local time, as a zero-based value (where zero indicates the first month, January). 
So, to display the month correctly, you need to add 1 to the result of getMonth(). */

// getFullYear(): Returns the year of the specified date according to local time.

// setFullYear(year, [month], [date]): Sets the full year for a specified date according to local time.
// Optionally, you can also specify the month and date.

// Math.abs(-5) = 5
