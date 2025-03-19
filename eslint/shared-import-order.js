module.exports = {
  /**
   * Shared import/order rule to be extended by apps and libs.
   *
   * @param {Array<{
   *  pattern: string,
   *  group: "builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type",
   *  position: "before" | "after",
   * }>} additionalPathGroups
   */
  withDefaultImportOrderGroups: (additionalPathGroups = []) => [
    'error',
    {
      groups: [
        'unknown',
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'type',
        'object',
      ],
      pathGroups: [
        {
          pattern: '@azure/**',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@parxl/**',
          group: 'internal',
          position: 'before',
        },

        ...additionalPathGroups,

        // local project imports should use tidle as prefix
        { pattern: '~/**', group: 'internal', position: 'after' },
      ],
      pathGroupsExcludedImportTypes: [], // required
      distinctGroup: true,
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
        orderImportKind: 'asc',
        caseInsensitive: true /* ignore case. Options: [true, false] */,
      },
    },
  ],
};
