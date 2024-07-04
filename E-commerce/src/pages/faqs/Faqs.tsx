import { FC } from "react";
import { Question } from "../../components/Question/Question";
import { useSelector } from "react-redux";
import "./faqs.scss";
import { Button } from "../../components/Forms/Button/Button";
import { useNavigate } from "react-router-dom";
export const Faqs = () => {
  const ordersQuestions = useSelector(
    (state: any) => state.faqs.orderQuestions
  );
  const shippingQuestions = useSelector(
    (state: any) => state.faqs.shippingQuestions
  );
  const redirect = useNavigate();
  return (
    <div className="faqs-page-wrapper">
      <div className="orders">
        <Header
          header="Orders"
          content="Below are some of the common questions about the orders"
        />
        {ordersQuestions.map((question, key: number) => {
          return (
            <Question
              content={question.content}
              subContent={question.subContent}
              key={key}
            />
          );
        })}
      </div>

      <div className="shippingandreturns">
        <Header
          header="Shipping & Returns"
          content="Below are some common questions about shipping, returns and exchanges"
        />
        {shippingQuestions.map((question, key: number) => {
          return (
            <Question
              content={question.content}
              subContent={question.subContent}
              key={key}
            />
          );
        })}
      </div>

      <div className="cannot-find-answer">
        <Header
          header="Didn't Find Your Answers?"
          content="Don't hesitate to contact us"
        />
        <Button
          value="Contact Us"
          backgroundColor="purple"
          isChevron={false}
          onClick={() => {
            redirect("/pages/Contacts");
          }}
        />
      </div>
    </div>
  );
};

export const Header: FC<{ header: string; content: string }> = ({
  header,
  content,
}) => {
  return (
    <div className="info-header">
      <h2>{header}</h2>
      <p>{content}</p>
    </div>
  );
};
