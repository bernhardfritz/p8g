---
description: C | Java
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Emscripten from '@site/src/components/Emscripten';
import mouse_events_c from '!!raw-loader!@site/static/examples/src/mouse-events/c/mouse_events.c';
import mouse_events_java from '!!raw-loader!@site/static/examples/src/mouse-events/java/MouseEvents.java';

# Mouse events

<Emscripten src="/examples/mouse-events.html" />

<Tabs groupId="lang">
<TabItem value="c" label="C">
<CodeBlock language="c" title="mouse_events.c">{mouse_events_c}</CodeBlock>
</TabItem>
<TabItem value="java" label="Java">
<CodeBlock language="java" title="MouseEvents.java">{mouse_events_java}</CodeBlock>
</TabItem>
</Tabs>