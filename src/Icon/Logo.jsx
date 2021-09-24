import React from "react";

export function Logo({ width, withText, onClick }) {
  return (
    <svg
      onClick={onClick}
      width={width}
      viewBox={`0 0 52 ${withText ? "52" : "30"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="union-logo"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.3333 5.99999C39.5425 5.99999 41.3333 7.79085 41.3333 9.99999L41.3333 19.1181C41.3334 19.8209 41.3334 20.4273 41.2926 20.9267C41.2495 21.4538 41.1544 21.9781 40.8974 22.4826C40.5139 23.2353 39.9019 23.8472 39.1493 24.2307C38.6448 24.4877 38.1205 24.5828 37.5934 24.6259C37.0939 24.6667 36.4876 24.6667 35.7847 24.6667H30.9333C30.1646 24.6667 29.6682 24.6677 29.2904 24.6986C28.9282 24.7282 28.7939 24.7784 28.728 24.812C28.4771 24.9398 28.2732 25.1438 28.1453 25.3947C28.1117 25.4606 28.0615 25.5949 28.0319 25.9571C28.0048 26.2893 28.0007 26.7132 28.0001 27.3333H32C32.7364 27.3333 33.3333 26.7364 33.3333 26V25.3333H36V26C36 28.2091 34.2091 30 32 30H22.8819C22.1792 30 21.5727 30 21.0733 29.9592C20.5462 29.9162 20.0219 29.8211 19.5174 29.564C18.7647 29.1805 18.1528 28.5686 17.7693 27.8159C17.5122 27.3114 17.4172 26.7872 17.3741 26.26C17.3333 25.7606 17.3333 25.1542 17.3333 24.4514V19.6C17.3333 18.8312 17.3323 18.3349 17.3014 17.9571C17.2718 17.5949 17.2216 17.4606 17.188 17.3947C17.0602 17.1438 16.8562 16.9398 16.6053 16.812C16.5394 16.7784 16.4051 16.7282 16.0429 16.6986C15.7107 16.6714 15.2868 16.6673 14.6667 16.6667V20.6667C14.6667 21.403 15.2636 22 16 22H16.6667V24.6667H16C13.7909 24.6667 12 22.8758 12 20.6667V11.5486C12 10.8458 12 10.2393 12.0408 9.73995C12.0838 9.21283 12.1789 8.68853 12.436 8.18403C12.8195 7.43138 13.4314 6.81946 14.184 6.43596C14.6885 6.17891 15.2128 6.08382 15.74 6.04075C16.2394 5.99994 16.8457 5.99996 17.5486 5.99999L22.4 5.99999C23.1687 5.99999 23.6651 5.99895 24.0429 5.96809C24.4051 5.93849 24.5394 5.88826 24.6053 5.85466C24.8562 5.72683 25.0602 5.52286 25.188 5.27198C25.2216 5.20605 25.2718 5.07176 25.3014 4.70954C25.3286 4.37735 25.3326 3.95346 25.3332 3.33332H21.3333C20.597 3.33332 20 3.93028 20 4.66666V5.33332H17.3333V4.66666C17.3333 2.45752 19.1242 0.666656 21.3333 0.666656H30.4514C31.1542 0.666634 31.7606 0.666616 32.26 0.707419C32.7872 0.750487 33.3114 0.845575 33.816 1.10263C34.5686 1.48613 35.1805 2.09805 35.564 2.8507C35.8211 3.3552 35.9162 3.8795 35.9592 4.40662C36 4.90603 36 5.51234 36 6.21517L36 11.0667C36 11.8354 36.001 12.3318 36.0319 12.7095C36.0615 13.0718 36.1117 13.2061 36.1453 13.272C36.2731 13.5229 36.4771 13.7268 36.728 13.8547C36.7939 13.8883 36.9282 13.9385 37.2904 13.9681C37.6226 13.9952 38.0465 13.9993 38.6667 13.9999V9.99999C38.6667 9.26361 38.0697 8.66666 37.3333 8.66666H36.6667V5.99999H37.3333ZM18.9814 15.3333C19.2102 15.0776 19.4064 14.792 19.564 14.4826C19.8211 13.9781 19.9162 13.4538 19.9592 12.9267C20 12.4273 20 11.8209 20 11.118L19.9995 9.33332H17.3333L17.3333 11.0667C17.3333 11.8354 17.3323 12.3318 17.3014 12.7095C17.2718 13.0718 17.2216 13.206 17.188 13.272C17.0602 13.5229 16.8562 13.7268 16.6053 13.8547C16.5394 13.8883 16.4051 13.9385 16.0429 13.9681C15.7107 13.9952 15.2868 13.9993 14.6667 13.9999V11.6C14.6667 10.8313 14.6677 10.3349 14.6986 9.9571C14.7282 9.59489 14.7784 9.46059 14.812 9.39467C14.9398 9.14379 15.1438 8.93981 15.3947 8.81198C15.4606 8.77839 15.5949 8.72815 15.9571 8.69856C16.3349 8.66769 16.8313 8.66666 17.6 8.66666L22.4514 8.66666C23.1543 8.66668 23.7606 8.6667 24.26 8.6259C24.7872 8.58283 25.3115 8.48774 25.816 8.23068C26.1253 8.07305 26.4109 7.87682 26.6667 7.64808C26.9224 7.87682 27.208 8.07305 27.5174 8.23069C28.0219 8.48774 28.5462 8.58283 29.0733 8.6259C29.5727 8.66671 30.1791 8.66669 30.8819 8.66666L32.6667 8.66615V5.99999L30.9333 5.99999C30.1646 5.99999 29.6682 5.99896 29.2904 5.96809C28.9282 5.9385 28.7939 5.88826 28.728 5.85467C28.4771 5.72684 28.2732 5.52286 28.1453 5.27198C28.1117 5.20606 28.0615 5.07176 28.0319 4.70955C28.0048 4.37735 28.0007 3.95346 28.0001 3.33333H30.4C31.1687 3.33333 31.6651 3.33436 32.0429 3.36523C32.4051 3.39482 32.5394 3.44506 32.6053 3.47865C32.8562 3.60648 33.0602 3.81046 33.188 4.06134C33.2216 4.12726 33.2718 4.26156 33.3014 4.62377C33.3323 5.00156 33.3333 5.49792 33.3333 6.26666V11.1181C33.3333 11.8209 33.3333 12.4273 33.3741 12.9267C33.4172 13.4538 33.5122 13.9781 33.7693 14.4826C33.9269 14.792 34.1232 15.0776 34.3519 15.3333C34.1232 15.5891 33.9269 15.8747 33.7693 16.184C33.5122 16.6885 33.4172 17.2128 33.3741 17.74C33.3333 18.2394 33.3333 18.8457 33.3333 19.5485L33.3338 21.3333L36 21.3333V19.6C36 18.8313 36.001 18.3349 36.0319 17.9571C36.0615 17.5949 36.1117 17.4606 36.1453 17.3947C36.2732 17.1438 36.4771 16.9398 36.728 16.812C36.7939 16.7784 36.9282 16.7282 37.2904 16.6986C37.6226 16.6714 38.0465 16.6673 38.6667 16.6668V19.0667C38.6667 19.8354 38.6656 20.3318 38.6348 20.7095C38.6052 21.0718 38.5549 21.2061 38.5213 21.272C38.3935 21.5229 38.1895 21.7268 37.9386 21.8547C37.8727 21.8883 37.7384 21.9385 37.3762 21.9681C36.9984 21.999 36.5021 22 35.7333 22H30.8819C30.1791 22 29.5727 21.9999 29.0733 22.0407C28.5462 22.0838 28.0219 22.1789 27.5174 22.436C27.208 22.5936 26.9224 22.7898 26.6667 23.0186C26.4109 22.7898 26.1253 22.5936 25.816 22.436C25.3115 22.1789 24.7872 22.0838 24.26 22.0407C23.7606 21.9999 23.1543 22 22.4514 22L20.6667 22.0005V24.6667L22.4 24.6667C23.1687 24.6667 23.6651 24.6677 24.0429 24.6986C24.4051 24.7281 24.5394 24.7784 24.6053 24.812C24.8562 24.9398 25.0602 25.1438 25.188 25.3947C25.2216 25.4606 25.2718 25.5949 25.3014 25.9571C25.3286 26.2893 25.3326 26.7132 25.3332 27.3333H22.9333C22.1646 27.3333 21.6682 27.3323 21.2904 27.3014C20.9282 27.2718 20.7939 27.2216 20.728 27.188C20.4771 27.0602 20.2731 26.8562 20.1453 26.6053C20.1117 26.5394 20.0615 26.4051 20.0319 26.0429C20.001 25.6651 20 25.1687 20 24.4L20 19.5486C20 18.8457 20 18.2394 19.9592 17.7399C19.9162 17.2128 19.8211 16.6885 19.564 16.184C19.4064 15.8746 19.2102 15.5891 18.9814 15.3333Z"
        fill="#3A3842"
      />
      {withText && (
        <>
          <path
            d="M9.72926 36.9831C9.43997 36.9831 9.20545 37.2176 9.20545 37.5069V45.6994C9.20545 47.904 7.63634 48.8838 6.02539 48.8838C4.26798 48.8838 2.84532 47.9244 2.84532 45.6994V37.5069C2.84532 37.2176 2.61081 36.9831 2.32151 36.9831H0.523809C0.234517 36.9831 0 37.2176 0 37.5069V45.5361C0 49.0879 2.2386 51.3333 6.02539 51.3333C9.70757 51.3333 12.0508 49.0879 12.0508 45.5361V37.5069C12.0508 37.2176 11.8163 36.9831 11.527 36.9831H9.72926Z"
            fill="#3A3842"
          />
          <path
            d="M20.2829 40.2287C18.3581 40.2287 17.1028 41.7393 16.6007 42.8211C16.517 42.9845 16.4543 43.1069 16.2869 43.0661C16.0149 43.0049 16.1404 42.7191 16.2241 42.5354C16.4333 42.1067 16.5589 41.7188 16.5589 41.0656V40.9158C16.5589 40.6265 16.3244 40.392 16.0351 40.392H14.4047C14.1154 40.392 13.8809 40.6265 13.8809 40.9158V50.6462C13.8809 50.9355 14.1154 51.17 14.4047 51.17H16.0351C16.3244 51.17 16.5589 50.9355 16.5589 50.6462V46.7812C16.5589 44.2909 17.9815 42.5966 19.5297 42.5966C20.9315 42.5966 21.58 43.2702 21.58 45.6994V50.6462C21.58 50.9355 21.8145 51.17 22.1038 51.17H23.7342C24.0235 51.17 24.258 50.9355 24.258 50.6462V44.8012C24.258 41.7393 22.6679 40.2287 20.2829 40.2287Z"
            fill="#3A3842"
          />
          <path
            d="M25.5757 37.9731C25.5757 38.6946 26.1606 39.2795 26.8821 39.2795H26.9472C27.6687 39.2795 28.2537 38.6946 28.2537 37.9731C28.2537 37.2516 27.6687 36.6667 26.9472 36.6667H26.8821C26.1606 36.6667 25.5757 37.2516 25.5757 37.9731ZM25.5757 50.6462C25.5757 50.9355 25.8102 51.17 26.0995 51.17H27.7298C28.0191 51.17 28.2537 50.9355 28.2537 50.6462V40.9158C28.2537 40.6265 28.0191 40.392 27.7298 40.392H26.0995C25.8102 40.392 25.5757 40.6265 25.5757 40.9158V50.6462Z"
            fill="#3A3842"
          />
          <path
            d="M34.6056 40.2287C31.1536 40.2287 29.0823 42.7191 29.0823 45.781C29.0823 48.843 31.1536 51.3333 34.6056 51.3333C38.0577 51.3333 40.1289 48.843 40.1289 45.781C40.1289 42.7191 38.0577 40.2287 34.6056 40.2287ZM34.6056 48.9654C32.7854 48.9654 31.7603 47.5365 31.7603 45.781C31.7603 44.0255 32.7854 42.5966 34.6056 42.5966C36.4258 42.5966 37.4509 44.0255 37.4509 45.781C37.4509 47.5365 36.4258 48.9654 34.6056 48.9654Z"
            fill="#3A3842"
          />
          <path
            d="M47.3582 40.2287C45.4335 40.2287 44.1782 41.7393 43.6761 42.8211C43.5924 42.9845 43.5296 43.1069 43.3622 43.0661C43.0903 43.0049 43.2158 42.7191 43.2995 42.5354C43.5087 42.1067 43.6342 41.7188 43.6342 41.0656V40.9158C43.6342 40.6265 43.3997 40.392 43.1104 40.392H41.4801C41.1908 40.392 40.9563 40.6265 40.9563 40.9158V50.6462C40.9563 50.9355 41.1908 51.17 41.4801 51.17H43.1104C43.3997 51.17 43.6342 50.9355 43.6342 50.6462V46.7812C43.6342 44.2909 45.0569 42.5966 46.6051 42.5966C48.0068 42.5966 48.6554 43.2702 48.6554 45.6994V50.6462C48.6554 50.9355 48.8899 51.17 49.1792 51.17H50.8095C51.0988 51.17 51.3333 50.9355 51.3333 50.6462V44.8012C51.3333 41.7393 49.7433 40.2287 47.3582 40.2287Z"
            fill="#3A3842"
          />
        </>
      )}
    </svg>
  );
}
