import { useReducer } from "react"
import { authReducer } from "../../Auth/authReducer"
import { types } from "../../types/types"


describe('Pruebas en AuthReducer', () => {

    const stateDefault = {
        nombre: 'Miguel Perez',
        logged: true,
    }

    test('Debe de retornar el estado por defecto ', () => {

        const state = authReducer(stateDefault, {type: ''})

        expect(state).toEqual(stateDefault)

    })

    test('Debe de autenticar y colocar el name del usuario ', () => {
        const state = authReducer(stateDefault, {
            type: types.login,
            payload: {
                nombre: 'Miguel Perez'
            }
        })

        expect(state).toEqual(stateDefault)
    })
    
    test('Debe de borrar el name del usuario y el logged en false ', () => {
        const state = authReducer(stateDefault, {
            type: types.logout
        })

        expect(state).toEqual({logged: false})
    })
    
})