import { render } from '@testing-library/react';
import { mount } from "enzyme";
import Home from "../pages/Home";
import Calendar from "../pages/Calendar";
import Tasks from "../pages/Tasks";
import { Route, Switch, MemoryRouter } from "react-router-dom";
import App from '../App';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('App should load', () => {
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
  });

  test('renders without crashing', () => {
    render(<App />);
  });

  test('loads homepage by default', () => {
    const wrapper = mount(<App />);

    const homePage = wrapper.find(Home);
    expect(homePage.exists()).toBeTruthy();
  });

  test('loads calendar page when routed', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/calendar"]} initialIndex={0}>
        <Switch>
          <Route path="/calendar" render={() => <Calendar />}/>
        </Switch>
      </MemoryRouter>
    );

    const calPage = wrapper.find(Calendar);
    expect(calPage.exists()).toBeTruthy();
  });

  test('loads tasks page when routed', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/tasks"]} initialIndex={0}>
        <Switch>
          <Route path="/tasks" render={() => <Tasks />}/>
        </Switch>
      </MemoryRouter>
    );

    const tasksPage = wrapper.find(Tasks);
    expect(tasksPage.exists()).toBeTruthy();
  });
});
