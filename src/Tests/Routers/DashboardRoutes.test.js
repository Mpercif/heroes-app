const { mount } = require("enzyme")

import { MemoryRouter } from 'react-router'
import { AuthContext } from '../../auth/AuthContext'
import {DashboardRoutes} from '../../Routers/DashboardRoutes'

describe('Pruebas al componente DashboardRoutes', () => {

    test('Debe mostrarse correctamente ', () => {

        const contextDefault={
            dispatch: jest.fn(),
            user: {
                nombre: 'Miguel Perez',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextDefault}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
            )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.card-body').exists()).toBe(true)
        expect(wrapper.find('.text-info').text().trim()).toBe('Miguel Perez')
    })
    
    
})
