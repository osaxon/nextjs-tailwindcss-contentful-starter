import CustomLink from 'components/Utils/CustomLink.jsx';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useEffect, useState } from 'react';

const query = `
query{
  generalCollection{
    items {
      socialUrl
    }
  }
}
`;

const Footer = () => {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      'https://graphql.contentful.com/content/v1/spaces/oyymjzlnon6b?access_token=lGI8x0dbt-N0WLp6HKu6WRnS0vrVxltkBP7TEoor218',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((res) => res.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setData(data.generalCollection.items);
      });
  }, []);

  if (!data) return <span>Loading...</span>;

  return (
    <footer className='flex-grow-0 py-2 bg-azure-900 bg-opacity-10 dark:bg-opacity-90 z-50'>
      <div className='flex flex-col layout items-center justify-center text-white layout'>
        <div className='flex gap-2 mb-2'>
          {data.map((data) => {
            return (
              <SocialIcon
                url={data.socialUrl}
                key={data.socialUrl}
                style={{ height: 25, width: 25 }}
              />
            );
          })}
        </div>
        <div className='text-gray-500'>
          © {new Date().getFullYear()} Website by{' '}
          <CustomLink href='/'>Oliver Saxon</CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
