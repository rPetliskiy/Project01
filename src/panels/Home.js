import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cell, Epic, Tabbar, TabbarItem, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui/dist/';

import { Icon28HomeOutline, Icon28UserCircleOutline, Icon28MoneyCircleOutline } from'@vkontakte/icons/';

import persik from '../img/persik.png';
import './Persik.css';

export default class Home extends Component {
	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader>Persik</PanelHeader>
				<img className="Persik" src={persik} alt="Persik The Cat"/>
				<Cell>
					Тут скоро что-то будет :)
				</Cell>
				<Epic>
				 <Tabbar>
                                        <TabbarItem onClick={this.props.go} data-to="money">
                                                <Icon28MoneyCircleOutline />
                                        </TabbarItem>
                                        <TabbarItem style={{color:"var(--text_primary)"}}>
                                                <Icon28HomeOutline />
                                        </TabbarItem>
                                        <TabbarItem onClick={this.props.go} data-to="account">
                                                <Icon28UserCircleOutline />
                                        </TabbarItem>
                                </Tabbar>
                        </Epic>
			</Panel>
		);
	}
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
