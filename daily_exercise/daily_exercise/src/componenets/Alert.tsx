// import type { ReactNode } from "react";

interface Props {
  text: string;
  //passing children
  //   children: string;
  // children: ReactNode; // if neseted elements are passed
  onClick: () => void;
}

const Alert = ({ text, onClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Alert;
