---
description: C | Java
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import firework_c from '!!raw-loader!@site/static/examples/src/fireworks/c/firework.c';
import firework_h from '!!raw-loader!@site/static/examples/src/fireworks/c/firework.h';
import fireworks_c from '!!raw-loader!@site/static/examples/src/fireworks/c/fireworks.c';
import particle_c from '!!raw-loader!@site/static/examples/src/fireworks/c/particle.c';
import particle_h from '!!raw-loader!@site/static/examples/src/fireworks/c/particle.h';
import firework_java from '!!raw-loader!@site/static/examples/src/fireworks/java/Firework.java';
import fireworks_java from '!!raw-loader!@site/static/examples/src/fireworks/java/Fireworks.java';
import particle_java from '!!raw-loader!@site/static/examples/src/fireworks/java/Particle.java';

# Fireworks

<Emscripten src="/examples/fireworks.html" />

<Tabs groupId="lang">
<TabItem value="c" label="C">
<CodeBlock language="c" title="firework.c">{firework_c}</CodeBlock>
<CodeBlock language="c" title="firework.h">{firework_h}</CodeBlock>
<CodeBlock language="c" title="fireworks.c">{fireworks_c}</CodeBlock>
<CodeBlock language="c" title="particle.c">{particle_c}</CodeBlock>
<CodeBlock language="c" title="particle.h">{particle_h}</CodeBlock>
</TabItem>
<TabItem value="java" label="Java">
<CodeBlock language="java" title="Firework.java">{firework_java}</CodeBlock>
<CodeBlock language="java" title="Fireworks.java">{fireworks_java}</CodeBlock>
<CodeBlock language="java" title="Particle.java">{particle_java}</CodeBlock>
</TabItem>
</Tabs>