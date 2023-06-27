import { useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface ResponseError extends Error {
  status?: number;
  data?: {
    message?: string;
  };
}

const Error = () => {
  const error = useRouteError() as ResponseError;

  let message: string | undefined = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data?.message;
  }

  if (error.status === 404) {
    message = 'Page not found';
  }

  return (
    <>
      <Navbar />
      <p>{message}</p>
    </>
  );
};

export default Error;
