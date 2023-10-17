// Import necessary modules
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

// Define the Home component
export default function Home({ params }) {
    // Set the request locale based on the 'params.lang' value
    unstable_setRequestLocale(params.lang);

    const t = useTranslations('Index');

    // Render the translated title inside an <h1> element
    return <h1>{t('title')}</h1>;
}
