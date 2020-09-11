import React from 'react';
import { ThemeProvider } from '@leanjs/ui-core';
import 'normalize.css';
import { MagicProvider } from '@leanjs/magic-link';

import { login } from './src/api';
import GraphQLProvider from './src/api/graphql/Provider';
import { createClient } from './src/api/graphql/client';
import theme from './src/config/theme';
import './src/config/site.css';

export const wrapRootElement = ({ element }) => (
  <MagicProvider login={login}>
    {({ getToken }) => (
      <GraphQLProvider
        client={createClient({
          headers: {
            'x-um-orgid': '@VVNFOjVhYWE5YjA3ZjE0NmU1Y2ZhZmFkMTg5ZQ==',
            Authorization: async () => `Bearer ${await getToken()}`,
          },
        })}
      >
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </GraphQLProvider>
    )}
  </MagicProvider>
);
