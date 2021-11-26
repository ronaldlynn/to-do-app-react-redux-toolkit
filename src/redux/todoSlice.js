import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "todo1", subtitle: "todo1 subtitle", completed: false },
        { id: 2, title: "todo2", subtitle: "todo2 subtitle", completed: false },
        { id: 3, title: "todo3", subtitle: "todo3 subtitle", completed: true },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                subtitle: action.payload.subtitle,
                completed: false
            }
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        toggleCompleted: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
    },
});

export const { addTodo, deleteTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;