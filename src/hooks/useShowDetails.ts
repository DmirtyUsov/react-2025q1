import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

const DETAILS_PARAM = 'details';
export const useShowDetails = () => {
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [idDetails, setIdDetails] = useState<string>('');

  useEffect(() => {
    const detailsId = searchParams.get(DETAILS_PARAM) || '';
    setIdDetails(detailsId);
    setIsShowDetails(!!detailsId);
  }, [searchParams]);

  const showDetailsForId = (id: string) => {
    searchParams.set(DETAILS_PARAM, id);
    setSearchParams(searchParams);
  };

  const hideDetails = () => {
    searchParams.delete(DETAILS_PARAM);
    setSearchParams(searchParams);
  };

  return { idDetails, isShowDetails, showDetailsForId, hideDetails };
};
