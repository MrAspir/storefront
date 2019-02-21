import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    state = {
        menu: [
            {
                id: 1,
                name: 'Home',
                uri: '/'
            },
            {
                id: 2,
                name: 'Shop',
                uri: '/',
                children: [
                    {
                        id: 5,
                        name: 'First',
                        uri: '/'
                    },
                    {
                        id: 6,
                        name: 'Second',
                        uri: '/'
                    }
                ]
            },
            {
                id: 3,
                name: 'Journal',
                uri: '/'
            },
            {
                id: 4,
                name: 'More',
                uri: '/',
                children: [
                    {
                        id: 7,
                        name: 'First',
                        uri: '/'
                    },
                    {
                        id: 8,
                        name: 'Second',
                        uri: '/'
                    }
                ]
            }
        ]
    };

    list = menu => (
        <ul className="Menu">
            {this.item(menu)}
        </ul>
    );

    item = items => items.map(item => (
        <li className={`Menu__item ${item.children ? 'has-children' : ''}`} key={item.id}>
            <Link className="Menu__link" to={item.uri}>{item.name}</Link>

            {item.children && this.list(item.children)}
        </li>
    ));

    render() {
        return this.list(this.state.menu);
    }
}

export default Menu;
