import { useState } from 'react';

const Content = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ text, value, extra }) => {
  return (
    <div>
      <p>
        {text} {value} {extra}
      </p>
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + bad + neutral;
  const score = good - bad;
  const avg = score / all;
  const positiveScorePer = (good / all) * 100;
  return (
    <>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={all} />
      <Display text="average" value={avg} />
      <Display text="positive" value={positiveScorePer} extra={'%'} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  let statistics;
  if (good > 0 || neutral > 0 || bad > 0) {
    statistics = <Statistics good={good} bad={bad} neutral={neutral} />;
  } else {
    statistics = <p>No feedback given</p>;
  }

  return (
    <div>
      <Content text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Content text="statistics" />
      {statistics}
    </div>
  );
};

export default App;