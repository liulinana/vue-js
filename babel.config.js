module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        "proposal": "minimal"
      }
    ],
    [
      "import",
      {
        "libraryName": "view-design",
        "libraryDirectory": "src/components"
      }
    ],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
