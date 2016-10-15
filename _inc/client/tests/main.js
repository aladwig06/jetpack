import React from 'react';
import { connect } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Route, Router, useRouterHistory } from 'react-router';

import Main from '../main';
import jpProps from '../state/redux-store.js';

describe( '<Main />', () => {
	it( 'stay alive', () => {

		// Connect component
		const MainConnected = connect( state => ({
			state
		}) )( Main );

		// Shallow rendering with store
		const component = mount( <MainConnected { ...jpProps } route={ { path: '/dashboard' } } router={ { listenBefore: function(){} } } />, {
			context: {
				store: createMockStore( 'initialState' )
			}
		} );

		expect( component.find( 'Main' ) ).to.exist;
		//expect( component.find( 'Masthead' ) ).to.have.length( 1 );
	});
} );