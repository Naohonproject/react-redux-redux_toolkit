const initState = [
  { id: 1, name: "Redux-core", completed: false, priority: "Medium" },
  { id: 2, name: "React", completed: true, priority: "Medium" },
];

const todoListReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "todoList/addTodo":
      return [...state, payload];
    case "todoList/toggleTodoStatus": {
      return state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};

export default todoListReducer;
