interface Props {
  button_name: string;
  onClick: () => void;
}
const FeedbackButton = ({ button_name, onClick }: Props) => {
  return (
    <button type="button" className="btn btn-success" onClick={onClick}>
      {button_name}
    </button>
  );
};

export default FeedbackButton;
