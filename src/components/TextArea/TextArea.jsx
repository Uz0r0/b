import styles from '../TextArea/TextArea.module.css';
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <TextareaAutosize
      className={styles.textArea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      minRows={3}
    />
  );
};

export default TextArea;