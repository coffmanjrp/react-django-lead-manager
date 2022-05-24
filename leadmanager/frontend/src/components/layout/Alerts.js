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
      if (errors.msg.non_field_errors)
        alert.error(errors.msg.non_field_errors.join());
      if (errors.msg.username) alert.error(errors.msg.username.join());
    }
  }, [errors]);

  useEffect(() => {
    if (messages.deleteLead) alert.success(messages.deleteLead);
    if (messages.addLead) alert.success(messages.addLead);
    if (messages.passwordNotMatch) alert.error(messages.passwordNotMatch);
  }, [messages]);

  return <></>;
};

export default Alerts;
