import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tabbar, TabbarItem, Epic, Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui/dist/';

import { Icon28HomeOutline, Icon28InfoCircleOutline, Icon28UserCircleOutline, Icon28MoneyCircleOutline } from '@vkontakte/icons/';

export default class Account extends Component {
	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader>Профиль</PanelHeader>
				{this.props.fetchedUser &&
				<Group header={<Header mode="secondary">Пользователь</Header>}>
					<Cell
						before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200}/> : null}
						href={`https://vk.com/id${this.props.fetchedUser.id}`}
					>
						{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
						<br />
						{`ID: ${this.props.fetchedUser.id}`}
					</Cell>
				</Group>}
				<Group>
					<Button stretched size="l"
						before={<Icon28UserCircleOutline />}
					>
						О нас
					</Button>
				</Group>
				<Epic>
					<Tabbar>
						<TabbarItem onClick={this.props.go} data-to="money">
                                                	<Icon28MoneyCircleOutline />
                                        	</TabbarItem>

						<TabbarItem onClick={this.props.go} data-to="home">
							<Icon28HomeOutline />
						</TabbarItem>

						<TabbarItem style={{color:"var(--text_primary)"}} >
                                                        <Icon28UserCircleOutline />
                                                </TabbarItem>
					</Tabbar>
				</Epic>
			</Panel>
		);
	}
}

Account.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		id: PropTypes.numbre,
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
	}),
};

