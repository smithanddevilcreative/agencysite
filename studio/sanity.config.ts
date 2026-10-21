import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {schemaTypes} from './schemaTypes';

export default defineConfig({
  name: 'website',
  title: 'Smith & Devil Website',
  projectId: '6y2dn5q3',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {types: schemaTypes},
});
