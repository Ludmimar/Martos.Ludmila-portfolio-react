import { useEffect, useState } from 'react';

interface AnalyticsProps {
  domain: string;
  apiHost?: string;
}

const Analytics = ({ domain, apiHost = 'https://plausible.io' }: AnalyticsProps) => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem('analytics-consent');
    if (savedConsent !== null) {
      setConsentGiven(savedConsent === 'true');
    }
  }, []);

  useEffect(() => {
    if (consentGiven === true) {
      // Load Plausible script
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = domain;
      script.src = `${apiHost}/js/script.js`;
      document.head.appendChild(script);

      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(`script[data-domain="${domain}"]`);
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [consentGiven, domain, apiHost]);

  const handleConsent = (accepted: boolean) => {
    setConsentGiven(accepted);
    localStorage.setItem('analytics-consent', accepted.toString());
  };

  // Don't render anything if consent is already given or denied
  if (consentGiven !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          🍪 Privacidad y Analytics
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Usamos analytics anónimos para mejorar la experiencia. ¿Permites el seguimiento?
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent(true)}
            className="px-3 py-1 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Rechazar
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Puedes cambiar esta preferencia en cualquier momento.
        </p>
      </div>
    </div>
  );
};

export default Analytics;

