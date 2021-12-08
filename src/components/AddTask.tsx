import moment from 'moment';
import React, { ChangeEvent, useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTaskAction } from '../actions/TaskActions';

// #region styled
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 1em 0;
  width: 100%;
`;

const TextBox = styled.input`
  box-sizing: border-box;
  width: 100%;
`;

const TaskNameBox = styled.p`
  flex-grow: 1;
`;

const DeadlineBox = styled.div``;

const AddButton = styled.button`
  background-color: ${(p): string => p.theme.SECONDARY_1_3};
  border-radius: 50%;
  color: white;
  display: block;
  font-size: 150%;
  height: 40px;
  padding: 0;
  width: 40px;
`;

const AddTask: React.FC = () => {
    const dispatch = useDispatch();
    const [deadline, setDeadline] = useState<Date>(
        moment().add('day', 1).toDate(),
    );
    const [taskName, setTaskName] = useState<string>('');
    const onChangeTaskName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setTaskName(e.currentTarget.value);
    }, []);

    const onChangeDeadLine = useCallback((date: Date ) => {
        setDeadline(date);
    }, []);

    const onClickAddButton = useCallback(() => {
        dispatch(
            addTaskAction({
                complete: false,
                deadline,
                taskName,
                id: '',
            }),
        );
    }, [deadline, taskName]);

return(
    <Container>
        <TaskNameBox>
            <label>
                task name
                <TextBox type="text" value={taskName} onChange={onChangeTaskName} />
            </label>
        </TaskNameBox>
        <DeadlineBox>
            <label>
                dead line
                <DatePicker
                    selected={deadline}
                    showTimeSelect={true}
                    dateFormat="yyyy-MM-dd HH:mm"
                    onChange={onChangeDeadLine}
                />
            </label>
        </DeadlineBox>
        <AddButton onClick={onClickAddButton}>+</AddButton>
    </Container>
    );
};

export default AddTask;