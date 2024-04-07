import { FC, ReactNode } from 'react';

import { Box } from '..';
import { palette } from '@/components/theme';

export type IBasicLayoutProps = {
  backgroundColor?: string;
  children: ReactNode;
  footer?: ReactNode;
};

export const BasicLayout: FC<IBasicLayoutProps> = ({ backgroundColor, children, footer }) => {
  return (
    <Box flex="fluid" style={{ backgroundColor: backgroundColor || palette['white-100'] }}>
      <Box flex="fluid">{children}</Box>
      <Box flex="content">{footer}</Box>
    </Box>
  );
};
