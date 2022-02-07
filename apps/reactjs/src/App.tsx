import { useMemo, useState } from 'react'
import './App.css'

function generateRandomArray(): number[] {
  const arrayLength = 20;
  return Array.from({ length: arrayLength }, () =>
    Math.floor(Math.random() * 100)
  );
}

function App() {
  const [serie, setSerie] = useState<number[]>(generateRandomArray());
  const [bgColor, setBgColor] = useState("#191919")
  const [lineColor, setLineColor] = useState("#2220a4")
  const [width, setWidth] = useState<number | string>(200);
  const [height, setHeight] = useState<number | string>(50);

  const balance = useMemo(() => {
    const length = serie.length;
    return length > 0 ? serie[length - 1] : 0;
  }, [serie])

  console.log("SERIE IN REACT", serie, typeof serie);

  return (
    <div className="App">
      <div className="controls">
        <label htmlFor="width-range">Width</label>
        <input
          type="range"
          name="height-range"
          id="width-range"
          min="100"
          max="300"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <label htmlFor="height-range">Height</label>
        <input
          type="range"
          name="height-range"
          id="height-range"
          min="40"
          max="150"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label htmlFor="bg-color">Background color: </label>
        <input id="bg-color" type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
        <label htmlFor="line-color">Line color: </label>
        <input id="line-color" type="color" value={lineColor} onChange={(e) => setLineColor(e.target.value)} />
        <input
          type="button"
          onClick={() => setSerie(generateRandomArray())}
          value="Generate data"
        />
      </div>
      <chart-card
        className="balance-card"
        serie={serie}
        background-color={bgColor}
        line-color={lineColor}
        chart-width={width}
        chart-height={height}
      >
        <h2 className="balance-card__title">Balance:</h2>
        <div className="balance-card__amount">{balance} €</div>
      </chart-card>
      {/* <ce-chart-card
        className="balance-card"
        serie={serie}
        background-color={bgColor}
        line-color={lineColor}
        chart-width={width}
        chart-height={height}
      >
        <h2 className="balance-card__title">Balance:</h2>
        <div className="balance-card__amount">{balance} €</div>
      </ce-chart-card> */}
      <vue-test serie={[12, 56]}></vue-test>
    </div>
  )
}

export default App
