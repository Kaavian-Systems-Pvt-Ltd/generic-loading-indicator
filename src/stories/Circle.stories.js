import React from "react";
import { Content } from "../component/content";
export default {
    title: 'Loading/content',
    component: Content,
    borderTopColor: { control: 'color' },
};
//Loading
const Template = (args) => <Content {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};
