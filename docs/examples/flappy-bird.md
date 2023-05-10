---
description: C | C++ | Java | JavaScript | TypeScript
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import flappy_bird_c from '!!raw-loader!@site/static/examples/src/flappy-bird/c/flappy_bird.c';
import flappy_bird_cpp from '!!raw-loader!@site/static/examples/src/flappy-bird/c++/flappy_bird.cpp';
import flappy_bird_java from '!!raw-loader!@site/static/examples/src/flappy-bird/java/FlappyBird.java';
import flappy_bird_js from '!!raw-loader!@site/static/examples/src/flappy-bird/js/flappy-bird.js';
import index_html from '!!raw-loader!@site/static/examples/src/flappy-bird/js/index.html';
import flappy_bird_ts from '!!raw-loader!@site/static/examples/src/flappy-bird/ts/flappy-bird.ts';
import index_html2 from '!!raw-loader!@site/static/examples/src/flappy-bird/ts/index.html';

# Flappy Bird

<Emscripten src="/examples/flappy-bird.html" />

<Tabs groupId="lang">
<TabItem value="c" label="C">
<CodeBlock language="c" title="flappy_bird.c">{flappy_bird_c}</CodeBlock>
</TabItem>
<TabItem value="cpp" label="C++">
<CodeBlock language="cpp" title="flappy_bird.cpp">{flappy_bird_cpp}</CodeBlock>
</TabItem>
<TabItem value="java" label="Java">
<CodeBlock language="java" title="FlappyBird.java">{flappy_bird_java}</CodeBlock>
</TabItem>
<TabItem value="js" label="JavaScript">
<CodeBlock language="js" title="flappy-bird.js">{flappy_bird_js}</CodeBlock>
<CodeBlock language="html" title="index.html">{index_html}</CodeBlock>
</TabItem>
<TabItem value="ts" label="TypeScript">
<CodeBlock language="ts" title="flappy-bird.ts">{flappy_bird_ts}</CodeBlock>
<CodeBlock language="html" title="index.html">{index_html2}</CodeBlock>
</TabItem>
</Tabs>