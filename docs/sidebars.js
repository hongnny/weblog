/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'javascript',
      items: [
        'javascript/extends',
        'javascript/extends-static',
        'javascript/extends-fun',
        'javascript/set-propotype',
        'javascript/regexp'
      ],
    },
    {
      type: 'category',
      label: 'typescript',
      items: [
        'typescript/tsconfig',
        'typescript/guard',
        'typescript/abstract',
        'typescript/keyof',
        'typescript/generics',
        'typescript/infer',
        'typescript/util-types',
        'typescript/class',
      ],
    },
    {
      type: 'category',
      label: 'webpack',
      items: [
        'webpack/require-context'
      ]
    },
    {
      type: 'category',
      label: 'git',
      items: [
        'git/git',
        'git/git-cmd',
        'git/git-tag'
      ]
    },
    {
      type: 'category',
      label: 'svg',
      items: [
        'svg/bezier'
      ]
    },
    {
      type: 'category',
      label: '算法',
      items: [
        'algorithmic/complexity/index'
      ]
    },
    {
      type: 'category',
      label: 'react',
      items: [
        'react/react/index',
        'react/react-router-dom/index',
        'react/redux/index'
      ]
    },
  ],
};

module.exports = sidebars;
