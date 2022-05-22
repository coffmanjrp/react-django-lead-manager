import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

const Alerts = () => {
  const { errors, messages } = useSelector((state) => state);
  const alert = useAlert();

  useEffect(() => {
    if (errors.status) {
      if (errors.msg.name) alert.error(`Name: ${errors.msg.name.join()}`);
      if (errors.msg.email) alert.error(`Email: ${errors.msg.email.join()}`);
      if (errors.msg.message)
        alert.error(`Message: ${errors.msg.message.join()}`);
    }
  }, [errors]);

  useEffect(() => {
    if (messages.deleteLead) alert.success(messages.deleteLead);
    if (messages.addLead) alert.success(messages.addLead);
  }, [messages]);

  return <></>;
};

export default Alerts;
