import { Info } from "../../types/Info";
import { buildStringWithHTMLLinks } from "../../utils/regExp";

const InfoSection = ({
  description,
  version,
  title,
  termsOfService,
  contact,
  license,
}: Info) => {
  const htmlDescription = buildStringWithHTMLLinks(description);
  return (
    <section className="px-4 pb-8 relative">
      <h2 className="text-3xl text-bold">{title}</h2>
      <p className="absolute block right-2 top-0 py-1 px-2 text-black-400 bg-blue-400 rounded-xl">
        version: {version}
      </p>
      <p
        className="text-black-400 pb-2 pt-6"
        dangerouslySetInnerHTML={{ __html: htmlDescription || "" }}
      />

      <a href={`${termsOfService}`} className="block text-blue-400 py-1">
        Terms of service
      </a>
      <a href={`mailto:${contact.email}`} className="block text-blue-400 py-1">
        Contact to api team
      </a>
      <a href={license.url} className="block text-blue-400 py-1">
        {license.name}
      </a>
    </section>
  );
};

export default InfoSection;
