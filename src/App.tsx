/* eslint-disable react/jsx-props-no-spreading */
import './App.css';
import {
  InkeepAIChatWidget,
  InkeepModalWidget,
  InkeepModalProps,
  InkeepAIChatProps,
  InkeepWidgetBaseProps,
  InkeepSearchProps,
  InkeepModalWidgetProps,
  useDisclosure,
} from '@inkeep/inkeep-widget-library';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const inkeepBaseSettings: InkeepWidgetBaseProps = {
    apiKey: '', // todo
    organizationId: 'inkeep',
    integrationId: 'inkeep', // todo
    product: '',
    organizationDisplayName: 'Inkeep',
    primaryBrandColor: '#00BFEA',
    userId: '', // todo
    userEmail: 'admin@inkeep.com',
    userName: 'Inkeep Admin',
    // theme: overrideTheme,
    adminToken: '',
  };

  const inkeepAIChatSettings: InkeepAIChatProps = {
    botName: 'Keepie',
    // userAvatarSrcUrl: 'path/to/user/avatar',
    // botAvatarSrcUrl: '/path/to/bot/avatar',
    // introMessage: 'Welcome to Inkeep :)'
    disclaimerTooltip: 'Some disclaimer text',
  };

  const inkeepSearchSettings: InkeepSearchProps = {
    placeholder: 'Ask me anything',
  };

  const inkeepModalSettings: InkeepModalProps = {
    isOpen,
    onClose,
    onShortcutKeyPressed: onOpen,
  };

  const inkeepAiChatProps = {
    baseSettings: { ...inkeepBaseSettings },
    ...inkeepAIChatSettings,
  };

  const inkeepModalWidgetProps: InkeepModalWidgetProps = {
    ...inkeepModalSettings,
    baseSettings: { ...inkeepBaseSettings },
    aiChatSettings: { ...inkeepAIChatSettings },
    searchSettings: { ...inkeepSearchSettings },
  };

  return (
    <div className="App">
      <InkeepModalWidget {...inkeepModalWidgetProps} />
      <div>
        <button
          type="button"
          onClick={onOpen}
          className="trigger-button"
        >
          Trigger modal
        </button>
      </div>
      <div>
        <div>
          <InkeepAIChatWidget {...inkeepAiChatProps} />
        </div>
      </div>
    </div>
  );
}

export default App;
