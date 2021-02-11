import React from 'react';
import {App} from "./App";
import { shallow, mount, render } from 'enzyme';

describe("<App />", () => {

	it("Should be render with loading", () => {
		const app = shallow(<App isLoading={true} isAuth={false}/>);
		expect(app).toMatchSnapshot();
	});

	it("App should be render with auth", () => {
		const app = shallow(<App isLoading={false} isAuth={true} />);
		expect(app).toMatchSnapshot();
	});

});