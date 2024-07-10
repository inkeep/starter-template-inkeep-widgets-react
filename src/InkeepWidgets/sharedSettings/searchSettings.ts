import React from "react";
import type { InkeepSearchSettings, SearchFunctions } from "@inkeep/uikit";

export const inkeepSearchSettings: InkeepSearchSettings = {
  // Placeholder text for the search input field.
  placeholder: "Search for anything...",

  // The default query that will appear in the search bar.
  // prefilledQuery: '',

  // Option to open links in a new tab. Default is false.
  shouldOpenLinksInNewTab: true,

  // Ref to the component's callable functions for search.
  // searchFunctionsRef: React.createRef<SearchFunctions>(),

  // Callback for when the search query changes.
  // handleSearchQueryChange: (query: string) => console.log(query),

  // Option to control the search query externally via updateSearchQuery and handleSearchQueryChange.
  // isControlledSearchQuery: false,

  // tabSettings: {
  //   // Option to enable 'All' tab in the search results. Default is true.
  //   isAllTabEnabled: true,
  //   rootBreadcrumbsToUseAsTabs: [],
  //   tabOrderByLabel: [],
  //   disabledDefaultTabs: [],
  //   alwaysDisplayedTabs: [],
  // },

  // max number of search results to return
  // maximumHitsLimit: 40,

  //	Number of milliseconds to wait before fetching search results. Default is 0.
  // debounceTime: 30,

  // Whether or not to show the Ask AI "<query>" card in the search results. Default true.
  // shouldShowAskAICard: false,
};
