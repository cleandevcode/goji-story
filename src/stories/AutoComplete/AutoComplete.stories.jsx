import React from 'react';

import {AutoComplete} from './AutoComplete';

export default {
    title: 'Example/AutoComplete',
    component: AutoComplete,
    argTypes: {}
}

const Template = (args) => <AutoComplete {...args} />

export const Regular = Template.bind({})

Regular.args = {}