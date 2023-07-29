import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import CadastrarRosto from '../components/CadastrarRosto';

jest.mock(
  'react-native-vector-icons/Feather',
  () => ""
);

jest.mock(
  'expo-image-picker',
  () => ({
    requestMediaLibraryPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
  })
);


jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => ""
);

jest.mock(
  '@react-navigation/native',
  () => ({
    useNavigation: jest.fn().mockResolvedValue({ status: 'granted' }),
    navigate: jest.fn().mockResolvedValue({ status: 'granted' }),
  })
);


describe("teste componente de cadastrar Rosto", () => {
  test('Renderizando o componente', () => {
    render(
    <CadastrarRosto/>)

  });
})
