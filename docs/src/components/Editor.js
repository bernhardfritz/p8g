import { javascript } from '@codemirror/lang-javascript';
import { matchPath, useHistory, useLocation } from '@docusaurus/router';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import CodeMirror from '@uiw/react-codemirror';
import IframeResizer from 'iframe-resizer-react';
import React, { useEffect, useRef, useState } from 'react';
import SaveButton from './SaveButton';
import { useDebounce } from '../hooks/useDebounce';
import { createGist, forkGist, getGist, getUser, updateGist } from '../github';
import styles from './Editor.module.css';

export default function Editor() {
  const history = useHistory();
  const location = useLocation();
  const match = matchPath(location.pathname, {
    path: useBaseUrl('/editor/:id'),
  });
  const gistId = match !== null ? match.params.id : null;
  const baseUrl = useBaseUrl('/');
  const [content, setContent] = useState(
    gistId === null
      ? `import p8g, {
  background,
  createCanvas,
  rect,
} from 'https://unpkg.com/p8g.js';

p8g.draw = () => {
  background(220);
  rect(50, 50, 100, 100);
};

createCanvas(320, 320);`
      : '',
  );
  const [gist, setGist] = useState(null);
  useEffect(() => {
    if (gistId) {
      getGist(gistId).then((gist) => {
        setGist(gist);
        setContent(gist.files['sketch.js'].content);
      });
    }
  }, [gistId]);
  const handleChange = (value) => {
    setContent(value);
  };
  const handleSave = () => {
    if (gistId) {
      return getUser().then((user) => {
        if (user.login === gist.owner.login) {
          return updateGist(gistId, {
            files: {
              'sketch.js': {
                content,
              },
            },
          });
        } else {
          return forkGist(gistId)
            .then((gist) =>
              updateGist(gist.id, {
                description: `https://bernhardfritz.github.io/p8g/editor/${gist.id}`,
                files: {
                  'sketch.js': {
                    content,
                  },
                },
              }),
            )
            .then((gist) => history.replace(`${baseUrl}editor/${gist.id}`));
        }
      });
    } else {
      return createGist({
        files: {
          'sketch.js': {
            content,
          },
        },
        public: true,
      })
        .then((gist) =>
          updateGist(gist.id, {
            description: `https://bernhardfritz.github.io/p8g/editor/${gist.id}`,
          }),
        )
        .then((gist) => history.replace(`${baseUrl}editor/${gist.id}`));
    }
  };
  return (
    <Layout
      title="p8g.js Web Editor"
      description="A web editor for p8g.js, a JavaScript library with the goal of making coding accessible to artists, designers, educators, and beginners."
    >
      <div className={styles.flex}>
        <CodeMirrorWrapper
          value={content}
          extensions={[javascript()]}
          onChange={handleChange}
          height="100%"
          onSave={handleSave}
        />
        <IframeResizerWrapper message={useDebounce(content, 500)} />
      </div>
    </Layout>
  );
}

function CodeMirrorWrapper({ onSave, ...props }) {
  const { colorMode } = useColorMode();
  return (
    <div className={styles['code-mirror-wrapper']}>
      <CodeMirror
        {...props}
        theme={colorMode}
        className={styles['code-mirror-wrapper__code-mirror']}
      ></CodeMirror>
      <div className={styles['code-mirror-wrapper__button-group']}>
        <SaveButton
          className={styles['code-mirror-wrapper__button-group__button']}
          onSave={onSave}
        ></SaveButton>
      </div>
    </div>
  );
}

function IframeResizerWrapper(props) {
  const iframeRef = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    iframeRef.current.sendMessage('reload');
  }, [props.message]);
  useEffect(() => {
    if (ready) {
      iframeRef.current.sendMessage(props.message);
      setReady(false);
    }
  }, [ready]);
  const handleMessage = (event) => {
    if (event.message === 'ready') {
      setReady(true);
    }
  };
  return (
    <IframeResizer
      forwardRef={iframeRef}
      src={useBaseUrl('/preview/index.html')}
      className={styles.iframe}
      onMessage={handleMessage}
    ></IframeResizer>
  );
}
