import moment from 'moment';
import React, { useCallback, useMemo, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskAction, toggleCompleteAction } from '../actions/TaskActions';
import { ITask } from '../states/ITask';
import { styled } from './FoundationStyles';

const Task = styled.div<{ expiration: boolean }>`
  align-items: center;
  background-color: ${(p): string =>
    p.expiration ? 'inherit' : p.theme.SECONDARY_2_0};
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  padding: 10px;
  transition-duration: 0.2s;
  transition-property: all;
  /* (2) */
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 5px rgba(200, 200, 200, 4);
  }
`;

const TaskCheckBox = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  height: 2em;
  width: 2em;
`;

 const TaskCheck = styled.p`
 color: ${(p): string => p.theme.SECONDARY_1_3};
 font-size: 150%;
`;

const TaskBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  height: 3em;
  justify-content: space-around;
`;

const TaskRemove = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

const TaskName = styled.div`
  font-size: 120%;
`;

const Deadline = styled.div``;

const TaskRow: React.FC<{ data: ITask }> = props => {
    const { data } = props;
    const dispatch = useDispatch();
    
    const expration = useMemo(() => {
        return new Date() < data.deadline || data.complete;
    }, [data.deadline, data.complete]);

    const deadlineString = useMemo(() => {
        return moment(data.deadline).format('YYYY-MM-DD HH:mm');
    }, [data.deadline]);

    const onRowClick = useCallback(() => {
        dispatch(toggleCompleteAction(data.id));
    }, [data.id]);

    const onDeleteClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            dispatch(deleteTaskAction(data.id));
            e.stopPropagation();
        },
        [data.id],
    );

    return (
        <Task expiration={expration} onClick={onRowClick}>
            <TaskCheckBox>
                <TaskCheck>{data.complete ? '✔︎' : null}</TaskCheck>
            </TaskCheckBox>
            <TaskBody>
                <TaskName>{data.taskName}</TaskName>
                <Deadline>⏰{deadlineString}</Deadline>
            </TaskBody>
            <TaskRemove onClick={onDeleteClick}>❌</TaskRemove>
        </Task>
    );
};

export default TaskRow;






