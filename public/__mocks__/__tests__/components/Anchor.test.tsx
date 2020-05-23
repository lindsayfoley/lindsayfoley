import React from "react";
import { shallow } from 'enzyme';
import Anchor, { IAnchorProps } from '../../../../components/Anchor';

const defaultProps: Pick<IAnchorProps, 'link'> = {
    link: '#'
}

const setup = (props = {}) => {
    const setupProps: IAnchorProps = {...defaultProps, ...props}
    return shallow(<Anchor {...setupProps} />);
};

describe('Anchor', () => {

    it('opens link in a new window when the link is set to external', () => {
        const wrapper = setup({ link: '#', external: true });
        expect(wrapper.find('target').length).toBe(1);
    });

});