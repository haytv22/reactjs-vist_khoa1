import { Link, useRouteError } from "react-router-dom";
import { Button, Result } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Result
        status="403"
        title="403"
        subTitle={error.error.message}
        extra={
          <Button>
            <Link to="/" type="primary">
              Back Home
            </Link>
          </Button>
        }
      />
    </>
  );
}
