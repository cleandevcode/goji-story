import React from 'react';

import { Card } from './Card';

export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {}
}

const Template = (args) => <Card {...args} />

export const Regular = Template.bind({});
Regular.args = {
    
}