declare const VERSION: string // provided by webpack define plugin.

export const version = (typeof VERSION == 'undefined') ? "RUNNING TESTS" : VERSION