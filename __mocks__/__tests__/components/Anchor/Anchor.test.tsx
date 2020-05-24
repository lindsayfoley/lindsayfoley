import React from 'react';
import { shallow } from 'enzyme';
import Anchor, { IAnchorProps } from '../../../../components/Anchor';

const defaultProps: Pick<IAnchorProps, 'link'> = {
    link: 'test'
}

const setup = (props = {}) => {
    const setupProps: IAnchorProps = { ...defaultProps, ...props }
    return shallow(<Anchor {...setupProps} />);
};

describe('Anchor', () => {

    it('renders correctly', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it('only renders a link', () => {
        const wrapper = setup();
        expect(wrapper.find('[href]').length).toBe(1);
        expect(wrapper.find('i').length).toBe(0);
        expect(wrapper.find('[title]').length).toBe(0);
        expect(wrapper.find('a').text()).toEqual('');
    });

    it('renders an icon', () => {
        const wrapper = setup({ icon: 'fa fa-paper-plane' });
        expect(wrapper.find('i').length).toBe(1);
    });

    it('adds a title attribute', () => {
        const wrapper = setup({ title: 'test title' });
        expect(wrapper.find('[title]').length).toBe(1);
    });

    it('displays a cta', () => {
        const testCta = 'I am a call to action';
        const wrapper = setup({ cta: testCta });
        expect(wrapper.find('a').text()).toEqual(testCta);
    });

    it('adds target blank to links when external is true', () => {
        const wrapper = setup({ external: true });
        expect(wrapper.find('a').prop('target')).toEqual('_blank');
    });
});