import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import '@testing-library/jest-dom'
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en todo reducer', () => {
    
    test('Debe retornar estado por defecto', () => {

        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);        
    })

    test('Debe agregar un todo', () => {


        const newTodo = {
            id:3,
            desc:'lavarse las weas',
            done: false
        }

        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo
        } );

        expect(state).toEqual([...demoTodos, newTodo]);
        
    })

    test('Debe borrar un todo', () => {
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: 1
        } );

        expect(state.length).toBe(1);
        
    })

    test('Debe hacer el toogle del todo', () => {

        const idTodo = 1;

        const state = todoReducer(demoTodos, {
            type: 'toggle',
            payload: idTodo
        } );

        expect(state.find(todo => todo.id === idTodo).done).toBe(true);
    
    })
    
    
    
    
})
