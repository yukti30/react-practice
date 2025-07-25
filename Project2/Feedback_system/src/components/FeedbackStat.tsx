interface Props {
  feedback_name: string;
  feedback: number;
}

const FeedbackStat = ({ feedback_name, feedback }: Props) => {
  return (
    <>
      {feedback_name} : {feedback}
    </>
  );
};

export default FeedbackStat;
