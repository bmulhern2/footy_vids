import React from 'react';

const Message = ({ arr }) => {
    return (
        <div className="text-center">
            <div>{arr.message}</div>
        </div>
    );
};

export default Message;