import React from 'react';
import { shallow } from 'enzyme';
import Anchor, { IAnchorProps } from '../../../../components/Anchor';

const defaultProps: IAnchorProps = {
    link: '/portfolio',
}

const optionalProps: IAnchorProps = {
    link: '/portfolio',
    icon: 'fa-github-alt',
    cta: 'View my GitHub',
    titleText: 'Find me on GitHub;',
    external: false
}

const setup = (props = {}) => {
    const setupProps: IAnchorProps = { ...defaultProps, ...props }
    return shallow(<Anchor {...setupProps} />);
};

describe('Anchor', () => {

    it('renders correctly', () => {
        const wrapper = setup(defaultProps);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a link', () => {
        const wrapper = setup();
        expect(wrapper.find('[href]').length).toBe(1);
    });

    it('renders an icon', () => {
        const wrapper = setup({ icon: optionalProps.icon });
        expect(wrapper.find('i').length).toBe(1);
        expect(wrapper.find('i').hasClass(optionalProps.icon));
    });

    it('adds a title attribute', () => {
        const wrapper = setup({ titleText: optionalProps.titleText });
        expect(wrapper.find('a').props()).toHaveProperty('title', optionalProps.titleText);
    });

    it('displays a cta', () => {
        const wrapper = setup({ cta: optionalProps.cta });
        expect(wrapper.find('a').text()).toEqual(optionalProps.cta);
    });

    it('adds extra attributes to links when external is true', () => {
        const wrapper = setup();
        expect(wrapper.find('a').prop('target')).toEqual('_blank');
        expect(wrapper.find('a').prop('rel')).toEqual('noreferrer');
    });
});