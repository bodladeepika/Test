import React from 'react';
import StickyHeader from '../Header/StickyHeader'
import {shallow} from 'enzyme'
import StickyComponents from '../Header/StickyComponents';
import toJson from 'enzyme-to-json';
import '@testing-library/jest-dom/extend-expect';


let wrapped;
beforeEach ( () => {
    wrapped = shallow(<StickyHeader/>);
})

afterEach ( () => {
    wrapped.unmount()
})




it('has another component' , () => {

expect(wrapped.containsMatchingElement(<StickyComponents />)).toEqual(true);
})

it('has correclty rendered',()=>{
  expect(toJson(wrapped)).toMatchSnapshot()
})

