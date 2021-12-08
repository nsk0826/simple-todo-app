import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './components/FoundationStyles';
import TaskListContainer from './components/TaskList';
import Store from './Store';

const container = document.getElementById('contents');

ReactDOM.render(
    <Provider store={Store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <TaskListContainer />
        </ThemeProvider>
    </Provider>, 
    container,
);