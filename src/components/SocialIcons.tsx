import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

interface SocialIconsProps {
  iconClass?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ iconClass = '' }) => {
  const { theme } = useTheme();
  const base = theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black';
  const classes = `${base} transition-colors cursor-pointer ${iconClass}`;
  return (
    <>
      <a
        href="https://www.facebook.com/profile.php?id=61558944215453"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook className={classes} />
      </a>
      <a
        href="https://www.linkedin.com/company/auto-mate-consultants/about/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className={classes} />
      </a>
    </>
  );
};

export default React.memo(SocialIcons);
