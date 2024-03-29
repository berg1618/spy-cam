import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import Perfil from '../components/Perfil';

jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => ""
);

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


describe("teste do componente perfil", () => {
  test('Renderizando o componente', () => {
    render(<Perfil />)
  });
})
