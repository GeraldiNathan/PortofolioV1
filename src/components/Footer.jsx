export const Footer = () => {
  return (
    <div className="py-8 mt-9">
      <div className="h-0.5 bg-white"></div>
      <div className="flex justify-between gap-4">
        <div className="mt-2">
          <p className="font-bold font-title">Geraldi Nathan - Copyright 2025</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#" target="_blank">
            <i className="ri-github-fill ri-2x cursor-pointer"></i>
          </a>
          <a href="#" target="_blank">
            <i className="ri-linkedin-fill ri-2x cursor-pointer"></i>
          </a>
          <a href="#" target="_blank">
            <i className="ri-instagram-fill ri-2x cursor-pointer"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
