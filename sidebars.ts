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
    // ① 問いの入り口 ── なぜ今、この探求か
    {
      type: 'category',
      label: '① 問いの入り口',
      items: [
        'コンセプト/Beingとは',
        'コンセプト/Inside-Outとは',
      ],
    },
    // ② 意識の地図 ── 全体を貫くマスターフレームワーク
    {
      type: 'category',
      label: '② 意識の地図',
      items: [
        'フレームワーク/意識の相転移',       // H₂Oモデル：最大包括
        'コンセプト/パラダイムシフトの地図',  // ステージ地図
        'フレームワーク/エネルギーの層と言語', // パワー/フォース：H₂Oモデルの別角度
      ],
    },
    // ③ 仕組みと気づき ── なぜそうなるのか・何に気づくべきか
    {
      type: 'category',
      label: '③ 仕組みと気づき',
      items: [
        'フレームワーク/充足意識と不足意識',       // ポジティブ・ネガティブの深掘り
        'フレームワーク/自己重要感の二つの源泉', // 水槽/井戸のメカニズム
        'フレームワーク/幸せエネルギー拡張の法則', // 源との共同創造
        'コンセプト/理想の自分からの解放',         // 罠と解放
        'フレームワーク/普通であること',            // 概念の再解釈
      ],
    },
    // ④ 世界観の根拠 ── なぜそれが真実か
    {
      type: 'category',
      label: '④ 世界観の根拠',
      items: [
        'フレームワーク/量子力学とBeing',
        'フレームワーク/意識とは何か',
        'フレームワーク/哲学的アプローチ',
        'フレームワーク/縄文と充足意識',
        'フレームワーク/なぜ内側が外側を変えるのか',
        'コンセプト/コントロールか共鳴か',
      ],
    },
    // ⑤ AI時代の問い ── 現代文脈での読み直し
    {
      type: 'category',
      label: '⑤ AI時代の問い',
      items: [
        'フレームワーク/AIは意識の拡張装置',
        'フレームワーク/左脳の上位互換',
        'コンセプト/AI×自己探求',
      ],
    },
    // ⑥ 探求の手法 ── 実践・ツール（→ 新たな①へ戻る）
    {
      type: 'category',
      label: '⑥ 探求の手法',
      items: [
        'フレームワーク/占いと自己理解',
        'フレームワーク/369数秘術',
      ],
    },
  ],
};

export default sidebars;
