// 单词卡的词库。每本书一组，新书加在 BOOKS 列表的最后。
// 字段说明：
//   w      卡片正面的大字（书里的原样）
//   base   原形（变了形才写）
//   cn     中文意思（本书语境）
//   note   小提示（可不写）
//   s      书里的原句
//   hl     原句里要高亮的部分（和原句里写法一致）
//   emoji  能准确表示意思才写
//   img    插图文件名（放在 images/书的文件夹/ 里）
//   where  出处

var BOOKS = [
  {
    id: "01-strange-box",
    title: "The Strange Box",
    series: "Time Chronicles · 1",
    words: [
      // ---------- Introduction · p.3 ----------
      { w: "passed", base: "pass", cn: "（时间）过去了", note: "time has passed = 时间过去了",
        s: "A long time has passed since the children have been on a magic key adventure.", hl: "passed",
        img: "p03-intro.jpg", where: "Introduction · p.3" },
      { w: "adventure", cn: "冒险", emoji: "🗺️",
        s: "A long time has passed since the children have been on a magic key adventure.", hl: "adventure",
        img: "p03-intro.jpg", where: "Introduction · p.3" },
      { w: "forgotten", base: "forget", cn: "忘记了",
        s: "In fact, they have almost forgotten the last time the key glowed.", hl: "forgotten",
        img: "p03-intro.jpg", where: "Introduction · p.3" },
      { w: "secondary school", cn: "中学", note: "英国孩子大约 11 岁上中学", emoji: "🏫",
        s: "Biff and Chip are now ten, Kipper is eight, and Wilma has started secondary school.", hl: "secondary school",
        img: "p03-intro.jpg", where: "Introduction · p.3" },
      { w: "discovers", base: "discover", cn: "发现",
        s: "When Chip discovers a strange old box in his room, things begin to change forever.", hl: "discovers",
        img: "p03-intro.jpg", where: "Introduction · p.3" },
      { w: "strange", cn: "奇怪的",
        s: "When Chip discovers a strange old box in his room, things begin to change forever.", hl: "strange",
        img: "p03-intro.jpg", where: "Introduction · p.3" },

      // ---------- Chapter 1 ----------
      { w: "metal", cn: "金属",
        s: "The box was made of heavy metal and had strange markings on it.", hl: "metal",
        img: "ch1-metal.jpg", where: "Chapter 1" },
      { w: "markings", base: "marking", cn: "花纹、记号",
        s: "The box was made of heavy metal and had strange markings on it.", hl: "markings",
        img: "ch1-metal.jpg", where: "Chapter 1" },
      { w: "scratched", base: "scratch", cn: "刮、抠",
        s: "He scratched the lid with his finger-nail.", hl: "scratched",
        img: "ch1-metal.jpg", where: "Chapter 1" },
      { w: "lid", cn: "盖子",
        s: "He scratched the lid with his finger-nail.", hl: "lid",
        img: "ch1-metal.jpg", where: "Chapter 1" },
      { w: "rusty", cn: "生锈的", note: "rust = 锈",
        s: "“It’s rusty,” Biff said.", hl: "rusty",
        img: "ch1-metal.jpg", where: "Chapter 1" },
      { w: "odd", cn: "奇怪的",
        s: "“But the rust is an odd, green colour.”", hl: "odd",
        img: "ch1-metal.jpg", where: "Chapter 1" },

      { w: "downstairs", cn: "到楼下",
        s: "They took the box downstairs and Biff rubbed it with a scouring pad.", hl: "downstairs",
        img: "ch1-rub.jpg", where: "Chapter 1" },
      { w: "rubbed", base: "rub", cn: "擦、搓",
        s: "They took the box downstairs and Biff rubbed it with a scouring pad.", hl: "rubbed",
        img: "ch1-rub.jpg", where: "Chapter 1" },
      { w: "scouring pad", cn: "百洁布", note: "刷锅洗碗用的那种", emoji: "🧽",
        s: "They took the box downstairs and Biff rubbed it with a scouring pad.", hl: "scouring pad",
        img: "ch1-rub.jpg", where: "Chapter 1" },
      { w: "shone", base: "shine", cn: "发光、闪闪发亮", emoji: "✨",
        s: "Under the green rust, the metal shone with different colours.", hl: "shone",
        img: "ch1-rub.jpg", where: "Chapter 1" },
      { w: "spilled", base: "spill", cn: "洒出来",
        s: "“It looks like oil when it’s spilled on water,” said Biff.", hl: "spilled",
        img: "ch1-rub.jpg", where: "Chapter 1" },

      { w: "flung", base: "fling", cn: "扔、甩", note: "随手用力一扔",
        s: "He flung his football kit on the floor, went to the fridge and poured himself a glass of orange juice.", hl: "flung",
        img: "ch1-fridge.jpg", where: "Chapter 1" },
      { w: "poured", base: "pour", cn: "倒（水、果汁）", emoji: "🫗",
        s: "He flung his football kit on the floor, went to the fridge and poured himself a glass of orange juice.", hl: "poured",
        img: "ch1-fridge.jpg", where: "Chapter 1" },
      { w: "himself", cn: "他自己",
        s: "He flung his football kit on the floor, went to the fridge and poured himself a glass of orange juice.", hl: "himself",
        img: "ch1-fridge.jpg", where: "Chapter 1" },
      { w: "weird-looking", cn: "看起来怪怪的", note: "weird 奇怪 + looking 看起来",
        s: "“Hey! What a weird-looking box,” he said.", hl: "weird-looking",
        img: "ch1-fridge.jpg", where: "Chapter 1" },
      { w: "peculiar", cn: "奇怪的、古怪的",
        s: "“The inside is all peculiar. Look!”", hl: "peculiar",
        img: "ch1-fridge.jpg", where: "Chapter 1" },

      // 奇怪四兄弟
      { type: "group", w: "strange · odd · weird · peculiar", cn: "都是“奇怪的”",
        img: "ch1-fridge.jpg", where: "奇怪四兄弟",
        members: [
          { w: "strange", tip: "最常用", s: "When Chip discovers a strange old box in his room…", hl: "strange" },
          { w: "odd", tip: "和 strange 差不多", s: "But the rust is an odd, green colour.", hl: "odd" },
          { w: "weird", tip: "更口语，小朋友之间常说", s: "Hey! What a weird-looking box.", hl: "weird" },
          { w: "peculiar", tip: "比较书面", s: "The inside is all peculiar. Look!", hl: "peculiar" }
        ] },

      { w: "empty", cn: "空的",
        s: "The box was empty, but inside were metal grooves and slots.", hl: "empty",
        img: "p09-box.jpg", where: "Chapter 1 · p.9" },
      { w: "grooves", base: "groove", cn: "凹槽",
        s: "The box was empty, but inside were metal grooves and slots.", hl: "grooves",
        img: "p09-box.jpg", where: "Chapter 1 · p.9" },
      { w: "slots", base: "slot", cn: "插槽、窄缝",
        s: "The box was empty, but inside were metal grooves and slots.", hl: "slots",
        img: "p09-box.jpg", where: "Chapter 1 · p.9" },
      { w: "complicated", cn: "复杂的",
        s: "It looked as if something complicated had once fitted exactly into it.", hl: "complicated",
        img: "p09-box.jpg", where: "Chapter 1 · p.9" },
      { w: "fitted", base: "fit", cn: "正好放进、刚好装得下",
        s: "It looked as if something complicated had once fitted exactly into it.", hl: "fitted",
        img: "p09-box.jpg", where: "Chapter 1 · p.9" },
      { w: "exactly", cn: "正好、完全",
        s: "It looked as if something complicated had once fitted exactly into it.", hl: "exactly",
        img: "p09-box.jpg", where: "Chapter 1 · p.9" },

      { w: "collect", cn: "来取、收集",
        s: "That Saturday, Wilma’s mum came to the house to collect things for her second-hand stall.", hl: "collect",
        img: "ch1-stall.jpg", where: "Chapter 1" },
      { w: "vase", cn: "花瓶", emoji: "🏺",
        s: "“There’s a vase, some china cats and a picture that none of us likes.”", hl: "vase",
        img: "ch1-stall.jpg", where: "Chapter 1" },
      { w: "spotted", base: "spot", cn: "看到、发现", note: "不是“斑点”", emoji: "👀",
        s: "Chip spotted the old box on the worktop.", hl: "spotted",
        img: "ch1-stall.jpg", where: "Chapter 1" },
      { w: "shook their heads", base: "shake their heads", cn: "摇头", note: "表示“不要”“不是”",
        s: "Biff and Kipper shook their heads.", hl: "shook their heads",
        img: "ch1-stall.jpg", where: "Chapter 1" },
      { w: "trouble", cn: "麻烦",
        s: "After that, the trouble began.", hl: "trouble",
        img: "ch1-stall.jpg", where: "Chapter 1" },

      // ---------- Chapter 2 · p.11 ----------
      { w: "event", cn: "大事、活动", emoji: "🎉",
        s: "The big event of the weekend was the school fair.", hl: "event",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" },
      { w: "weekend", cn: "周末", emoji: "📅",
        s: "The big event of the weekend was the school fair.", hl: "weekend",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" },
      { w: "fair", cn: "义卖会、集市", note: "不是“公平”", emoji: "🎪",
        s: "The big event of the weekend was the school fair.", hl: "fair",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" },
      { w: "raised", base: "raise", cn: "筹集（钱）", note: "平时也有“举起”的意思", emoji: "💰",
        s: "The money raised at the fair was going to buy IT equipment.", hl: "raised",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" },
      { w: "IT equipment", cn: "电脑设备", note: "IT = 信息技术", emoji: "💻",
        s: "The money raised at the fair was going to buy IT equipment.", hl: "IT equipment",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" },
      { w: "busy", cn: "忙",
        s: "Mum had been busy making cakes to sell.", hl: "busy",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" },
      { w: "stall", cn: "摊位",
        s: "Biff, Chip and Kipper had filled a bag with old toys and games for the toy stall.", hl: "stall",
        img: "p11-fair.jpg", where: "Chapter 2 · p.11" }
    ]
  }
];
