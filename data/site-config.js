import {
  FaGithub,
  FaGitlab,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Khabibur Rokhman. All Rights Reserved.`,
  author: 'Khabibur Rokhman',
  accounts: [
    {
      url: 'https://github.com/',
      label: 'Github Account',
      color: 'gray',
      icon: <FaGithub />
    },
    {
      url: 'https://gitlab.com/grafisaholic',
      label: 'Gitlab Account',
      color: 'red',
      icon: <FaGitlab />
    },
    {
      url: 'https://twitter.com/khabibur__',
      label: 'Twitter Account',
      color: 'twitter',
      icon: <FaTwitter />
    },
    {
      url: 'https://www.linkedin.com/in/khabibur06/',
      label: 'LinkedIn Account',
      color: 'linkedin',
      icon: <FaLinkedin />
    },
    {
      url: 'mailto:khabiburrokhman13@gmail.com',
      label: 'Email Account',
      color: 'red',
      icon: <FiMail />
    }
  ]
}

export default siteConfig;