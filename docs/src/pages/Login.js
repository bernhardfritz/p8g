import React, { useEffect, useState } from 'react';
import { useSearchParams } from '../hooks/useSearchParams';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Login.module.css';
import Cookies from 'js-cookie';
import Admonition from '@theme/Admonition';

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (searchParams.get('error')) {
      setErrorMessage(searchParams.get('error_description'));
    } else {
      fetch('https://p8g.bernhardfritz.workers.dev/?https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: '9adadcb2a0c067e95302',
          client_secret: '0ab5a3ad1aea1813c59a2b8b177374be596df6ab',
          code: searchParams.get('code'),
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.error) {
            throw new Error(json.error_description);
          }
          return json.access_token;
        })
        .then((accessToken) => {
          Cookies.set('access_token', accessToken, {
            expires: 8 / 24,
          });
          window.close();
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }, [searchParams]);
  return (
    <Layout title="Login" wrapperClassName={styles.flex}>
      <ErrorMessageOrLoadingIndicator errorMessage={errorMessage} />
    </Layout>
  );
}

function ErrorMessageOrLoadingIndicator(props) {
  if (props.errorMessage) {
    return (
      <Admonition
        type="danger"
        title="Error"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
          >
            <path
              fillRule="evenodd"
              d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
            />
          </svg>
        }
      >
        <p>{props.errorMessage}</p>
      </Admonition>
    );
  }
  return (
    <>
      <ThemedImage
        alt="Loading..."
        sources={{
          light: useBaseUrl('/img/mona-loading-default.gif'),
          dark: useBaseUrl('/img/mona-loading-dark.gif'),
        }}
        width="48"
      />
      One moment please...
    </>
  );
}
