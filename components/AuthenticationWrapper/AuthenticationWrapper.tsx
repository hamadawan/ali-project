import React from 'react';
import PuentifyLoader from '@/components/PuentifyLoader';
import { useCurrentUserQuery } from '@/graphql/queries/useCurrentUserQuery';
import { useRouter } from 'next/router';

const withAuth: any = (WrappedComponent: JSX.IntrinsicAttributes) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { data, loading } = useCurrentUserQuery();

    if (loading) {
      return <PuentifyLoader />;
    }

    // if (!data && !loading) {
    //   if (router) router.push('/login');
    //   return null;
    // }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
