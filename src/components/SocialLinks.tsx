import React from 'react';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://twitter.com/credible"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyber-green transition-colors"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="https://discord.gg/credible"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyber-green transition-colors"
      >
        <FaDiscord className="w-6 h-6" />
      </a>
      <a
        href="https://t.me/credible"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyber-green transition-colors"
      >
        <FaTelegram className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/credible"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyber-green transition-colors"
      >
        <FaGithub className="w-6 h-6" />
      </a>
    </div>
  );
}; 