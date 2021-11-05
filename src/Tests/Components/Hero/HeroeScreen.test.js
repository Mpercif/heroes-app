import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroeScreen } from "../../../Components/Heroes/HeroeScreen"


describe('Pruebas en <HeroeScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
    
    
    afterEach(()=>{
        jest.clearAllMocks()
    })
    
    test('Debe de mostrar el componente redirect, si no hay argumentos en el url ', () => {
        const wrapper = mount(
                <MemoryRouter
                    initialEntries={['/hero']}
                >
                    <HeroeScreen 
                        history={historyMock} 
                    /> 
                </MemoryRouter>
                )
        expect(wrapper.find('Redirect').exists()).toBe(true)
    })

    test('Debe de mostrar un hero si el parametro existe ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']} >
                <Route path="/heroe/:heroeId" component={HeroeScreen} />
            </MemoryRouter>
        )
        
        expect(wrapper.find('.card').exists()).toBe(true)
    })

    test('Debe de regresar a la pantalla anterior con push ', () => {
        
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(    
        <MemoryRouter initialEntries={['/heroe/marvel-spider']} >
            <Route 
                path="/heroe/:heroeId" 
                component={ ()=> <HeroeScreen history={historyMock} /> }  
            />
        </MemoryRouter>
        )
        
        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled()
    })

    test('Debe de regresar a la pantalla anterior con goBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Route 
                    path='/heroe/:heroeId'
                    component={ ()=> <HeroeScreen history={historyMock} /> }
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(historyMock.goBack).toHaveBeenCalled()
        expect(historyMock.push).not.toHaveBeenCalled()
    })
    
    test('Debe de llamar el Redirect con el argumento "/" ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider123']} >
                <Route 
                    path='/heroe/:heroeId'
                    component={ ()=> <HeroeScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('')

    })
    
    

    
})
