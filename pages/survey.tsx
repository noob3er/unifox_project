import Result from "@/pages/result";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Survey = () => {
  const router = useRouter();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      question: "친구가 힘들어서 아이패드를 샀다. 이에 대한 당신의 반응은?",
      answer: [
        { text: "뭐가 힘들어?", score: 0 },
        { text: "아이패드를 왜샀어?", score: 25 },
      ],
    },
    {
      question:
        "친구가 옆에서 살이 쪄서 슬프다고 말한다. 이에 대한 당신의 대답은?",
      answer: [
        { text: "살을 빼", score: 25 },
        { text: "넌 살쪄도 괜찮아", score: 0 },
      ],
    },
    {
      question:
        "팀 프로젝트를 하는데 참여를 안하는 팀원이 있다. 이에 대한 당신의 행동은?",
      answer: [
        { text: "그사람 이름을 빼버린다", score: 25 },
        { text: "다독이며 같이 하자고 한다", score: 0 },
      ],
    },
    {
      question:
        "친구가 그림을 그렸는데 너무 못그렸다. 이에 대한 당신의 행동은?",
      answer: [
        { text: "시도는 좋았는데 이 부분이 조금 별로인거 같아", score: 25 },
        { text: "우와 너무 잘했다", score: 0 },
      ],
    },
  ];

  const handleOption = (selectedScore: any) => {
    const result = score + selectedScore;
    if (questionIndex < questions.length - 1) {
      setScore(result);
      setQuestionIndex(questionIndex + 1);
    } else {
      router.push(`/result?score=${result}`);
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <QuestionWrapper>
            <Question>{questions[questionIndex].question}</Question>
          </QuestionWrapper>
          <AnswerWrapper>
            {questions[questionIndex].answer.map((option, index) => (
              <Option key={index} onClick={() => handleOption(option.score)}>
                {option.text}
              </Option>
            ))}
          </AnswerWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Survey;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 90%;
  max-width: 740px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  max-width: 740px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  padding-top: 240px;
`;

const Question = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 90%;
  max-width: 460px;
  height: 48px;

  gap: 24px;
`;

const Option = styled.button`
  width: 90%;
  max-width: 460px;

  padding: 24px 0;

  border-radius: 50px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 500;

  background-color: #5f95ff;
  color: #f5f5f5;
`;
