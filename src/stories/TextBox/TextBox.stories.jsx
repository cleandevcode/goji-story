import React from 'react';

import { TextBox } from './TextBox';

export default {
    title: 'Example/TextBox',
    component: TextBox,
    argTypes: {}
}

const Template = (args) => <TextBox {...args} />

export const Regular = Template.bind({});
Regular.args = {
    placeholder: "This is a placeholder",
}
