---
description: C | C++ | Java
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import flappy_bird_c from '!!raw-loader!@site/static/examples/src/flappy-bird/c/flappy_bird.c';
import flappy_bird_cpp from '!!raw-loader!@site/static/examples/src/flappy-bird/c++/flappy_bird.cpp';
import flappy_bird_java from '!!raw-loader!@site/static/examples/src/flappy-bird/java/FlappyBird.java';

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
</Tabs>