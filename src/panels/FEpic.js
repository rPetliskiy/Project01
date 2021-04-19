import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui/dist';

import { Icon28HomeOutline, Icon28UserCircleOutline, Icon28MoneyCircleOutline } from '@vkontakte/icons';

export default class FEpic extends Component {
        render() {
                return (
			<Epic>
				<Tabbar>
					<TabbarItem onClick={this.props.go} data-to="account">
                                        	<Icon28MoneyCircleOutline />
					</TabbarItem>
                                        <TabbarItem onClick={this.props.go} data-to="home">
                                        	<Icon28HomeOutline />
                                        </TabbarItem>
                                        <TabbarItem onClick={this.props.go} data-to="account">
                                        	<Icon28UserCircleOutline />
                                        </TabbarItem>
				</Tabbar>
			</Epic>
		);
	}
}

FEpic.propTypes = {
        go: PropTypes.func.isRequired,
};
