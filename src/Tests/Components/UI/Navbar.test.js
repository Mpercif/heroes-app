import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { AuthContext } from "../../../auth/AuthContext"
import { Navbar } from "../../../Components/Ui/Navbar"
import { types } from "../../../types/types"


describe('Pruebas del componente <Navbar />', () => {


    const historyMock = {
        push: jest.fn(),
        listen: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn(),
        location: {},
    }

    const contextDefault = {
        dispatch: jest.fn(),
        user:{
            logged: true,
            nombre: 'Miguel Perez'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextDefault} >
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar /> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>)

    afterEach(()=>{
        jest.clearAllMocks()
    });
    
    test('Debe mostrarse correctamente  ', () => {

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Miguel Perez')
        
    })

    test('Debe de llamar logout y usar history ', () => {
        
        wrapper.find('button').prop('onClick')();
        expect(contextDefault.dispatch).toHaveBeenCalledWith({type: types.logout})
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })
    
    
    
})
