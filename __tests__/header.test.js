import React from 'react';
import {render} from '@testing-library/react-native'

import Header from '../components/Header';

jest.mock(
  'react-native-vector-icons/Feather',
  () => ""
);

jest.mock(
  '@react-navigation/native',
  () => ({
    useNavigation: jest.fn().mockResolvedValue({ status: 'granted' }),
    navigate: jest.fn().mockResolvedValue({ status: 'granted' }),
  })
);


describe("teste componente de header", () => {
  test('Renderizando o componente', () => {
    render(<Header />)
  });
})
