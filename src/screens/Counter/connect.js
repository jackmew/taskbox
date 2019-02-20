import { connect } from 'react-redux';
import actionTypes, { increment, decrement } from './actions';

export function mapStateToProps(state, props) {
    return {
        count: state.count
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
    decrement
};
export default connect(mapStateToProps, mapDispatchToProps)
