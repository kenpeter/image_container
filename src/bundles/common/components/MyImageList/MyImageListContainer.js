import React, {Component} from 'react';
import MyImage from './MyImage';

class MyImageListContainerContainer extends Component {
    constructor() {
        super();

        this.state = {
            srcs: []
        };
    }

    componentDidMount() {
        fetch('http://www.mocky.io/v2/5c171a7b2f00008000b084a1')
            .then(response => response.json())
            .then((srcs) => {
                this.setState({
                    srcs: srcs
                })
            })
            .catch(e => {
                console.error(e);
            });
    }

    render() {
        return (
            <div className="image-list">
                {this.state.srcs.map((src, index) => {
                    return (
                        <MyImage key={index} src={src} />
                    );
                })}
            </div>
        )
    }
}

export default MyImageListContainerContainer