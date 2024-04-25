import { useTranslation } from 'react-i18next';

import { commonApiClient } from '@redux';

import { SignUp } from './SignUp';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  const { data } = commonApiClient.useUsersQuery();

  console.log(data);

  return (
    <>
      <div>
        <p className="text-md font-normal text-gray-500 lg:text-lg ">{t('home.paragraph')}</p>
        <br />
        <p className="text-md font-normal text-gray-500 lg:text-lg">{t('home.paragraph')}</p>
      </div>
      <div className="my-10 w-full">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="rtl:bg-mauve12 h-40 rounded-lg bg-violet-100 shadow-lg " />
          <div className="h-40 rounded-lg bg-violet-200 shadow-lg" />
          <div className="h-40 rounded-lg bg-violet-300 shadow-lg" />
          <div className="h-40 rounded-lg bg-violet-400 shadow-lg" />
        </div>
      </div>
      <div>
        <h2>Sign Up</h2>
        <SignUp />
      </div>
    </>
  );
};
