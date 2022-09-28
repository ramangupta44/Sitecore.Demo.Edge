import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Video from '../../components/Home/Video';

export default {
  title: 'Components/Home/Video',
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'Video',
  },
  rendering: {
    componentName: 'Video',
    dataSource: '/sitecore',
  },
};
