// Import necessary modules
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

// Define the Home component
export default function Home({ params }) {
    unstable_setRequestLocale(params.lang);
    const t = useTranslations('Index');
    return <h1>{t('title')}</h1>;
}
