import React from 'react'

function TextArea(props) {
  return (
    <div>
        <textarea className='form-control m-4' rows={4} color={12}
            value={props.comment}
            onChange={e=>props.handleComment(e.target.value)}
          ></textarea>
          {props.commentError && (
            <span className="error">{props.commentError}</span>
          )}
    </div>
  )
}

export default TextArea