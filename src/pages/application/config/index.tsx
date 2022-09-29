import { ProCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Space } from 'antd';
import Editor from '@monaco-editor/react';

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <PageContainer>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard
          title="application name"
          split={responsive ? 'horizontal' : 'vertical'}
          bordered
          headerBordered
        >
          <ProCard title="config" colSpan="70%">
            <Editor
              height="50vh"
              theme="light"
              defaultLanguage="yaml"
              defaultValue={`---
server:
  port: 8080
`}
            />
          </ProCard>
          <ProCard title="config labels">
            <div style={{ height: 360 }}>右侧内容</div>
          </ProCard>
        </ProCard>
        <ProCard>
          <Space direction={'horizontal'}>
            <Button type={'primary'}>publish to config center</Button>
          </Space>
          <Space
            style={{
              float: 'right',
            }}
          >
            <Button type="primary">保存</Button>
            <Button>重置</Button>
          </Space>
        </ProCard>
        <ProCard></ProCard>
      </RcResizeObserver>
    </PageContainer>
  );
};
