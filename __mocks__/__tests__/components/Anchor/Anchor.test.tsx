import React from 'react';
import { shallow } from 'enzyme';
import Anchor, { IAnchorProps } from '../../../../components/Anchor';

const defaultProps: IAnchorProps = {
    link: '/portfolio',
    icon: 'fa-github-alt',
    cta: 'View my GitHub',
    title: 'Find me on GitHub;',
    external: false
}

const setup = (props = {}) => {
    const setupProps: IAnchorProps = { link: defaultProps.link, ...props }
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
        const wrapper = setup({ icon: defaultProps.icon });
        expect(wrapper.find('i').length).toBe(1);
        expect(wrapper.find('i').hasClass(defaultProps.icon));
    });

    it('adds a title attribute', () => {
        const wrapper = setup({ title: defaultProps.title });
        expect(wrapper.find('a').props()).toHaveProperty('title', defaultProps.title);
    });

    it('displays a cta', () => {
        const wrapper = setup({ cta: defaultProps.cta });
        expect(wrapper.find('a').text()).toEqual(defaultProps.cta);
    });

    it('adds extra attributes to links when external is true', () => {
        const wrapper = setup({ external: true });
        expect(wrapper.find('a').prop('target')).toEqual('_blank');
        expect(wrapper.find('a').prop('rel')).toEqual('noreferrer');
    });
});