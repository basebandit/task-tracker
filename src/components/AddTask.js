const AddTask = ({ text, day, reminder }) => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input type="text" placeholder="Add Task" value={text} />
      </div>
      <div className="form-control">
        <label htmlFor="daytime">Day & Time</label>
        <input type="text" placeholder="Add Day & Time" value={day} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
