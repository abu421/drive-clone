import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import FolderComponent from '../components/folder/folder';
import styles from "@/components/folder/folder.module.scss"
import { Folder as FolderIcon, FileText } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Folder',
  component: FolderComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof FolderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Folder: Story = {
  args: {
    icon: <FolderIcon className={styles.icon} size={64} color={"rgb(59, 130, 246)"}/>,
    title: 'Documents',
    lastModified: '2 days ago'
  },
};

export const File: Story = {
  args: {
    icon: <FileText  className={styles.icon} size={64} color={"rgb(234, 45, 12)"}/>,
    title: 'Resume.pdf',
    lastModified: '1 days ago',
    size: '2.4 MB'
  },
};
