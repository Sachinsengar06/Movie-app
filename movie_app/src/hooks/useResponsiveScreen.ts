import { useMediaQuery } from "react-responsive";

interface UseResponsiveScreenProps {
  query: string;  // Rename scrWidth to query for clarity
}

const useResponsiveScreen = ({ query }: UseResponsiveScreenProps): boolean => {
  const matches = useMediaQuery({ query }); // useMediaQuery returns a boolean value
  return matches;
};

export default useResponsiveScreen;
