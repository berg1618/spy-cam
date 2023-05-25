import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import PaginaInicial from '../components/PaginaInicial';

describe("teste componente de pagina inicial", () => {
  test('Renderizando o componente', () => {
    render(<PaginaInicial />)
  });
})
