import React, { useEffect, useState } from "react";
interface SocialShareProps {
  slugValue: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ slugValue }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  const handleFacebookShare = () => {
    const url = `http://www.facebook.com/sharer/sharer.php?u=${currentUrl}/${slugValue}`;
    window.open(url, "_blank", "width=600,height=400");
  };
  const handleTwitterShare = () => {
    const url = `http://www.twitter.com/share?url=${currentUrl}/${slugValue}`;
    window.open(url, "_blank", "width=600,height=400");
  };
  const handleLinkedInShare = () => {
    const url = `http://www.linkedin.com/shareArticle?url=${currentUrl}/${slugValue}`;
    window.open(url, "_blank", "width=600,height=400");
  };
  const handleMailShare = () => {
    const url = `mailto:?subject=Check out this post by ${currentUrl}/${slugValue}&amp;body=${currentUrl}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="col-span-1 flex justify-end">
      <a
        href={`http://www.facebook.com/sharer/sharer.php?u=${currentUrl}/${
          slugValue ? slugValue : ""
        }`}
        target="_blank"
        onClick={handleFacebookShare}
        className="text-blue-600 hover:text-blue-700 mr-2"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href={`http://www.twitter.com/share?url=${currentUrl}/${
          slugValue ? slugValue : ""
        }`}
        target="_blank"
        onClick={handleTwitterShare}
        className="text-sky-400 hover:text-sky-500 mr-2"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>
      <a
        href={`http://www.linkedin.com/shareArticle?url=${currentUrl}/${
          slugValue ? slugValue : ""
        }`}
        target="_blank"
        onClick={handleLinkedInShare}
        className="text-cyan-600 hover:text-cyan-700 mr-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
        </svg>
      </a>
      <a
        href={`mailto:?subject=Check out this post by ${currentUrl}/${
          slugValue ? slugValue : ""
        }&amp;body=${currentUrl}`}
        target="_blank"
        onClick={handleMailShare}
        className="text-gray-600 hover:text-gray-700"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialShare;
