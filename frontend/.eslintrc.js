module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // setter 必须有对应的 getter，getter 可以没有对应的 setter
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    // 回调函数必须要有返回值
    'array-callback-return': 'warn',
    // switch语句必须要与default默认值
    'default-case': 'warn',
    // switch语句的default默认值必须在最后z
    'default-case-last': 'warn',
    // 有默认值的参数必须放在最后
    'default-param-last': 'warn',
    // getter 必须有返回值，并且禁止返回空
    'getter-return': 'warn',
    // setter 和 getter 必须写在一起
    'grouped-accessor-pairs': 'warn',
    // 必须使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: ['error', 'always'],
    // 禁止方向错误的 for 循环
    'for-direction': 'warn',
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    // witch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    'no-case-declarations': 'warn',
    // 禁止于 -0 相比较
    'no-compare-neg-zero': 'warn',
    // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
    'no-cond-assign': ['error', 'except-parens'],
    // const 禁止重新赋值
    'no-const-assign': 'warn',
    // 不使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warm' : 'off',
    // 禁止出现重复变量
    'no-dupe-args': 'warn',
    // 禁止重复定义类的成员
    'no-dupe-class-members': 'warn',
    // 禁止 if else 的条件判断中出现重复的条件
    'no-dupe-else-if': 'warn',
    // 禁止在对象字面量中出现重复的键名
    'no-dupe-keys': 'warn',
    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'warn',
    // 禁止重复导入模块
    'no-duplicate-imports': 'warn',
    // 禁止修改原生对象
    'no-extend-native': 'warn',
    // 不允许重新分配函数声明
    'no-func-assign': 'warn',
    // 禁止对全局变量赋值
    'no-global-assign': 'warn',
    // 禁止使用没必要的 {} 作为代码块
    'no-lone-blocks': 'warn',
    // 禁止使用超出 js 精度范围的数字
    'no-loss-of-precision': 'warn',
    // 禁止使用 \ 来换行字符串
    'no-multi-str': 'warn',
    // 禁止直接 new 一个类而不赋值
    'no-new': 'warn',
    // 禁止直接 new Object
    'no-new-object': 'warn',
    // 禁止使用 new 来生成 Symbol
    'no-new-symbol': 'warn',
    // 禁止使用 new 来生成 String, Number 或 Boolean
    'no-new-wrappers': 'warn',
    // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
    'no-obj-calls': 'warn',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 'warn',
    // 禁止在 return 语句里赋值
    'no-return-assign': ['error', 'always'],
    // 禁止将自己赋值给自己
    'no-self-assign': 'warn',
    // 禁止将自己与自己比较
    'no-self-compare': 'warn',
    // 禁止使用逗号操作符
    'no-sequences': 'warn',
    // 禁止 throw 跑出字面量，必须 throw 一个 Error 对象，用作抛出错误
    'no-throw-literal': 'warn',
    // 禁止将 undefined 赋值给变量
    'no-undef-init': 'warn',
    'no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        caughtErrors: 'none'
      }
    ],
    // 循环内必须对循环条件中的变量有修改
    'no-unmodified-loop-condition': 'warn',
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false
      }
    ],
    // 禁止出现没必要的计算键名
    'no-useless-computed-key': 'warn',
    // 禁止使用 var
    'no-var': 'warn',
    // 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
    'prefer-object-spread': 'error',
    // parseInt 必须传入第二个参数，表达转几进制
    radix: 'warn',
    // 注释的斜线或 * 后必须有空格
    'spaced-comment': ['error', 'always'],
    // 创建 Symbol 时必须传入参数，参数名最好与变量名相同
    'symbol-description': 'warn',
    // 官方开发文档
    // https://prettier.io/docs/en/rationale.html#semicolons
    'prettier/prettier': [
      'error',
      {
        // 单行代码最大长度，默认80，最大长度一般会设置为100-120
        printWidth: 80,
        // 缩进长度，默认2
        tabWidth: 2,
        // 是否使用缩进符，而使用空格，默认false
        useTabs: false,
        // 行尾是否需要有分号，默认true
        semi: true,
        // 是否使用单引号, 默认false
        singleQuote: true,
        // 对象属性中是否加引号规则，默认as-needed
        /*  as-needed：在需要的时候给对象属性加引号
          consistent：如果对象中有一个属性有引号则全部都加上
          preserve：遵循对象属性中引号的用法
         */
        quoteProps: 'as-needed',
        // jsx 是否使用单引号代替双引号，默认false
        jsxSingleQuote: false,
        // 是否在可能的多行中输入尾逗号，默认es5
        /* none：无尾逗号
           es5：添加ES5中被支持的尾逗号
           all：在全部有可能的地方添加
          */
        trailingComma: 'none',
        // 在对象字面量的括号（即 {和 } ）前后输入空格，默认true
        bracketSpacing: true,
        // jsx 标签的反尖括号是否需要换行
        /*
          <button></button
          >X
         */
        jsxBracketSameLine: false,
        // 给箭头函数的参数加括号，即使一个也加
        arrowParens: 'always',
        // 每个文件格式化的范围是文件的全部内容
        //  从哪一行开始
        rangeStart: 0,
        //  到哪一行结束
        rangeEnd: Infinity,
        // 不需要写文件开头的 @prettier
        requirePragma: false,
        // 是否自动在文件开头插入 @prettier
        insertPragma: false,
        // 指定文件折行方式
        /*
          always：当超出printwidth这行
          never：不折行
          preserve：安装文件原样折行
         */
        proseWrap: 'preserve',
        // 根据显示样式决定 html 要不要折行
        /*
          css：遵循CSS display属性的默认值
          strict：空格敏感
          ignore：空格不敏感
         */
        htmlWhitespaceSensitivity: 'css',
        // 行尾换行样式
        /*
          lf：仅\n换行
          crlf：回车符+换行符(\r\n)
          cr：仅回车符(\r)
          auto：维持现有行尾
         */
        endOfLine: 'lf'
        // 最后记得:npm run lint --fix
        // 重启软件
      }
    ]
  }
};
