---
description: C | Java | JavaScript | TypeScript
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
import firework_js from '!!raw-loader!@site/static/examples/src/fireworks/js/firework.js';
import fireworks_js from '!!raw-loader!@site/static/examples/src/fireworks/js/fireworks.js';
import index_html from '!!raw-loader!@site/static/examples/src/fireworks/js/index.html';
import particle_js from '!!raw-loader!@site/static/examples/src/fireworks/js/particle.js';
import firework_ts from '!!raw-loader!@site/static/examples/src/fireworks/ts/firework.ts';
import fireworks_ts from '!!raw-loader!@site/static/examples/src/fireworks/ts/fireworks.ts';
import index_html2 from '!!raw-loader!@site/static/examples/src/fireworks/ts/index.html';
import particle_ts from '!!raw-loader!@site/static/examples/src/fireworks/ts/particle.ts';

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
<TabItem value="js" label="JavaScript">
<CodeBlock language="js" title="firework.js">{firework_js}</CodeBlock>
<CodeBlock language="js" title="fireworks.js">{fireworks_js}</CodeBlock>
<CodeBlock language="html" title="index.html">{index_html}</CodeBlock>
<CodeBlock language="js" title="particle.js">{particle_js}</CodeBlock>
</TabItem>
<TabItem value="ts" label="TypeScript">
<CodeBlock language="ts" title="firework.ts">{firework_ts}</CodeBlock>
<CodeBlock language="ts" title="fireworks.ts">{fireworks_ts}</CodeBlock>
<CodeBlock language="html" title="index.html">{index_html2}</CodeBlock>
<CodeBlock language="ts" title="particle.ts">{particle_ts}</CodeBlock>
</TabItem>
</Tabs>
