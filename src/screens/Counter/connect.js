import { connect } from 'react-redux';
import actionTypes, { increment, decrement, showNotification, hideNotification } from './actions';

export function mapStateToProps(state, props) {
    return {
        counter: state.counter
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: actionTypes.increment }),
//         decrement: () => dispatch({ type: actionTypes.decrement })
//     }
// }
const mapDispatchToProps = {
    increment,
    decrement,
    showNotification,
    hideNotification
};
export default connect(mapStateToProps, mapDispatchToProps)
