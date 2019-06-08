/***
 * file name : Loading/enchanter.js
 * description : Loading map state
 * create date : 2019-01-09
 * creator : saltgamer
 ***/
import {connect} from "react-redux";
import Loading from './index';

function mapStateToProps(state) {
    const {
        currentLoading
    } = state;
    return {
        currentLoading
    };
}

export default connect(mapStateToProps)(Loading);


