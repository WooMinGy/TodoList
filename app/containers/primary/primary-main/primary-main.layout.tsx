import { ReactNode, memo } from 'react';

import { BasicLayout, Row, Rows } from '@/components';

type IPrimaryMainLayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

export const PrimaryMainLayout = memo<IPrimaryMainLayoutProps>(({ header, content, footer }) => {
  return (
    <BasicLayout>
      <Rows>
        <Row height="content">{header}</Row>
        <Row height="fluid">{content}</Row>
        <Row height="content">{footer}</Row>
      </Rows>
    </BasicLayout>
  );
});
