module.exports = {
    types: [
      { value: 'docs', name: 'docs:\t\tDocumentation only changes' },
      { value: 'feat', name: 'feat:\t\tA new feature' },
      { value: 'fix', name: 'fix:\t\tA bug fix' },
      { value: 'refactor', name: 'refactor:\tA code change that neither fixes a bug nor adds a feature' },
      { value: 'revert', name: 'revert:\tRevert some commits' },
      { value: 'style', name: 'style:\tChanges that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)' },
      { value: 'test', name: 'test:\t\tAdd missing tests or correcting existing tests' },
    ],
  
    scopes: [
        { "name": "api" },
        { "name": "component" },
        { "name": "configuration" },
        { "name": "pages" },
        { "name": "redux" },
        { "name": "stylesheet" },
        { "name": "utils" },
        { "name": "other" }
    ]
  };
  