const { renderHook, act } = require("@testing-library/react-hooks")
const { useForm } = require("../../hooks/useForm")

describe('Pruebas en useForm', () => {

    const intitialForm ={
        name: 'cristian',
        email: 'cristian@cisternas.com',
    }

    test('Debe de regresar un formulario por defecto', () => {

        const {result} = renderHook(()=>useForm(intitialForm))
        const [ formValues, handleInputChange, reset ] = result.current;

        expect(formValues).toEqual(intitialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');


        
    })

    test('Debe de cambiar el valor del formulario', () => {

        const {result} = renderHook(()=>useForm(intitialForm))
        const [ , handleInputChange ] = result.current;

        act(()=>{

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'tereso',
                }
            })  
        })

        const [formValues] = result.current;

        expect(formValues).toEqual({...intitialForm, name: 'tereso'});
        
    })
    

    test('Debe de restablecer el formulario con RESET', () => {
        
        const {result} = renderHook(()=>useForm(intitialForm))
        const [ , handleInputChange, reset ] = result.current;

        act(()=>{

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'tereso',
                }
            }) 
            
            reset()
        })

        const [formValues] = result.current;

        expect(formValues).toEqual(intitialForm);
        
        
    })
    
    

    
})
