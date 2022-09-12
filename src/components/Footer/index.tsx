import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ops Plus Web',
          title: 'Ops Plus Web',
          href: 'https://github.com/rogerogers/ops-plus-web',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/rogerogers',
          blankTarget: true,
        },
        {
          key: 'Ops Plus',
          title: 'Ops Plus',
          href: 'https://github.com/rogerogers/ops-plus',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
