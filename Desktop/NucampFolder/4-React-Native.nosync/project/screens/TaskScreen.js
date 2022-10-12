import RenderTask from '../features/todo/RenderTask';

const TaskScreen = (props) => {
    return <RenderTask task={props.task} />;
};

export default TaskScreen;