import React, {Component} from 'react';

export default class MyImage extends Component {
    render() {
        let url = 'https://' + this.props.src;

        return (
            <div>
                <img src={url} />
            </div>
        );
    }
}