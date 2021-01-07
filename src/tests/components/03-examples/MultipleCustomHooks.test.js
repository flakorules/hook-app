import React from 'react';
//import MultipleCustomHooks from '../../components/03-examples/MultipleCustomHooks'11
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en multiple custom hook', () => {

    useCounter.mockReturnValue({
        counter: 10
    });

    test('Debe mostrarse correctamente', () => {


        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        })


        const wrapper =  shallow(<MultipleCustomHooks/>)
        expect(wrapper).toMatchSnapshot()
        
    });

    test('Debe mostrar info ', () => {
        
        useFetch.mockReturnValue({
            data:[{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],

            loading: false,
            error: null
        })

        const wrapper =  shallow(<MultipleCustomHooks/>)

        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo')
        expect(wrapper.find('footer').text().trim()).toBe('Fernando')



    })
    
    
    
})
