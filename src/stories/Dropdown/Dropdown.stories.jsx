import React from 'react';

import { Dropdown } from './Dropdown';

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
    argTypes: {}
}

const Template = (args) => <Dropdown {...args} />

export const Regular = Template.bind({});
Regular.args = {
    
}