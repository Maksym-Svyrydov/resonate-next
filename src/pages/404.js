import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <div>
        <div />
        Something is going wrong...
      </div>
    </div>
  );
};

export default Error;
