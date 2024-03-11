import usePlatforms from "./usePlatforms";

export const usePlatform = (platformId?: number) => {
  const { data: platform } = usePlatforms();
  return platform?.results.find((platform) => platform.id === platformId);
};
