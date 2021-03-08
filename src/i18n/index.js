import I18n from 'react-native-i18n';
import ptBr from './locales/ptbr';
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';

I18n.defaultLocale = 'ptBr';

I18n.fallbacks = true;

I18n.translations = {
  ptBr,
  en,
  es,
  fr,
};

export default I18n;
