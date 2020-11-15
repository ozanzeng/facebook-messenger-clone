import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guesCard'}>
        <CardContent>
          <Typography
            color="white"
            variant="p"
            component="p"
          >
            <Typography
              color="white"
              variant="bold"
              component="span"
            >
              {!isUser && `${message.username || 'Unknown User'}: `}
            </Typography>
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
