const getLinkData = (linkString: string) => {
  const regexLinkText = /\[(.*?)\]/;
  const regexLinkUrl = /\((.*?)\)/;
  const text = linkString.match(regexLinkText);
  const url = linkString.match(regexLinkUrl);
  return {
    text: text ? text[1] : "",
    url: url ? url[1] : "",
    input: linkString,
  };
};

export const buildStringWithHTMLLinks = (description: string) => {
  const regex = /\[(.*?)\]\((.*?)\)/g;
  const linksMatch = description.match(regex)?.map((link) => getLinkData(link));
  return linksMatch?.reduce((currentDesc, link) => {
    return currentDesc.replaceAll(
      link.input,
      `<a href="${link.url}">${link.text}</a>`
    );
  }, description);
};
