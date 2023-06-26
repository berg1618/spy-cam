import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import Login from '../components/Login';

describe("teste componente de login", () => {
  test('Renderizando o componente', () => {
    render(<Login />)
  });
})
