import React from 'react';
import renderer from 'react-test-renderer';
import PaginaInicial from '../components/PaginaInicial';

test('testando o componente de pagina inicial', () => {
    const tree = renderer.create(<PaginaInicial />).toJSON();
    expect(tree).toMatchSnapshot();
  });