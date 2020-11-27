import React from "react";
import { shallow, ShallowWrapper } from 'enzyme';
import Button, { IButtonProps } from '../../../../components/Button';

const defaultProps: IButtonProps = {
    link: 'test link',
    cta: 'test cta'
}

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Button {...setupProps} />);
}

describe('Button', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a button', () => {
        expect(wrapper.prop('href')).toEqual(defaultProps.link);
        expect(wrapper.find('.button').text()).toEqual(defaultProps.cta);
    });
});