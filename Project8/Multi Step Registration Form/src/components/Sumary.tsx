interface User {
  name: string;
  email: string;
  age: number;
  flatno: string;
  street: string;
  city: string;
  zip: number;
  skillset: string[];
}
interface Props {
  user: User;
}
const Sumary = ({ user }: Props) => {
  return <>{user}</>;
};

export default Sumary;
