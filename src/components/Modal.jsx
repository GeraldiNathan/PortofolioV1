function Modal({ isOpen, onClose, title, desc }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-700 rounded-3xl p-6 w-full max-w-md shadow-2xl animate-fadeIn">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <i className="ri-error-warning-line text-4xl text-red-500"></i>
        </div>
        {/* Icon */}

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-2">
          {title}
        </h2>
        {/* Title */}

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-center">{desc}</p>
        {/* Description */}

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Close
          </button>
        </div>
        {/* Button */}
      </div>
    </div>
  );
}

export default Modal;
