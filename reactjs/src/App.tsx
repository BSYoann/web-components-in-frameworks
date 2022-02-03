import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div>
        <chart-card
      class="balance-card"
      serie="12, 30, 15, 50, 35, 54, 12, 65, 35, 15"
      background-color="#191919"
      line-color="#2220a4"
      chart-width="200"
      chart-height="50"
    >
      <h2 class="balance-card__title">Balance:</h2>
      <div class="balance-card__amount">15 €</div>
    </chart-card>
        </div>
      </header>
    </div>
  )
}

export default App
