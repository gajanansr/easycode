export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-[#282828] text-center">
      <p>
        <a
          property="dct:title"
          rel="cc:attributionURL"
          href="https://easycode.live/"
          className="text-[#ffa116] hover:underline"
        >
          EasyCode
        </a>{" "}
        by{" "}
        <a
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
          href="https://github.com/gajanansr/"
          className="text-[#ffa116] hover:underline"
        >
          Gajanan
        </a>{" "}
        is licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className="text-[#ffa116] hover:underline inline-flex items-center"
        >
          CC BY-NC 4.0
          <img
            className="h-6 ml-1"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt="CC"
          />
          <img
            className="h-6 ml-1"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt="BY"
          />
          <img
            className="h-6 ml-1"
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt="NC"
          />
        </a>
      </p>
    </footer>
  );
}
