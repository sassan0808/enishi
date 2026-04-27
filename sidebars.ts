import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'コンセプト',
      items: [
        'コンセプト/Inside-Outとは',
        'コンセプト/Beingとは',
        'コンセプト/パラダイムシフトの地図',
        'コンセプト/AI×自己探求',
      ],
    },
    {
      type: 'category',
      label: 'フレームワーク',
      items: [
        'フレームワーク/意識の相転移',
        'フレームワーク/幸せエネルギー拡張の法則',
        'フレームワーク/エネルギーの層と言語',
        'フレームワーク/量子力学とBeing',
        'フレームワーク/哲学的アプローチ',
        'フレームワーク/占いと自己理解',
        'フレームワーク/エネルギーを読む',
      ],
    },
    {
      type: 'category',
      label: 'サービス',
      items: [
        'サービス/個別相談',
        'サービス/セルフコーチング土台作り',
        'サービス/企業向け業務委託',
      ],
    },
    {
      type: 'category',
      label: 'ブレスト（メモ）',
      collapsed: true,
      items: ['ブレスト/概要'],
    },
  ],
};

export default sidebars;
