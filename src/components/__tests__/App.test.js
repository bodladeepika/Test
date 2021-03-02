import React from 'react';
import Dashboard from '../Dashboard/Dashboard'
import {shallow} from 'enzyme'
import App from '../../App';
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';


let wrapped;
beforeEach ( () => {
    wrapped = shallow(<App/>);
})

afterEach ( () => {
    wrapped.unmount()
})


it('has another component' , () => {

expect(wrapped.containsMatchingElement(<Dashboard />)).toEqual(true);
})

it('has correclty rendered',()=>{
  expect(toJson(wrapped)).toMatchSnapshot()
})
