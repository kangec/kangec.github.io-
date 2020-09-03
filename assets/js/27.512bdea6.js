(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{437:function(t,a,s){"use strict";s.r(a);var e=s(20),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在Java中，volatile关键字有特殊的内存语义。volatile主要有以下两个功能：")]),t._v(" "),s("ul",[s("li",[t._v("保证变量的内存可见性")]),t._v(" "),s("li",[t._v("禁止volatile变量与普通变量重排序（JSR133提出，Java 5 开始才有这个“增强的volatile内存语义”）")])]),t._v(" "),s("h2",{attrs:{id:"java内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java内存模型"}},[t._v("#")]),t._v(" Java内存模型")]),t._v(" "),s("p",[t._v("Java内存模型的主要"),s("strong",[t._v("目标是定义程序中各个变量的访问规则")]),t._v("，**即在虚拟机中将变量存储到内存和从内存中取出变量这样的底层细节。**此处的变量与Java编程中所说的变量有所区别，它包括了实例字段、静态字段和构成数组对象的元素，但不包括局部变量与方法参数，因为后者是线程私有的，不会被共享，自然就不会存在竞争问题。")]),t._v(" "),s("p",[t._v("Java内存模型规定了"),s("strong",[t._v("所有的变量都存储在主内存中")]),t._v("（此处的主内存与物理硬件的主内存名字一样，两者可以互相类比，但此处仅是虚拟机内存的一部分）。每条线程还有自己的工作内存（可与处理器的高速缓存类比），**线程的工作内存中保存了被该线程使用到的变量的主内存副本拷贝，线程对变量的所有操作（读取、赋值等）都必须在工作内存中进行，而不能直接读写主内存中的变量。**不同的线程之间也无法直接访问对方工作内存中的变量，线程间变量值的传递均需要通过主内存来完成，线程、主内存、工作内存三者的交互关系如下图所示。")]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"/img/volatile.png",loading:"lazy"}})])]),s("p",[t._v("那主内存与工作内存之间又是如何传递数据的呢？Java内存模型中定义了以下8种操作来完成，下面的每一种操作都是原子的、不可再分的。")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("lock")]),t._v(":作用于主内存的变量，它把一个变量标识为一条线程独占的状态。")]),t._v(" "),s("li",[s("strong",[t._v("unlock")]),t._v(":作用于主内存的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其它线程锁定。")]),t._v(" "),s("li",[s("strong",[t._v("read")]),t._v(":作用于主内存的变量，它把一个变量的值从主内存传输到线程的工作内存中，以便随后的load动作使用。")]),t._v(" "),s("li",[s("strong",[t._v("load")]),t._v(":作用于工作内存的变量，它把read操作从主内存中得到的变量值放入工作内存的变量副本中。")]),t._v(" "),s("li",[s("strong",[t._v("use")]),t._v(":作用于工作内存的变量，它把工作内存中一个变量的值传递给执行引擎，每当虚拟机遇到一个需要使用到变量的值的字节码指令时都会执行这个操作。")]),t._v(" "),s("li",[s("strong",[t._v("assign")]),t._v(":作用于工作内存的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。")]),t._v(" "),s("li",[s("strong",[t._v("store")]),t._v(":作用于工作内存的变量，它把工作内存中一个变量的值传送到主内存中，以便随后的write使用。")]),t._v(" "),s("li",[s("strong",[t._v("write")]),t._v(":作用于主内存的变量，它把store操作从工作内存中得到的变量的值放入主内存的变量中。")])]),t._v(" "),s("h2",{attrs:{id:"内存可见性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存可见性"}},[t._v("#")]),t._v(" 内存可见性")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VolatileExample")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("        \n        a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// step 1        ")]),t._v("\n        flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// step 2    ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("        \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// step 3            ")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// step 4        ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("在这段代码里，我们使用"),s("code",[t._v("volatile")]),t._v("关键字修饰了一个"),s("code",[t._v("boolean")]),t._v("类型的变量"),s("code",[t._v("flag")]),t._v("。")]),t._v(" "),s("p",[t._v("所谓内存可见性，指的是当一个线程对"),s("code",[t._v("volatile")]),t._v("修饰的变量进行"),s("strong",[t._v("写操作")]),t._v("（比如step 2）时，JMM会立即把该线程对应的本地内存中的共享变量的值刷新到主内存；当一个线程对"),s("code",[t._v("volatile")]),t._v("修饰的变量进行"),s("strong",[t._v("读操作")]),t._v("（比如step 3）时，JMM会把立即该线程对应的本地内存置为无效，从主内存中读取共享变量的值。")]),t._v(" "),s("blockquote",[s("p",[t._v("在这一点上，volatile与锁具有相同的内存效果，volatile变量的写和锁的释放具有相同的内存语义，volatile变量的读和锁的获取具有相同的内存语义。")])]),t._v(" "),s("h2",{attrs:{id:"禁止重排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁止重排序"}},[t._v("#")]),t._v(" "),s("strong",[t._v("禁止重排序")])]),t._v(" "),s("p",[t._v("在JSR-133之前的旧的Java内存模型中，是允许volatile变量与普通变量重排序的。那上面的案例中，可能就会被重排序成下列时序来执行：")]),t._v(" "),s("ol",[s("li",[t._v("线程A写volatile变量，step 2，设置flag为true；")]),t._v(" "),s("li",[t._v("线程B读同一个volatile，step 3，读取到flag为true；")]),t._v(" "),s("li",[t._v("线程B读普通变量，step 4，读取到 a = 0；")]),t._v(" "),s("li",[t._v("线程A修改普通变量，step 1，设置 a = 1；")])]),t._v(" "),s("p",[t._v("可见，如果volatile变量与普通变量发生了重排序，虽然volatile变量能保证内存可见性，也可能导致普通变量读取错误。")]),t._v(" "),s("p",[t._v("所以在旧的内存模型中，volatile的写-读就不能与锁的释放-获取具有相同的内存语义了。为了提供一种比锁更轻量级的"),s("strong",[t._v("线程间的通信机制")]),t._v("，"),s("strong",[t._v("JSR-133")]),t._v("专家组决定增强volatile的内存语义：严格限制编译器和处理器对volatile变量与普通变量的重排序。")]),t._v(" "),s("p",[t._v("编译器还好说，JVM是怎么还能限制处理器的重排序的呢？它是通过"),s("strong",[t._v("内存屏障")]),t._v("来实现的。")]),t._v(" "),s("p",[t._v("什么是内存屏障？硬件层面，内存屏障分两种：读屏障（Load Barrier）和写屏障（Store Barrier）。内存屏障有两个作用：")]),t._v(" "),s("ol",[s("li",[t._v("阻止屏障两侧的指令重排序；")]),t._v(" "),s("li",[t._v("强制把写缓冲区/高速缓存中的脏数据等写回主内存，或者让缓存中相应的数据失效。")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意这里的缓存主要指的是CPU缓存，如L1，L2等")])]),t._v(" "),s("p",[t._v("编译器在"),s("strong",[t._v("生成字节码时")]),t._v("，会在指令序列中插入内存屏障来禁止特定类型的处理器重排序。编译器选择了一个"),s("strong",[t._v("比较保守的JMM内存屏障插入策略")]),t._v("，这样可以保证在任何处理器平台，任何程序中都能得到正确的volatile内存语义。这个策略是（volatile会在读取数据前插入一个读屏障，写数据之后加入一个写屏障）：")]),t._v(" "),s("ul",[s("li",[t._v("在每个volatile写操作前插入一个StoreStore屏障；")]),t._v(" "),s("li",[t._v("在每个volatile写操作后插入一个StoreLoad屏障；")]),t._v(" "),s("li",[t._v("在每个volatile读操作后插入一个LoadLoad屏障；")]),t._v(" "),s("li",[t._v("在每个volatile读操作后再插入一个LoadStore屏障。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("LoadLoad屏障")]),t._v("：对于这样的语句Load1; LoadLoad; Load2，在Load2及后续读取操作要读取的数据被访问前，保证Load1要读取的数据被读取完毕。")]),t._v(" "),s("li",[s("strong",[t._v("StoreStore屏障")]),t._v("：对于这样的语句Store1; StoreStore; Store2，在Store2及后续写入操作执行前，保证Store1的写入操作对其它处理器可见。")]),t._v(" "),s("li",[s("strong",[t._v("LoadStore屏障")]),t._v("：对于这样的语句Load1; LoadStore; Store2，在Store2及后续写入操作被刷出前，保证Load1要读取的数据被读取完毕。")]),t._v(" "),s("li",[s("strong",[t._v("StoreLoad屏障")]),t._v("：对于这样的语句Store1; StoreLoad; Load2，在Load2及后续所有读取操作执行前，保证Store1的写入对所有处理器可见。它的开销是四种屏障中最大的（冲刷写缓冲器，清空无效化队列）。在大多数处理器的实现中，这个屏障是个万能屏障，兼具其它三种内存屏障的功能")])])]),t._v(" "),s("p",[t._v("对于连续多个volatile变量读或者连续多个volatile变量写，编译器做了一定的优化来提高性能，比如：")]),t._v(" "),s("blockquote",[s("p",[t._v("第一个volatile读;")]),t._v(" "),s("p",[t._v("LoadLoad屏障；")]),t._v(" "),s("p",[t._v("第二个volatile读；")]),t._v(" "),s("p",[t._v("LoadStore屏障")])]),t._v(" "),s("p",[t._v("再介绍一下volatile与普通变量的重排序规则:")]),t._v(" "),s("ol",[s("li",[t._v("如果第一个操作是volatile读，那无论第二个操作是什么，都不能重排序；")]),t._v(" "),s("li",[t._v("如果第二个操作是volatile写，那无论第一个操作是什么，都不能重排序；")]),t._v(" "),s("li",[t._v("如果第一个操作是volatile写，第二个操作是volatile读，那不能重排序。")])]),t._v(" "),s("p",[t._v("举个例子，我们在案例中step 1，是普通变量的写，step 2是volatile变量的写，那符合第2个规则，这两个steps不能重排序。而step 3是volatile变量读，step 4是普通变量读，符合第1个规则，同样不能重排序。")]),t._v(" "),s("p",[t._v("但如果是下列情况：第一个操作是普通变量读，第二个操作是volatile变量读，那是可以重排序的：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明普通变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" flag "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明volatile变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下两个变量的读操作是可以重排序的")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 普通变量读")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// volatile变量读")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("参考资料 "),s("a",{attrs:{href:"https://redspider.gitbook.io/concurrent/di-er-pian-yuan-li-pian/8#8-2-1-nei-cun-ke-jian-xing"}},[t._v("深入浅出java多线程--volatile")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);