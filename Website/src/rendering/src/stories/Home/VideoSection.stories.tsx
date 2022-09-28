import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import VideoSection from '../../components/Home/VideoSection';

export default {
  title: 'Components/Home/VideoSection',
  component: VideoSection,
} as ComponentMeta<typeof VideoSection>;

const Template: ComponentStory<typeof VideoSection> = (args) => <VideoSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'VideoSection',
  },
  rendering: {
    componentName: 'VideoSection',
    dataSource: '/sitecore',
  },
};
