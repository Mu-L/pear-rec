import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { DesktopOutlined } from '@ant-design/icons';

const FullScreen = (props) => {
  const { t } = useTranslation();

  function handleFullRecordScreen() {
    if (!props.isRecording) {
      window.electronAPI?.sendRsCloseWin();
      window.electronAPI
        ? window.electronAPI.sendRfsOpenWin()
        : window.open('/recorderFullScreen.html');
    }
  }

  return (
    <div
      className={`${props.isRecording ? 'disabled' : ''} toolbarIcon fullRecordScreenBtn`}
      title={t('recorderScreen.fullRecordScreen')}
      onClick={handleFullRecordScreen}
    >
      <DesktopOutlined />
    </div>
  );
};

export default FullScreen;
