import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en Home Screen', () => {


    const user = {
        name: 'Fer',
        email: 'Cris@cis.cl'
    }


    const wrapper = mount(        
        <UserContext.Provider value={{
            user
        }} >
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('should ', () => {
        expect(wrapper).toMatchSnapshot();
    })


    
    
})
