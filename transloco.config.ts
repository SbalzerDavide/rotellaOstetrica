import {TranslocoGlobalConfig} from '@jsverse/transloco-utils';
    
const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'src/assets/i18n/',
  langs: [ 'en', 'it' ],
  defaultLang: 'it',
  keysManager: {}
};
    
export default config;