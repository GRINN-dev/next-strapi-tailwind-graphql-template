export const readingTime = (text: any) => {
  const wordPerMinute = 200;
  const words = text?.split(/\s/g).length;
  const min = words / wordPerMinute;
  const readTime = Math.ceil(min);
  return `${readTime} minute read`;
};
