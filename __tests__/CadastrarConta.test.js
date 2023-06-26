import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import CadastrarConta from '../components/CadastrarConta';

describe("teste componente de cadastrar conta", () => {
  test('Renderizando o componente', () => {
    render(<CadastrarConta />)
  });
})
