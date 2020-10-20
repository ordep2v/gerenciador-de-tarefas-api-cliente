import React from 'react'
import ReactDOM from 'react-dom'
import AtualizarTarefa from './atualizar-tarefa'
import {fireEvent, getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Tarefa from '../models/tarefa.model'
import axiosMock from 'axios'

describe('Teste do componente de atualização de tarefas', () => {
    const tarefaId = 1;
    const tarefa = new Tarefa(tarefaId, 'Nova tarefa', false)    

    it('deve exibir a modal de sucesso ao atualizar uma tarefa', async () => {
        axiosMock.get.mockResolvedValueOnce({data: {nome: 'Estudar React'}})
        const { findByTestId } = render(<AtualizarTarefa id={tarefaId}/>)
        fireEvent.click( await findByTestId('btn-atualizar'))
        const modal = await findByTestId('modal')
        expect(modal).toHaveTextContent('Sucesso')
    })

})