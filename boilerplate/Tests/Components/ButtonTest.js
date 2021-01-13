import 'react-native'
import React from 'react'
import { Text } from 'react-native'
import Button from '../../App/Components/Button'
import renderer from 'react-test-renderer'

test(`Button component renders correctly if doesn't have children.`, () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})

test(`Button component renders correctly if have children.`, () => {
  const tree = renderer.create(<Button><Text>Hello World!</Text></Button>).toJSON()
  expect(tree).toMatchSnapshot()
})