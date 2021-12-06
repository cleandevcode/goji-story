import React from 'react';

import { Text } from './Text'

export default {
    title: 'Example/Text',
    component: Text,
    argTypes: {}
}

const Template = (args) => <Text {...args} />

export const Regular = Template.bind({});
Regular.args = {
    mode: 'regular',
    label: 'Regular Text'
}

export const MainHeading = Template.bind({})
MainHeading.args = {
    mode: 'main_heading',
    label: 'Main Heading'
}

export const SubHeading = Template.bind({});
SubHeading.args = {
    mode: 'sub_heading',
    label: 'Sub Heading'
}

export const Label = Template.bind({})
Label.args = {
    mode: 'label',
    label: 'Label'
}