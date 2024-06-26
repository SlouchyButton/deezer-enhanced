function ForwardButton(): React.JSX.Element {
  return (
    <button
      type="button"
      aria-label="Forward"
      className="btn btn-sm btn-ghost"
      onClick={() => {
        window.renderer.historyAPI.goForward();
      }}
    >
      {/* ICON CREDITS: https://iconscout.com/icon/right-chevron-1 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 92 92"
        className="fill-primary"
      >
        <path d="M63 46c0 1.1-.4 2.1-1.2 2.9l-26 25C35 74.6 34 75 33 75c-1.1 0-2.1-.4-2.9-1.2-1.5-1.6-1.5-4.1.1-5.7l23-22.1-23-22.1c-1.6-1.5-1.6-4.1-.1-5.7 1.5-1.6 4.1-1.6 5.7-.1l26 25c.8.8 1.2 1.8 1.2 2.9z" />
      </svg>
    </button>
  );
}

export default ForwardButton;
