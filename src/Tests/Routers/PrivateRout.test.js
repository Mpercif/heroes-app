
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from "react-router";
import { PrivateRoout } from "../../Routers/PrivateRout";


describe('Pruebas en el componente PrivateRout', () => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    test('Debe de mostrar el componente SI esta autenticado y guardar localstorage ', () => {
            
        // 1). El MemoryRouter nos permite simular un Router para poder 
        //     hacer las pruebas

        // 2). NO se usa shallow porque solo renderiza un elemento, se usa 
        //     mount de enzyme tambien 

        Storage.prototype.setItem= jest.fn()
        
        const  wrapper = mount(
    
            <MemoryRouter>  
                <PrivateRoout
                    isAuthenticated={true}
                    component={ ()=> <span>Listo!</span> } 
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel')
    })

    test('Debe de bloquear el componente si no esta autenticado ', () => {
        const wrapper = mount(

            <MemoryRouter>
                <PrivateRoout 
                    isAuthenticated={false}
                    component={()=> <span>Listo!</span> }
                    {...props}
                />

            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(false)
    })
    



})
    
    
