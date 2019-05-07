import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@material-ui/icons/Done';
import AddBox from '@material-ui/icons/AddBox';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Typography from '@material-ui/core/Typography';
import ListTasks from '../list';
import CreateTask from '../create-task';
import JoinToProject from '../join-to-project';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = () => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'transparent',
    },
});

const mockData = [{
    assigned: { name: 'Jan Kowalski', id: 12 },
    theme: 'Testowe zadanie',
    content: 'Treść testowego zadania',
    priority: 'low',
    status: 'todo'
}]

class AppTabSwitch extends React.Component {
    state = {
        value: 0,
        tasks: mockData,
        assigned: [],
        todo: [],
        finished: []
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        variant="scrollable"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Lista zadań" icon={<DashboardIcon />} />
                        <Tab label="Przypisane do mnie" icon={<HowToRegIcon />} />
                        <Tab label="Do zrobienia" icon={<WorkIcon />} />
                        <Tab label="Wykonane" icon={<DoneIcon />} />
                        <Tab label="Dodaj zadanie" icon={<AddBox />} />
                        <Tab label="Dołącz do projektu" icon={<PersonAdd />} />
                    </Tabs>
                </AppBar>
                {value === 0 && <ListTasks tasks={this.state.tasks}/>}
                {value === 1 && <ListTasks  tasks={this.state.assigned}/>}
                {value === 2 && <ListTasks  tasks={this.state.todo}/>}
                {value === 3 && <ListTasks  tasks={this.state.finished}/>}
                {value === 4 && <CreateTask />}
                {value === 5 && <JoinToProject />}
            </div>
        );
    }
}

AppTabSwitch.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTabSwitch);