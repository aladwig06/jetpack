import React from 'react';
import { connect } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Main from '../main';

describe( '<Main />', () => {
	it( 'does all the things', () => {

		const MainConnected = connect( state => ({
			state
		}) )( Main );

		// Shallow rendering with store
		const component = shallow( <MainConnected />, {
			context: {
				store: createMockStore( 'JETPACK_SET_INITIAL_STATE' )
			}
		} );

		expect( component.find( 'Main' ) ).to.exist;
	});
} );