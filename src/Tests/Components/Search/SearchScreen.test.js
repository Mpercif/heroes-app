import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../Components/Search/SearchScreen';


describe('Pruebas en el componente <SearchScreen />', () => {

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']} >
            <Route 
                path='/search'
                component={SearchScreen}
            />
        </MemoryRouter>
    )
    
    test('Debe de mostrarse correctamente con valores por defecto ', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').text().trim()).toBe('Busca un heroe...')
    })  

    test('Debe de mostrar a batman y el input con el valor del queryString ', () => {
        
        const newWrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']} >
            <Route 
                path='/search'
                component={SearchScreen}
            />
        </MemoryRouter>
        )

        expect(newWrapper).toMatchSnapshot()
        expect(newWrapper.find('input').prop('value')).toBe('batman')
        expect(newWrapper.find('HeroeCard').exists()).toBe(true )
    })

    test('Debe de mostrar un error si no se encuntra en el Hero ', () => {
        
        const newWrapper2 = mount(
            <MemoryRouter initialEntries={['/search?q=batman312321']}>
                <Route 
                    path='/search'
                    component={SearchScreen}
                />
            </MemoryRouter>
        )

        expect(newWrapper2.find('.alert-info').text().trim()).
                                toBe('No se encontro el heroe con batman312321')

        expect(newWrapper2).toMatchSnapshot()
    })

    test('Debe llamar el push del history ', () => {
        
        const historyMock = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman312321']} >
                <Route 
                    path='/search'
                    component={()=> <SearchScreen history={historyMock} /> }
                />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change',{
            target:{
                name: 'hero',
                value: 'batman'
            }
        })

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`)
    })
    
    
    
})
