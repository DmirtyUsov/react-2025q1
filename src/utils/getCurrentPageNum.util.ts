import { Page } from '../models';

const parsePageFromUrl = (url: string): number => {
  return +url.split('page=')[1].split('&name')[0];
};

export const getCurrentPageNum = (page: Page<unknown> | undefined) => {
  let pageNum = 0;
  if (!page) {
    return pageNum;
  }
  if (page.info.next) {
    pageNum = parsePageFromUrl(page.info.next) - 1;
  } else if (page.info.prev) {
    pageNum = parsePageFromUrl(page.info.prev) + 1;
  } else {
    pageNum = 1;
  }

  return pageNum;
};
