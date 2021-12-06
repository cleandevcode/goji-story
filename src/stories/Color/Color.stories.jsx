import React from 'react';

import { Color } from './Color'

export default {
    title: 'Example/Color',
    component: Color,
    argTypes: {}
}

const Template = (args) => <Color {...args} />

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    mode: 'strong',
    label: 'Primary'
}


export const Red = Template.bind({});
Red.args = {
    color: 'red',
    mode: 'strong',
    label: 'Red'
}

export const Gray = Template.bind({});
Gray.args = {
    color: 'gray',
    mode: 'strong',
    label: 'Gray'
}

export const Violet = Template.bind({})
Violet.args = {
    color: 'violet',
    mode: 'strong',
    label: 'Violet'
}

export const Yellow = Template.bind({})
Yellow.args = {
    color: 'yellow',
    mode: 'strong',
    label: 'Yellow'
}