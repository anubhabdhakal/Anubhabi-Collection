import { FC, useState } from "react";
import { QuestionInterface } from "../../interfaces";
import "./Question.scss";
import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";
export const Question: FC<QuestionInterface> = ({ content, subContent }) => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = () => {
    setCollapse((collapse) => !collapse);
  };
  return (
    <div className="question-container">
      <div className="content-section" onClick={toggleCollapse}>
        <p>{content}</p>
        <img src={collapse ? minusIcon : plusIcon} alt="plus" />
      </div>
      {collapse && <p id="answer">{subContent}</p>}
    </div>
  );
};
