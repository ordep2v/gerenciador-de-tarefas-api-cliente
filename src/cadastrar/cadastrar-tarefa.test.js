import { faItalic } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ReactDOM from 'react-dom'
import CadastrarTarefa from './cadastrar-tarefa'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'

describe('Teste do componente de cadastro de tarefas',  () => {
    it('Deve cadastrar uma nova tarefa',async () => {
        const { getByTestId, findByTestId} = render(<CadastrarTarefa/>)
        fireEvent.change(getByTestId('txt-tarefa'), {target: {value: 'Testando'}})
        fireEvent.click(getByTestId('btn-cadastrar'))
        const modal = await findByTestId('modal')
        expect(modal).toHaveTextContent('Sucesso')
        expect(modal).toHaveTextContent('Tarefa adicionada com sucesso.')
    })
})