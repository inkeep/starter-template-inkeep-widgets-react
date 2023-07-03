import {
  InkeepSearchBarProps,
  InkeepSearchBar,
  InkeepSearchBarSettings,
} from "@inkeep/widgets";
import { inkeepBaseSettings } from "./sharedSettings/baseSettings";
import { inkeepAIChatSettings } from "./sharedSettings/aiChatSettings";
import { inkeepSearchSettings } from "./sharedSettings/searchSettings";

export const searchBarModalSettings: InkeepSearchBarSettings = {
  openShortcutKey: "/",
};

const inkeepSearchBarWidgetProps: InkeepSearchBarProps = {
  ...searchBarModalSettings,
  baseSettings: { ...inkeepBaseSettings },
  aiChatSettings: { ...inkeepAIChatSettings },
  searchSettings: { ...inkeepSearchSettings },
};

export const SearchBar = () => {
  return <InkeepSearchBar {...inkeepSearchBarWidgetProps} />;
};
