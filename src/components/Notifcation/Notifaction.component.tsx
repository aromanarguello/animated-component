import * as React from "react";
import { Card } from "../";

const Notification: React.FC<{ msg: string }> = ({ msg }) => {
  return (
    <Card width={150} height={50}>
      <p>{msg}</p>
    </Card>
  );
};

export default Notification;
