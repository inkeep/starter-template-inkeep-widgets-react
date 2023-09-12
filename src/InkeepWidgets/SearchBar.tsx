import {
  InkeepSearchBarProps,
  InkeepSearchBar,
  InkeepModalSettings,
} from "@inkeep/widgets";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

export const searchBarModalSettings: InkeepModalSettings = {
  openShortcutKey: "/",
};

const inkeepSearchBarWidgetProps: InkeepSearchBarProps = {
  baseSettings: { ...inkeepBaseSettings },
  aiChatSettings: { ...inkeepAIChatSettings },
  searchSettings: { ...inkeepSearchSettings },
  modalSettings: { ...searchBarModalSettings },
};

export const SearchBar = () => {
  return <InkeepSearchBar {...inkeepSearchBarWidgetProps} />;
};
