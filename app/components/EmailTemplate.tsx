import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  message,
}) => (
  <div>
    <h2>Hi! This is my email: {firstName}</h2>
    <p>{message}</p>
  </div>
);
