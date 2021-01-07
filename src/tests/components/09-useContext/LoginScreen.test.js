import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen', () => {
    
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    );
    
    test('Debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('debe ejecutar setuser con argumento esperado ', () => {
        
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Fernando'
        });

    });
    
})
