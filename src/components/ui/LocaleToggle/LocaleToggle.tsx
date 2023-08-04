import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { Button, ButtonProps } from '@/components/ui/Button/Button';

export interface LocaleToggleProps extends ButtonProps {
  className?: string;
}

export const LocaleToggle = (props: LocaleToggleProps) => {
  const { t } = useTranslation();

  const nextLocale = i18next.language === 'en' ? 'nl' : 'en';

  return (
    <Button onPress={() => i18next.changeLanguage(nextLocale)} {...props}>
      {t(`components.localeToggle.${nextLocale}`)}
    </Button>
  );
};
