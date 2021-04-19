import React, { Component } from 'react';
import bridge from "@vkontakte/vk-bridge";
import PropTypes from 'prop-types';
import { Div, Button, Avatar, Group, Header, Cell, Epic, Tabbar, TabbarItem, Panel, PanelHeader, PanelHeaderBack, PromoBanner } from '@vkontakte/vkui/dist/';

import { Icon28HomeOutline, Icon28UserCircleOutline, Icon28WalletOutline, Icon28MoneyCircleOutline } from'@vkontakte/icons/';

export default class Money extends Component {
	constructor(props) {
		super(props)

		this.state = {
			rub: 0,
		}
	}

	adClick() {
		console.log(1);
	}

        render() {
                return (
                        <Panel id={this.props.id}>
                                <PanelHeader>Persik</PanelHeader>
				{this.props.fetchedUser &&
                                <Group header={<Header mode="secondary">Пользователь</Header>}>
                                        <Cell
                                                before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200}/> : null}
                                        >
                                                {`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
                                        </Cell>
                                </Group>}
				{ this.state.promoBannerProps && <PromoBanner bannerData={ this.state.promoBannerProps } /> }
				<Group
					header={<Header mode="secondary">Баланс</Header>}
				>
					<Cell
						before={<Icon28WalletOutline />}
					>
						{`Баланс: ${this.state.rub}₽`}
						<br />
						{`ProjectCoins: 0`}
					</Cell>
						<Div>
							<Button onClick={this.adClick} before={<Icon28MoneyCircleOutline />} size="m" stretched mode="secondary">
								+0.02
							</Button>
						</Div>
				</Group>

                                <Epic>
                                <Tabbar>
	                                <TabbarItem style={{color:"var(--text_primary)"}}>
		                                <Icon28MoneyCircleOutline />
                                        </TabbarItem>
                                        <TabbarItem onClick={this.props.go} data-to="home">
                                                <Icon28HomeOutline />
                                        </TabbarItem>
                                        <TabbarItem onClick={this.props.go} data-to="account">
                                                <Icon28UserCircleOutline />
                                        </TabbarItem>
                                </Tabbar>                                                                                                                            </Epic>
                        </Panel>
                );
        }
}

bridge.send('VKWebAppGetAds', {"ad_unit_id":132782,"ad_unit_hash":"b188e9ec604bb602f622d1b3e3efa3b6"})
    .then((promoBannerProps) => {
        this.setState({ promoBannerProps });
    })

Money.propTypes = {
        id: PropTypes.string.isRequired,
        go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
                id: PropTypes.numbre,
                photo_200: PropTypes.string,
                first_name: PropTypes.string,
                last_name: PropTypes.string,
        }),
};
