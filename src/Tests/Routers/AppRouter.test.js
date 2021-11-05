import { mount, shallow } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { AppRouter } from "../../Routers/AppRouter"


describe('Pruebas al componente AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user:{
            logged: false
        }
    }

    test('Debe de mostrar el Login si no esta autenticado ', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
        )       
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    test('Debe de mostrar el componente de Marvel ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user:{
                logged: true,
                name: 'Miguel Angel'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
        )       

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.navbar').exists()).toBe(true)
    }) 
})
