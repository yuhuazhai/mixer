import Clipboard from 'clipboard';
import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

function CopyButton({ text, children }: { text: string; children?: string }) {
  const copy = () => {
    const clipboard = new Clipboard('.copy', {
      text: () => {
        return text;
      },
    });
    clipboard.on('success', () => {
      message.info('复制成功');
      clipboard.destroy();
    });
    clipboard.on('error', () => {
      message.info('复制失败，请重新复制');
      clipboard.destroy();
    });
  };
  return (
    <Button icon={<CopyOutlined />} className="copy" onClick={copy}>
      {children}
    </Button>
  );
}

export default CopyButton;
