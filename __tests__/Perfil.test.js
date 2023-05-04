import React from 'react';
import renderer from 'react-test-renderer';
import Perfil from '../components/Perfil';

test('testando o componente de perfil', () => {
    const tree = renderer.create(<Perfil />).toJSON();
    expect(tree).toMatchSnapshot();
  });