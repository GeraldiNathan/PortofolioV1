export const Footer = () => {
  return (
    <div className="py-8 my-9">
      <div className="h-0.5 dark:bg-white bg-zinc-700"></div>
      <div className="flex justify-between gap-4">
        <div className="mt-2">
          <p className="font-bold font-title">
            Geraldi Nathan - Copyright 2026
          </p>
        </div>
        <div className="flex gap-3 mt-2">
          <a className="underline">Term of Service</a>
          <span className="text-black dark:text-white">•</span>
          <a className="underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};
