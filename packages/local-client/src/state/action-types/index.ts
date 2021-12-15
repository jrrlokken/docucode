export enum ActionType {
  MOVE_CELL = 'move_cell',
  DELETE_CELL = 'delete-cell',
  INSERT_CELL_AFTER = 'insert-cell-after',
  UPDATE_CELL = 'update-cell',
  BUNDLE_START = 'bundle-start',
  BUNDLE_COMPLETE = 'bundle-complete',
  FETCH_CELLS = 'fetch_cells',
  FETCH_CELLS_COMPLETE = 'fetch_cells_complete',
  FETCH_CELLS_ERROR = 'fetch_cells_error',
  SAVE_CELLS_ERROR = 'save_cells_error',
}
