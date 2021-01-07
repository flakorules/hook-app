import React from 'react';
import { shallow }  from  "enzyme";
import { HookApp } from "../HookApp";
import '@testing-library/jest-dom'


describe('Pruebas en Hook App', () => {

    test('HookApp Debe mostrarse correctamente', () => {

        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
