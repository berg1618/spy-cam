import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import Perfil from '../components/Perfil';

describe("teste do componente perfil", () => {
  test('Renderizando o componente', () => {
    render(<Perfil />)
  });
})
