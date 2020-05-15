import { createSelector } from 'reselect';

export const directorySelector = (state) => state.directory;

export const directorySectionSelector = createSelector([directorySelector], (directory)=> directory.sections);