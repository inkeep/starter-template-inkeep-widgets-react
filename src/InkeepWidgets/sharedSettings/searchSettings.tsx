import { InkeepSearchSettings } from "@inkeep/widgets";

export const inkeepSearchSettings: InkeepSearchSettings = {
  // Placeholder text for the search input field.
  // placeholder: "Search for anything...",

  // The default query that will appear in the search bar.
  // defaultQuery: '',

  // Option to enable 'All' tab in the search results. Default is true.
  // isAggregateResultsTabEnabled: true,

  // Map of category names to labels for documentation.
  // documentationCategoryMetadata: { 'docs': 'Documentation' },

  // Option to flatten the documentation categories into a single tab. Default is false.
  // areDocumentationCategoriesFlattened: false,

  // Option to open links in a new tab. Default is false.
  shouldOpenLinksInNewTab: true,

  // Ref to the component's callable functions for search.
  // searchCallableFunctionsRef: React.createRef<SearchCallableFunctions>(),

  // Callback for when the search query changes.
  // handleSearchQueryChange: (query: string) => console.log(query),

  // Option to control the search query externally via updateSearchQuery and handleSearchQueryChange.
  // isControlledSearchQuery: false,
};
