import { useState } from "react";
import axios from "axios";
import SelectBox from "../SelectBox/SelectBox";
import Button from "../Button/Button";
import TextArea from "../TextArea/TextArea";
import style from "../StudyForm/StudyForm.module.css"
import gStyle from "../Style.module.css"

export default function StudyForm() {
  const [subject, setSubject] = useState("Математика");
  const [language, setLanguage] = useState("Русский");
  const [requestType, setRequestType] = useState("Полный");
  const [mode, setMode] = useState("");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dto = { subject, language, message, requestType, mode};
    try {
      const res = await axios.post("http://localhost:8080/api/ai/ask", dto);
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer("Ошибка при получении ответа");
    }
  };

  return (
    <div>
      <h1 className={gStyle.center}>AI-Тьютор StudyBuddy</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.selectBlock}>
          <SelectBox 
            options={['Математика', 'Физика', 'История']}
            value={subject}
            onChange={setSubject}
            label={"Предмет"}
          />
          <SelectBox 
            options={['Русский', 'Кыргызский']}
            value={language}
            onChange={setLanguage}
            label={"Язык"}
          />
          <SelectBox 
            options={['Полный', 'Краткий']}
            value={requestType}
            onChange={setRequestType}
            label={"Тип запроса"}
          />
        </div>
        

         <div className={style.askBlock}>
          <TextArea
            placeholder="Введите вопрос..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button text="Спросить" type="submit" />
        </div>
      </form>

      {answer && (
        <div>
          <strong>Ответ:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}