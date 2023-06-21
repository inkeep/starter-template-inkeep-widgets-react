import {
  InkeepSearchBarModalProps,
  InkeepSearchBarWidget,
  InkeepSearchBarWidgetProps,
} from "@inkeep/inkeep-widget-library";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

export const searchBarModalSettings: InkeepSearchBarModalProps = {
  openShortcutKey: "/",
};

const inkeepSearchBarWidgetProps: InkeepSearchBarWidgetProps = {
  ...searchBarModalSettings,
  baseSettings: { ...inkeepBaseSettings },
  aiChatSettings: { ...inkeepAIChatSettings },
  searchSettings: { ...inkeepSearchSettings },
};

export const SearchBar = () => {
  return <InkeepSearchBarWidget {...inkeepSearchBarWidgetProps} />;
};
