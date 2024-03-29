import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Extra: Story = (args) => <Main {...args} />
Extra.args = {
  title: 'Kluser Tecnologia',
  description: 'JavaScript'
}
