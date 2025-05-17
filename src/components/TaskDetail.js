import React from 'react';
import CommentSection from './CommentSection';

const TaskDetail = ({ taskId }) => {
  return (
    <div>
      <h2>Task Details</h2>
      {/* Other task details here */}
      <CommentSection taskId={taskId} />
    </div>
  );
};

export default TaskDetail;
