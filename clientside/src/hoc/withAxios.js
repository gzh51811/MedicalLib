import React, {Component} from 'react';
import axios from 'axios';

export default (Com) => {
    return class xxx extends Component {
        render() {
            return <Com axios={axios} />
        }
    }
}