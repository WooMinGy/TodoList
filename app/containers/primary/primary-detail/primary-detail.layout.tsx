import { ReactNode, memo } from 'react';

import { BasicLayout, Row, Rows } from '@/components';

type IPrimaryDetailLayoutProps = {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
};

export const PrimaryDetailLayout = memo<IPrimaryDetailLayoutProps>(
  ({ header, content, footer }) => {
    return (
      <BasicLayout>
        <Rows>
          <Row height="content">{header}</Row>
          <Row height="fluid">{content}</Row>
          <Row height="content">{footer}</Row>
        </Rows>
      </BasicLayout>
    );
  },
);
