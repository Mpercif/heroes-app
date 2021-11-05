import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext"
import { LoginScreen } from "../../../Components/Login/LoginScreen"



describe('Pruebas en el componente <LoginScreen />', () => {

    const contextDefault = {
        dispatch: jest.fn()
    }

    const historyMock = {
        replace: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextDefault}>
            <LoginScreen
                history={historyMock}
            />
        </AuthContext.Provider>
    )
       
    test('Debe mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de realizar el dispatch y la navegación ', () => {
        
        const handleClick = wrapper.find('button').prop('onClick')
        handleClick()
        expect(contextDefault.dispatch).toHaveBeenCalled()
        expect(historyMock.replace).toHaveBeenCalledWith('/')

        localStorage.setItem('lastPath', '/dc')
        handleClick()
        expect(historyMock.replace).toHaveBeenCalledWith('/dc')
    }) 
})
