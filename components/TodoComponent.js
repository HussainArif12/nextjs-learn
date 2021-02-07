function TodoComponent({ todo }) {
  return (
    <>
      <h1>{todo.title}</h1>
      <input type="checkbox" checked={todo.completed} readOnly />
      <label>Completed</label>
    </>
  );
}
export default TodoComponent;
