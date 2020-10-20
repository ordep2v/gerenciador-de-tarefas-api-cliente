import React from 'react'
import ReactDOM from 'react-dom'
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ordenacao from './ordenacao'

describe('Teste do componente de ordenação', () => {
    it('Teste de renderização do componente', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <Ordenacao
            ordenarAsc={false}
            ordenarDesc={false} />, div
        )
        ReactDOM.unmountComponentAtNode(div)
    })

    it('deve exibir a ordenação padrão', () => {
        const {getByTestId} = render(
            <Ordenacao ordenarAsc={false} ordenarDesc={false} />
        )
        expect(getByTestId('faSort')).not.toHaveClass('hidden')
        expect(getByTestId('faSortUp')).toHaveClass('hidden')
        expect(getByTestId('faSortDown')).toHaveClass('hidden')
    })
    it('deve exibir a ordenação ascendente', () => {
        const {getByTestId} = render(
            <Ordenacao ordenarAsc={true} ordenarDesc={false} />
        )
        expect(getByTestId('faSort')).toHaveClass('hidden')
        expect(getByTestId('faSortUp')).not.toHaveClass('hidden')
        expect(getByTestId('faSortDown')).toHaveClass('hidden')
    })
    it('deve exibir a ordenação descendente', () => {
        const {getByTestId} = render(
            <Ordenacao ordenarAsc={false} ordenarDesc={true} />
        )
        expect(getByTestId('faSort')).toHaveClass('hidden')
        expect(getByTestId('faSortUp')).toHaveClass('hidden')
        expect(getByTestId('faSortDown')).not.toHaveClass('hidden')
    })

})