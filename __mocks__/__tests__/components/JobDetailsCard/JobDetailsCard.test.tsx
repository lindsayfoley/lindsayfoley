import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICompanyDetails } from '../../../../utils/workExperience';
import JobDetailsCard, { IJobDetailsCardProps } from '../../../../components/JobDetailsCard';
import Anchor from '../../../../components/Anchor';

const companyDetailsDefaultProps: ICompanyDetails = {
    id: 'scampi',
    companyName: 'Scampi The Cat',
    description: <p>Bring your cat to work at Scampi The Cat!</p>,
    link: 'scampithecat.com'
  }

const defaultProps: IJobDetailsCardProps = {
    company: companyDetailsDefaultProps,
    className: 'testClass',
    handleClick: jest.fn(),
    summaryIsVisible: true
}

const setup = (props = {}) => {
    const setupProps: IJobDetailsCardProps = { ...defaultProps, ...props }
    return shallow(<JobDetailsCard {...setupProps} />);
};

describe('JobDetailsCard', () => {

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders all required card details', () => {
        expect(wrapper.find('article')).toHaveLength(1);
        expect(wrapper.find('h3').text()).toContain(defaultProps.company.companyName);
        expect(wrapper.find('.description')).toHaveLength(1);
        expect(wrapper.find(Anchor).props()).toHaveProperty('link', defaultProps.company.link);
    });

    it('doesn\'t render the class to toggle visibility of descriptions by default', () => {
        expect(wrapper.find('.show-details')).toHaveLength(0);
    });

    it('fires an onClick event when job card is clicked', () => {
        wrapper.find('.flip-card').simulate('click');
        expect(defaultProps.handleClick).toBeCalledTimes(1);
    });
});
