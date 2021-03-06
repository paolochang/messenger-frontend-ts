export const useLinkFinder = (str: string) => {
  const pattern = RegExp(
    "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
  );
  const link = pattern.exec(str);
  if (link) return link;
};
