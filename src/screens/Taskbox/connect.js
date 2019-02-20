import { connect } from 'react-redux';
import actions, { archiveTask, pinTask } from './actions';


export function mapStateToProps(state, props) {
    return {
        tasks: state.tasks.filter(t => t.state === actions.inboxTask || t.state === actions.pinTask)
    }
}

// const mapDispatchToProps = {
//     onArchiveTask: archiveTask,
//     onPinTask: pinTask
// };
const mapDispatchToProps = dispatch => {
    return {
        onArchiveTask: (id) => dispatch({ type: actions.archiveTask, id }),
        onPinTask: (id) => {
            console.log(`onPinTask id: ${id}`)
            dispatch({ type: actions.pinTask, id })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
