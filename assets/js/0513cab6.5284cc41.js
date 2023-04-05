"use strict";(self.webpackChunkp8g_docs=self.webpackChunkp8g_docs||[]).push([[7085],{931:function(t){t.exports=JSON.parse('{"blogPosts":[{"id":"/2023/04/06/sorting-algorithms","metadata":{"permalink":"/p8g/blog/2023/04/06/sorting-algorithms","source":"@site/blog/2023-04-06-sorting-algorithms.md","title":"Sorting algorithms \ud83d\udcda","description":"Learn about sorting algorithms and how to visualize them.","date":"2023-04-06T00:00:00.000Z","formattedDate":"April 6, 2023","tags":[],"readingTime":2.03,"truncated":false,"authors":[{"name":"Bernhard Fritz","url":"https://github.com/bernhardfritz","email":"bernhard.e.fritz@gmail.com","imageURL":"https://github.com/bernhardfritz.png","key":"bernhardfritz"}],"frontMatter":{"title":"Sorting algorithms \ud83d\udcda","description":"Learn about sorting algorithms and how to visualize them.","image":"https://i.imgur.com/dXtJuh0.png","authors":"bernhardfritz"},"nextItem":{"title":"Spring event 2023 \ud83c\udf37","permalink":"/p8g/blog/2023/03/21/spring-event"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\nimport IconExternalLink from \'@theme/IconExternalLink\';\\n\\nNearly every standard library offers data structures that can be sorted without really thinking about it. Still, it might come in handy to know about commonly used sorting algorithms or even implement some of them yourself as an exercise. After all, most sorting algorithms make heavy use of array indexing and recursion, and for this reason alone, they are often used as a medium to learn about and apply these concepts.\\n\\nEven though sorting algorithms can be categorized by just a handful of different **methods**, there are hundreds of variations out there. Some algorithms are more efficient than others. You can compare their efficiency by both **time complexity** and **memory consumption**. It is worth noting that some sorting algorithms may perform worse in certain situations while, on average, they perform better than others. Finally, a **stable** sorting algorithm is expected to preserve the order of elements considered to be equal.\\n\\nAs you can tell, choosing the right sorting algorithm may not always be so easy. For this reason, I have compiled the following list, including implementation details for future reference:\\n\\n|                            Name                            |             Best <br /> Average <br /> Worst             |  Memory  | Stable |    Method    |                    Visualization                    |\\n| :--------------------------------------------------------: | :------------------------------------------------------: | :------: | :----: | :----------: | :-------------------------------------------------: |\\n|   [Quicksort](/editor/b054bea1826babe6ea1b42863eb059f9)    |        $n \\\\log n$ <br /> $n \\\\log n$ <br /> $n^2$         | $\\\\log n$ |   No   | Partitioning |   <img src={useBaseUrl(\'/img/quicksort.gif\')} />    |\\n|   [Merge sort](/editor/e197e89a91af2582a2af44be9d8bcb00)   |      $n \\\\log n$ <br /> $n \\\\log n$ <br /> $n \\\\log n$      |   $n$    |  Yes   |   Merging    |   <img src={useBaseUrl(\'/img/merge-sort.gif\')} />   |\\n|    [Heapsort](/editor/7b6c7c25a1b6a0e9a48c75f89f5ac70b)    |      $n \\\\log n$ <br /> $n \\\\log n$ <br /> $n \\\\log n$      |    1     |   No   |  Selection   |    <img src={useBaseUrl(\'/img/heapsort.gif\')} />    |\\n| [Insertion sort](/editor/c5b47346de4a5158aff4992b8ee4b008) |              $n$ <br /> $n^2$ <br /> $n^2$               |    1     |  Yes   |  Insertion   | <img src={useBaseUrl(\'/img/insertion-sort.gif\')} /> |\\n| [Selection sort](/editor/f6aff336deaa8335bae359ac133869aa) |             $n^2$ <br /> $n^2$ <br /> $n^2$              |    1     |   No   |  Selection   | <img src={useBaseUrl(\'/img/selection-sort.gif\')} /> |\\n|   [Shellsort](/editor/c165238765751acc81778b8615c47f19)    | $n \\\\log n$ <br /> $n^{4 \\\\over 3}$ <br /> $n^{3 \\\\over 2}$ |    1     |   No   |  Insertion   |   <img src={useBaseUrl(\'/img/shellsort.gif\')} />    |\\n|  [Bubble sort](/editor/86809449c8a2d551c3ac2aeb930589d7)   |              $n$ <br /> $n^2$ <br /> $n^2$               |    1     |  Yes   |  Exchanging  |  <img src={useBaseUrl(\'/img/bubble-sort.gif\')} />   |\\n\\n## Further reading\\n\\n* [Sorting algorithm<IconExternalLink />](https://en.wikipedia.org/wiki/Sorting_algorithm) on Wikipedia, the free encyclopedia"},{"id":"/2023/03/21/spring-event","metadata":{"permalink":"/p8g/blog/2023/03/21/spring-event","source":"@site/blog/2023-03-21-spring-event.md","title":"Spring event 2023 \ud83c\udf37","description":"Implement a spring-themed sketch and share your result on Discord within March 21st and June 21st.","date":"2023-03-21T00:00:00.000Z","formattedDate":"March 21, 2023","tags":[],"readingTime":0.495,"truncated":false,"authors":[{"name":"Bernhard Fritz","url":"https://github.com/bernhardfritz","email":"bernhard.e.fritz@gmail.com","imageURL":"https://github.com/bernhardfritz.png","key":"bernhardfritz"}],"frontMatter":{"title":"Spring event 2023 \ud83c\udf37","description":"Implement a spring-themed sketch and share your result on Discord within March 21st and June 21st.","image":"https://i.imgur.com/xGjYaBp.jpg","authors":"bernhardfritz"},"prevItem":{"title":"Sorting algorithms \ud83d\udcda","permalink":"/p8g/blog/2023/04/06/sorting-algorithms"},"nextItem":{"title":"p8g v0.8.3 is out! \ud83c\udf89","permalink":"/p8g/blog/2023/02/08/p8g-0-8-3-is-out"}},"content":"import useBaseUrl from \'@docusaurus/useBaseUrl\';\\n\\n_The snow begins to melt and flowering plants are about to bloom._\\n\\n<div className=\\"flex\\">\\n<div style={{flex: 1}}>\\n<p>This is your time to get creative! \ud83d\udc40</p>\\n\\nImplement a spring-themed sketch, <a href=\\"https://discord.gg/B3vrdJcra6\\">join Discord</a> and share your result in **#general** within March 21<sup>st</sup> and June 21<sup>st</sup>. At the end of the event all submissions will be collected in a separate blog post on this website and we will do a vote. The submission with the highest number of votes wins \ud83c\udfc6.\\n\\n</div>\\n<div>\\n    <img src={useBaseUrl(\'/img/spring-event-2023.jpg\')} width=\\"175\\" style={{margin: 10}} />\\n</div>\\n</div>\\n\\nHave fun and good luck! \ud83d\ude0a"},{"id":"/2023/02/08/p8g-0-8-3-is-out","metadata":{"permalink":"/p8g/blog/2023/02/08/p8g-0-8-3-is-out","source":"@site/blog/2023-02-08-p8g-0-8-3-is-out.md","title":"p8g v0.8.3 is out! \ud83c\udf89","description":"* apply a black CSS background to p8g.js canvas by default #28","date":"2023-02-08T00:00:00.000Z","formattedDate":"February 8, 2023","tags":[],"readingTime":0.085,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.8.3 is out! \ud83c\udf89"},"prevItem":{"title":"Spring event 2023 \ud83c\udf37","permalink":"/p8g/blog/2023/03/21/spring-event"},"nextItem":{"title":"p8g v0.8.2 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/10/31/p8g-0-8-2-is-out"}},"content":"* apply a black CSS background to p8g.js canvas by default [#28](https://github.com/bernhardfritz/p8g/issues/28)\\n* ensure predictable rasterization [#34](https://github.com/bernhardfritz/p8g/issues/34)"},{"id":"/2022/10/31/p8g-0-8-2-is-out","metadata":{"permalink":"/p8g/blog/2022/10/31/p8g-0-8-2-is-out","source":"@site/blog/2022-10-31-p8g-0-8-2-is-out.md","title":"p8g v0.8.2 is out! \ud83c\udf89","description":"* fix keyCode and mouseButton to also be set on release","date":"2022-10-31T00:00:00.000Z","formattedDate":"October 31, 2022","tags":[],"readingTime":0.055,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.8.2 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.8.3 is out! \ud83c\udf89","permalink":"/p8g/blog/2023/02/08/p8g-0-8-3-is-out"},"nextItem":{"title":"p8g v0.8.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/10/12/p8g-0-8-1-is-out"}},"content":"* fix keyCode and mouseButton to also be set on release"},{"id":"/2022/10/12/p8g-0-8-1-is-out","metadata":{"permalink":"/p8g/blog/2022/10/12/p8g-0-8-1-is-out","source":"@site/blog/2022-10-12-p8g-0-8-1-is-out.md","title":"p8g v0.8.1 is out! \ud83c\udf89","description":"* allow memory growth","date":"2022-10-12T00:00:00.000Z","formattedDate":"October 12, 2022","tags":[],"readingTime":0.02,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.8.1 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.8.2 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/10/31/p8g-0-8-2-is-out"},"nextItem":{"title":"p8g v0.8.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/10/09/p8g-0-8-0-is-out"}},"content":"* allow memory growth"},{"id":"/2022/10/09/p8g-0-8-0-is-out","metadata":{"permalink":"/p8g/blog/2022/10/09/p8g-0-8-0-is-out","source":"@site/blog/2022-10-09-p8g-0-8-0-is-out.md","title":"p8g v0.8.0 is out! \ud83c\udf89","description":"* fix C/C++ runtime errors on Windows","date":"2022-10-09T00:00:00.000Z","formattedDate":"October 9, 2022","tags":[],"readingTime":0.055,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.8.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.8.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/10/12/p8g-0-8-1-is-out"},"nextItem":{"title":"p8g v0.7.2 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/09/27/p8g-0-7-2-is-out"}},"content":"* fix C/C++ runtime errors on Windows\\n* fix font smoothing"},{"id":"/2022/09/27/p8g-0-7-2-is-out","metadata":{"permalink":"/p8g/blog/2022/09/27/p8g-0-7-2-is-out","source":"@site/blog/2022-09-27-p8g-0-7-2-is-out.md","title":"p8g v0.7.2 is out! \ud83c\udf89","description":"* fix font rendering artifacts","date":"2022-09-27T00:00:00.000Z","formattedDate":"September 27, 2022","tags":[],"readingTime":0.025,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.7.2 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.8.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/10/09/p8g-0-8-0-is-out"},"nextItem":{"title":"p8g v0.7.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/09/23/p8g-0-7-1-is-out"}},"content":"* fix font rendering artifacts"},{"id":"/2022/09/23/p8g-0-7-1-is-out","metadata":{"permalink":"/p8g/blog/2022/09/23/p8g-0-7-1-is-out","source":"@site/blog/2022-09-23-p8g-0-7-1-is-out.md","title":"p8g v0.7.1 is out! \ud83c\udf89","description":"* fix bug in JavaScript binding that prevented drawing buffer from being","date":"2022-09-23T00:00:00.000Z","formattedDate":"September 23, 2022","tags":[],"readingTime":0.09,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.7.1 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.7.2 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/09/27/p8g-0-7-2-is-out"},"nextItem":{"title":"p8g v0.7.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/09/18/p8g-0-7-0-is-out"}},"content":"* fix bug in JavaScript binding that prevented drawing buffer from being\\n  preserved\\n* add more JavaScript examples"},{"id":"/2022/09/18/p8g-0-7-0-is-out","metadata":{"permalink":"/p8g/blog/2022/09/18/p8g-0-7-0-is-out","source":"@site/blog/2022-09-18-p8g-0-7-0-is-out.md","title":"p8g v0.7.0 is out! \ud83c\udf89","description":"* add JavaScript support","date":"2022-09-18T00:00:00.000Z","formattedDate":"September 18, 2022","tags":[],"readingTime":0.045,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.7.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.7.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/09/23/p8g-0-7-1-is-out"},"nextItem":{"title":"p8g v0.6.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/08/26/p8g-0-6-1-is-out"}},"content":"* add JavaScript support\\n* make docs more mobile-friendly"},{"id":"/2022/08/26/p8g-0-6-1-is-out","metadata":{"permalink":"/p8g/blog/2022/08/26/p8g-0-6-1-is-out","source":"@site/blog/2022-08-26-p8g-0-6-1-is-out.md","title":"p8g v0.6.1 is out! \ud83c\udf89","description":"* fix linux issue related to libglfw.so","date":"2022-08-26T00:00:00.000Z","formattedDate":"August 26, 2022","tags":[],"readingTime":0.13,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.6.1 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.7.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/09/18/p8g-0-7-0-is-out"},"nextItem":{"title":"p8g v0.6.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/08/15/p8g-0-6-0-is-out"}},"content":"* fix linux issue related to libglfw.so\\n* prevent keyCode and mouseButton from being updated during keyReleased\\n  and mouseReleased respectively\\n* update keyboard event example screenshot"},{"id":"/2022/08/15/p8g-0-6-0-is-out","metadata":{"permalink":"/p8g/blog/2022/08/15/p8g-0-6-0-is-out","source":"@site/blog/2022-08-15-p8g-0-6-0-is-out.md","title":"p8g v0.6.0 is out! \ud83c\udf89","description":"* add functions to load custom fonts and display text","date":"2022-08-15T00:00:00.000Z","formattedDate":"August 15, 2022","tags":[],"readingTime":0.05,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.6.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.6.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/08/26/p8g-0-6-1-is-out"},"nextItem":{"title":"p8g v0.5.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/07/29/p8g-0-5-0-is-out"}},"content":"* add functions to load custom fonts and display text"},{"id":"/2022/07/29/p8g-0-5-0-is-out","metadata":{"permalink":"/p8g/blog/2022/07/29/p8g-0-5-0-is-out","source":"@site/blog/2022-07-29-p8g-0-5-0-is-out.md","title":"p8g v0.5.0 is out! \ud83c\udf89","description":"* add functions to load and display images","date":"2022-07-29T00:00:00.000Z","formattedDate":"July 29, 2022","tags":[],"readingTime":0.16,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.5.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.6.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/08/15/p8g-0-6-0-is-out"},"nextItem":{"title":"p8g v0.4.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/07/11/p8g-0-4-0-is-out"}},"content":"* add functions to load and display images\\n* add random number functions\\n* add function for millis since start\\n* fix colorMode bug\\n* add flappy bird example\\n* improve docs"},{"id":"/2022/07/11/p8g-0-4-0-is-out","metadata":{"permalink":"/p8g/blog/2022/07/11/p8g-0-4-0-is-out","source":"@site/blog/2022-07-11-p8g-0-4-0-is-out.md","title":"p8g v0.4.0 is out! \ud83c\udf89","description":"* add support for C++","date":"2022-07-11T00:00:00.000Z","formattedDate":"July 11, 2022","tags":[],"readingTime":0.09,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.4.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.5.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/07/29/p8g-0-5-0-is-out"},"nextItem":{"title":"p8g v0.3.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/06/20/p8g-0-3-0-is-out"}},"content":"* add support for C++\\n* update docs\\n* add A* example written in C++\\n* CI adaptions"},{"id":"/2022/06/20/p8g-0-3-0-is-out","metadata":{"permalink":"/p8g/blog/2022/06/20/p8g-0-3-0-is-out","source":"@site/blog/2022-06-20-p8g-0-3-0-is-out.md","title":"p8g v0.3.0 is out! \ud83c\udf89","description":"* add mouse and keyboard events","date":"2022-06-20T00:00:00.000Z","formattedDate":"June 20, 2022","tags":[],"readingTime":0.185,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.3.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.4.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/07/11/p8g-0-4-0-is-out"},"nextItem":{"title":"p8g v0.2.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/05/23/p8g-0-2-0-is-out"}},"content":"* add mouse and keyboard events\\n* add deltaTime\\n* fix bug related to use of static variables in p8g.h\\n* fix bug in scale function\\n* minor ci adaptions\\n* add more examples to the docs"},{"id":"/2022/05/23/p8g-0-2-0-is-out","metadata":{"permalink":"/p8g/blog/2022/05/23/p8g-0-2-0-is-out","source":"@site/blog/2022-05-23-p8g-0-2-0-is-out.md","title":"p8g v0.2.0 is out! \ud83c\udf89","description":"* add support for compilation to WebAssembly","date":"2022-05-23T00:00:00.000Z","formattedDate":"May 23, 2022","tags":[],"readingTime":0.12,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.2.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.3.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/06/20/p8g-0-3-0-is-out"},"nextItem":{"title":"p8g v0.1.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/04/22/p8g-0-1-1-is-out"}},"content":"* add support for compilation to WebAssembly\\n* fix color macros\\n* add code examples to the docs\\n* promote discord server more prominently"},{"id":"/2022/04/22/p8g-0-1-1-is-out","metadata":{"permalink":"/p8g/blog/2022/04/22/p8g-0-1-1-is-out","source":"@site/blog/2022-04-22-p8g-0-1-1-is-out.md","title":"p8g v0.1.1 is out! \ud83c\udf89","description":"* add p8g.h to p8g.zip","date":"2022-04-22T00:00:00.000Z","formattedDate":"April 22, 2022","tags":[],"readingTime":0.115,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.1.1 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.2.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/05/23/p8g-0-2-0-is-out"},"nextItem":{"title":"p8g v0.1.0 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/04/10/p8g-0-1-0-is-out"}},"content":"* add p8g.h to p8g.zip\\n* add logo to documentation\\n* change documentation color theme\\n* fix typo in HelloRectangle.java\\n* update readme"},{"id":"/2022/04/10/p8g-0-1-0-is-out","metadata":{"permalink":"/p8g/blog/2022/04/10/p8g-0-1-0-is-out","source":"@site/blog/2022-04-10-p8g-0-1-0-is-out.md","title":"p8g v0.1.0 is out! \ud83c\udf89","description":"* add ci","date":"2022-04-10T00:00:00.000Z","formattedDate":"April 10, 2022","tags":[],"readingTime":0.015,"truncated":false,"authors":[],"frontMatter":{"title":"p8g v0.1.0 is out! \ud83c\udf89"},"prevItem":{"title":"p8g v0.1.1 is out! \ud83c\udf89","permalink":"/p8g/blog/2022/04/22/p8g-0-1-1-is-out"}},"content":"* add ci"}]}')}}]);