interface Props {
  text: string;
  //prop optional
  //   color?: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}
const Button = ({ text, color = "primary", onClick }: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
