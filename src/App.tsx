import React, { useState } from 'react';
import './App.css';
import { SimpleCoffee } from "./classes/SimpleCoffee";
import { ICoffee } from "./classes/ICoffee";
import { MilkDecorator } from "./classes/MilkDecorator";
import { SugarDecorator } from "./classes/SugarDecorator";

function App() {
  const [coffee, setCoffee] = useState<ICoffee>(new SimpleCoffee());
  const [withMilk, setWithMilk] = useState(false);
  const [withSugar, setWithSugar] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  // Kaffee Optionen anwenden
  const handleCoffeeSelection = () => {
    let selectedCoffee: ICoffee = new SimpleCoffee();

    if (withMilk) {
      selectedCoffee = new MilkDecorator(selectedCoffee);
    }

    if (withSugar) {
      selectedCoffee = new SugarDecorator(selectedCoffee);
    }

    setCoffee(selectedCoffee);
    setShowResult(true);
  };

  const ResultComponent: React.FC = (): JSX.Element => {
    return (
        <div>
          <h2>Dein Kaffee:</h2>
          <p>{coffee.getDescription()}</p>
          <p>Cost: ${coffee.getCost().toFixed(2)}</p>
        </div>
    );
  };

  return (
      <div className="App">
        <h1>Order Your Coffee</h1>
        <div className="coffee-options">
          <div className="selectionArea" id="firstSelector">
            <div>
              <label>
                <input
                    id="milk"
                    type="checkbox"
                    checked={withMilk}
                    onChange={() => setWithMilk(!withMilk)}
                />
                With Milk
              </label>
            </div>
          </div>
          <div className="selectionArea" id="lastSelector">
            <div>
              <label>
                <input
                    id="sugar"
                    type="checkbox"
                    checked={withSugar}
                    onChange={() => setWithSugar(!withSugar)}
                />
                With Sugar
              </label>
            </div>
          </div>
          <br/>
          <button id="orderCoffee" onClick={handleCoffeeSelection}>Kaffee bestellen</button>
        </div>
        <div className="coffee-display">
          {showResult && <ResultComponent />}
          <div className={`coffee-cup ${withMilk ? "with-milk" : ""} ${withSugar ? "with-sugar" : ""}`}>
            {/* Visual representation of the coffee */}
            <div className="coffee-liquid"></div>
            {withSugar && (
                <>
                  {/* Zuckerwürfel */}
                  <div className="sugar-cube" style={{ left: '25%', bottom: '60%' }}></div>
                  <div className="sugar-cube" style={{ left: '40%', bottom: '20%' }}></div>
                  <div className="sugar-cube" style={{ left: '65%', bottom: '40%' }}></div>
                </>
            )}
          </div>
        </div>
      </div>
  );
}

export default App;
