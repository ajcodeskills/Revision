import React from 'react'
import {format} from 'timeago.js';
import './reply.css'
export function Reply({data}) {
    const renderReplies = (replies) => {
        if(!replies)
            return;
        if(replies.length === 0)
            return;
        else {
            return replies.map((item) => (  
                <div key = {item.id} className = "replyContainer">
                    <p>{item.author} {item.points} points {format(item.timestamp)}</p>
                    <div className = "body">{item.body}</div>
                    <p>Reply  Give Award  Share  Report  save</p>{item.replies && <span>view replies</span>}
                    <div className = "nextReply">{renderReplies(item.replies)}</div>
                </div>
            ))
        }
    }
    return (
        <div className = "container">
            <p>{data.author} {data.points} points {format(data.timestamp)}</p>
            <div>{data.body}</div>
            <p>Reply  Give Award  Share  Report  save</p><span>view replies</span>
            <div className = "reply">{renderReplies(data.replies)}</div>
        </div>
    )
}


