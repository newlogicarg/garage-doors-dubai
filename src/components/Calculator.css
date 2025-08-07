
import "./Calculator.css";

const doorTypes = {
  sectional: { name: "Секционные", basePrice: 2500 },
  roller: { name: "Роллетные", basePrice: 3200 },
  swing: { name: "Распашные", basePrice: 1800 },
  sliding: { name: "Откатные", basePrice: 4500 }
};
const sizes = {
  small: { name: "Маленькие (2x2 м)", multiplier: 0.8 },
  standard: { name: "Стандартные (2.5x2.5 м)", multiplier: 1.0 },
  large: { name: "Большие (3x3 м)", multiplier: 1.3 },
  custom: { name: "Индивидуальный размер", multiplier: 1.6 }
};
const materials = {
  steel: { name: "Сталь", multiplier: 1.0 },
  aluminum: { name: "Алюминий", multiplier: 1.4 },
  wood: { name: "Дерево", multiplier: 1.8 },
  insulated: { name: "Теплоизолированные", multiplier: 1.6 }
};
const automationOptions = {
  none: { name: "Без автоматизации", price: 0 },
  basic: { name: "Базовая автоматика", price: 800 },
  premium: { name: "Премиум автоматика", price: 1500 },
  smart: { name: "Умная система (Wi-Fi)", price: 2200 }
};

export default function Calculator() {
  const [calculator, setCalculator] = useState({
    doorType: 'sectional',
    size: 'standard',
    automation: 'none',
    material: 'steel'
  });
  const [result, setResult] = useState(null);

  const handleChange = (field, value) => {
    setCalculator({...calculator, [field]: value});
    setResult(null);
  };

  const calculate = () => {
    const door = doorTypes[calculator.doorType];
    const size = sizes[calculator.size];
    const auto = automationOptions[calculator.automation];
    const material = materials[calculator.material];
    const base = door.basePrice * size.multiplier * material.multiplier;
    const total = base + auto.price;
    setResult({
      door: door.name,
      size: size.name,
      material: material.name,
      automation: auto.name,
      total: Math.round(total)
    });
  };

  return (
    <div className="calculator-card">
      <h2>Калькулятор стоимости</h2>
      <div className="calc-fields">
        <label>
          Тип ворот
          <select value={calculator.doorType} onChange={e => handleChange("doorType", e.target.value)}>
            {Object.entries(doorTypes).map(([key, v]) =>
              <option key={key} value={key}>{v.name}</option>
            )}
          </select>
        </label>
        <label>
          Размер
          <select value={calculator.size} onChange={e => handleChange("size", e.target.value)}>
            {Object.entries(sizes).map(([key, v]) =>
              <option key={key} value={key}>{v.name}</option>
            )}
          </select>
        </label>
        <label>
          Материал
          <select value={calculator.material} onChange={e => handleChange("material", e.target.value)}>
            {Object.entries(materials).map(([key, v]) =>
              <option key={key} value={key}>{v.name}</option>
            )}
          </select>
        </label>
        <label>
          Автоматизация
          <select value={calculator.automation} onChange={e => handleChange("automation", e.target.value)}>
            {Object.entries(automationOptions).map(([key, v]) =>
              <option key={key} value={key}>{v.name}</option>
            )}
          </select>
        </label>
      </div>
      <button className="calc-btn" onClick={calculate}>
        Рассчитать
      </button>
      {result && (
        <div className="calc-result">
          <div>Тип: <b>{result.door}</b></div>
          <div>Размер: <b>{result.size}</b></div>
          <div>Материал: <b>{result.material}</b></div>
          <div>Автоматизация: <b>{result.automation}</b></div>
          <div className="calc-total">Итого: <span>{result.total} AED</span></div>
        </div>
      )}
    </div>
  );
}
