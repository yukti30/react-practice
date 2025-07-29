import NotificationCard from "./components/NotificationCard";
import { useState } from "react";

function App() {
  const [clearButton, setClearButton] = useState(false);
  const [notifications, setNotification] = useState([
    {
      id: 1,
      title: "Instagram",
      notification: "Recieved message from instagram",
    },
    {
      id: 2,
      title: "Swiggy",
      notification: "What 's on your mind? Let's eat somrthing",
    },
    {
      id: 3,
      title: "Bank",
      notification: "Rs321 credited to your account: XXXX9867",
    },
  ]);
  const handleClick = (index: number) => {
    setNotification(
      notifications.filter(
        (notification) => notification !== notifications[index]
      )
    );
  };
  return (
    <>
      {!clearButton &&
        notifications.map((notification, index) => (
          <NotificationCard
            title={notification.title}
            onClick={() => handleClick(index)}
          >
            <p>{notification.notification}</p>
          </NotificationCard>
        ))}
      <button style={{ margin: 10 }} onClick={() => setClearButton(true)}>
        Clear All
      </button>
    </>
  );
}

export default App;
