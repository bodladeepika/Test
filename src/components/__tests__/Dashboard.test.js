import React from 'react';
import Dashboard from '../Dashboard/Dashboard'
import {shallow} from 'enzyme'
import StickyHeader from '../Header/StickyHeader';
import Sidebar from '../Sidebar/Sidebar';
import '@testing-library/jest-dom/extend-expect';

let wrapped;
beforeEach ( () => {
    wrapped = shallow(<Dashboard/>);
})

afterEach ( () => {
    wrapped.unmount()
})


it('has another component' , () => {

expect(wrapped.containsMatchingElement(<StickyHeader />)).toEqual(true);
})

it('has another component' , () => {

    expect(wrapped.containsMatchingElement(<Sidebar />)).toEqual(true);
})
  




