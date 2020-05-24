import React from "react";
import { mount } from 'enzyme';
import Nav, { INavProps } from '../../../../../components/Nav';
import Button, { IButtonProps } from '../../../../../components/Button';

const mockButtonOne: IButtonProps = {
    link: "portfolio",
    cta: "View my work"
}

const mockButtonTwo: IButtonProps = {
    link: "/",
    cta: "back to home"
}

const defaultProps: INavProps = {
    buttonArr: [mockButtonOne, mockButtonTwo]
}

describe('Nav', () => {

    it('renders correctly', () => {
        const wrapper = mount(<Nav {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a nav with one button', () => {
        const wrapper = mount(<Nav buttonArr={[mockButtonTwo]} />);
        expect(wrapper.find(Button).length).toBe(1);
        expect(wrapper.find(Button).first().text()).toEqual(mockButtonTwo.cta);
    });

    it('renders a nav with multiple buttons', () => {
        const wrapper = mount(<Nav {...defaultProps} />);
        expect(wrapper.find(Button).length).toBe(2);
        expect(wrapper.find(Button).first().text()).toEqual(mockButtonOne.cta);
        expect(wrapper.find(Button).last().text()).toEqual(mockButtonTwo.cta);
    });
});