import { SimpleHeader } from "@components";
import { commonApiClient } from "@redux";
import { useParams } from "react-router-dom";

export const Profile: React.FC = () => {
  const { id } = useParams();

  const { error, isLoading } = commonApiClient.useProfileQuery(id || "");

  if ((error as any)?.status === 400) {
    throw new Response("Profile not Found", { status: 400 });
  }

  if ((error as any)?.status === 404) {
    throw new Response("Product not Activated", { status: 404 });
  }

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      <SimpleHeader />
      <p>profile</p>
    </>
  );
};
