import React from "react";
import { shallow } from 'enzyme';
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

    it('renders correctly', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a button', () => {
        const wrapper = setup();
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('[href]').length).toBe(1);
        expect(wrapper.prop('href')).toEqual(defaultProps.link);
        expect(wrapper.find('button').text()).toEqual(defaultProps.cta);
    });
});