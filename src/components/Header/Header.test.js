import { shallow, mount } from 'enzyme';
import {Header} from "./Header";

describe('<Header />', () => {

	it('mount with auth', () => {
		const header = shallow(<Header isAuth={true} />);

		expect(header).toMatchSnapshot();
	});


	it('mount without auth', () => {
		const header = shallow(<Header isAuth={false} />);

		expect(header).toMatchSnapshot();
	});


	it('click on logout', () => {
		const logoutFn = jest.fn();
		const header = shallow(<Header isAuth={true} onLogout={logoutFn}/>);
		header.find('.header__logout-button').simulate('click');

		expect(logoutFn).toHaveBeenCalledTimes(1);
	});

});
