import React from 'react';
import renderer from 'react-test-renderer';
import CadastrarConta from '../components/CadastrarConta';

test('testando o componente de cadastrar conta', () => {
    const tree = renderer.create(<CadastrarConta />).toJSON();
    expect(tree).toMatchSnapshot();
  });