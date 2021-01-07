import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom'


describe('Pruebas en TodoListItem', () => {
    

    const handleDelete=jest.fn();
    const handleToggle=jest.fn();

    const wrapper = shallow(<TodoListItem  
                                todo={demoTodos[0]}
                                index={0}
                                handleDelete={handleDelete}
                                handleToggle={handleToggle}
                            />)
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
    test('Debe llamar la funcion borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    });

    
    test('Debe llamar la funcion toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('dEBe mostrar el texto correctamente ', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`${ 0 + 1}. ${ demoTodos[0].desc }`);
    });

    test('debe tener la classe complete si el todo.done esta en true', () => {

        const todo = demoTodos[0]
        todo.done = true

        const wrapper = shallow(<TodoListItem  
            todo={todo}
        />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

        
    })
    
    
    
})
