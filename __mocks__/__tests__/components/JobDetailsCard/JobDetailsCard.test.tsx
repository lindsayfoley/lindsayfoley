import React from 'react';
import { shallow } from 'enzyme';
import { ICompanyDetails } from '../../../../utils/workExperience';
import JobDetailsCard, { IJobDetailsCardProps } from '../../../../components/JobDetailsCard';

const companyDetailsDefaultProps: ICompanyDetails = {
    id: 'scampi',
    companyName: 'Scampi The Cat',
    description: <p>Bring your cat to work at Scampi The Cat!</p>,
    link: 'scampithecat.com'
  }

const defaultProps: IJobDetailsCardProps = {
    company: companyDetailsDefaultProps,
    className: 'testClass',
    handleClick: jest.fn,
    summaryIsVisible: true
}

const setup = (props = {}) => {
    const setupProps: IJobDetailsCardProps = { ...defaultProps, ...props }
    return shallow(<JobDetailsCard {...setupProps} />);
};

describe('JobDetailsCard', () => {

    it('renders correctly', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
