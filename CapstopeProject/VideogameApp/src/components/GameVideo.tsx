import useVideos from "@/hooks/useVideos";

interface Props {
  id: number;
}
export const GameVideo = ({ id }: Props) => {
  const { data, isLoading, error } = useVideos(id);
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};
