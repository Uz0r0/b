import styles from '../SelectBox/SelectBox.module.css';

const SelectBox = ({ options = [], value, onChange, label }) => {
  return (
    <div>
      {label && <label><p>{label}</p></label>}
      <select className={styles.Select} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;