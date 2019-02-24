import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import config from '../../../config';

const { routs } = config;

class Menu extends Component {
    state = {
        menu: [
            {
                id: 1,
                name: 'Home',
                uri: routs.homepage
            },
            {
                id: 2,
                name: 'Shop',
                uri: routs.category,
                children: [
                    {
                        id: 5,
                        name: 'Blue Stripe Stoneware Plate',
                        uri: '/product/1'
                    },
                    {
                        id: 6,
                        name: 'Hand Painted Blue Flat Dish',
                        uri: '/product/2'
                    },
                    {
                        id: 7,
                        name: 'Heme',
                        uri: '/product/3'
                    },
                    {
                        id: 8,
                        name: 'Mashiko-Yaki Green Small Plate',
                        uri: '/product/4'
                    },
                    {
                        id: 9,
                        name: 'Mashiko-Yaki Indigo Small Plate',
                        uri: '/product/5'
                    },
                    {
                        id: 10,
                        name: 'Mashiko-Yaki Saucer',
                        uri: '/product/6'
                    }
                ]
            },
            {
                id: 3,
                name: 'Journal',
                uri: '/journal'
            },
            {
                id: 4,
                name: 'More',
                uri: '/more',
                children: [
                    {
                        id: 11,
                        name: 'First',
                        uri: '/first'
                    },
                    {
                        id: 12,
                        name: 'Second',
                        uri: '/second'
                    }
                ]
            }
        ]
    };

    list = items => (
        <ul className="Menu">
            {this.item(items)}
        </ul>
    );

    item = items => items.map(item => (
        <li className={`Menu__item ${item.children ? 'has-children' : ''}`} key={item.id}>
            <NavLink className="Menu__link" to={item.uri}>{item.name}</NavLink>

            {item.children && this.list(item.children)}
        </li>
    ));

    render() {
        return this.list(this.state.menu);
    }
}

export default Menu;
