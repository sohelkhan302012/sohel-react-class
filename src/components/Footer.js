import React from "react";
import logo from '../images/favicon.svg'
function Footer(){
    return(
        <>
        <footer class="py-[50px] md:py-[80px] lg:py-[100px]">
      <div class="main-wrapper">
        <div class="flex flex-wrap -mx-4 gap-y-6">
          <div class="xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-full w-full px-4">
            <a href="#" class="flex items-center pt-6 pb-6">
              <img src={logo} alt="logo" />
              <span class="ml-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="71"
                  height="24"
                  viewBox="0 0 71 24"
                  fill="none"
                >
                  <path
                    d="M15.5 0.5C18.2627 0.5 14.448 1.78434 17.948 5.22012C19.9827 7.21746 21 9.70012 21 12.6681C21 15.6175 20.0293 18.1375 18.088 20.2281C16.1467 22.3001 13.7573 23.3361 10.92 23.3361C8.08268 23.3361 5.66535 22.3095 3.66801 20.2561C1.68935 18.2028 0.700012 15.7575 0.700012 12.9201C0.700012 11.3708 0.980012 9.92412 1.54001 8.58012C2.10001 7.21746 2.84668 6.07879 3.78001 5.16412C4.71335 4.24945 5.78668 3.53079 7.00001 3.00812C8.21335 2.48545 14.212 0.5 15.5 0.5ZM5.65601 12.7801C5.65601 14.4415 6.18801 15.7948 7.25201 16.8401C8.33468 17.8668 9.53868 18.3801 10.864 18.3801C12.1893 18.3801 13.384 17.8761 14.448 16.8681C15.512 15.8601 16.044 14.5068 16.044 12.8081C16.044 11.1095 15.5027 9.74679 14.42 8.72012C13.356 7.69346 12.1613 7.18012 10.836 7.18012C9.51068 7.18012 8.31601 7.70279 7.25201 8.74812C6.18801 9.77479 5.65601 11.1188 5.65601 12.7801Z"
                    fill="black"
                  />
                  <path
                    d="M33.0229 2.22412C35.7856 2.22412 38.1843 3.22279 40.2189 5.22012C42.2536 7.21746 43.271 9.70012 43.271 12.6681C43.271 15.6175 42.3003 18.1375 40.359 20.2281C38.4176 22.3001 36.0283 23.3361 33.1909 23.3361C30.3536 23.3361 27.9363 22.3095 25.9389 20.2561C23.9603 18.2028 22.9709 15.7575 22.9709 12.9201C22.9709 11.3708 23.2509 9.92412 23.8109 8.58012C24.3709 7.21746 25.1176 6.07879 26.0509 5.16412C26.9843 4.24945 28.0576 3.53079 29.2709 3.00812C30.4843 2.48545 31.7349 2.22412 33.0229 2.22412ZM27.9269 12.7801C27.9269 14.4415 28.459 15.7948 29.5229 16.8401C30.6056 17.8668 31.8096 18.3801 33.1349 18.3801C34.4603 18.3801 35.6549 17.8761 36.7189 16.8681C37.7829 15.8601 38.3149 14.5068 38.3149 12.8081C38.3149 11.1095 37.7736 9.74679 36.691 8.72012C35.627 7.69346 34.4323 7.18012 33.1069 7.18012C31.7816 7.18012 30.587 7.70279 29.5229 8.74812C28.459 9.77479 27.9269 11.1188 27.9269 12.7801Z"
                    fill="black"
                  />
                  <path
                    d="M48.1539 2.44812L53.3339 2.47612C56.0406 2.47612 58.4206 3.45612 60.4739 5.41612C62.5272 7.35745 63.5539 9.75612 63.5539 12.6121C63.5539 15.4495 62.5459 17.8855 60.5299 19.9201C58.5326 21.9548 56.1059 22.9721 53.2499 22.9721H48.1259C46.9872 22.9721 46.2779 22.7388 45.9979 22.2721C45.7739 21.8801 45.6619 21.2828 45.6619 20.4801V4.91212C45.6619 4.46412 45.6712 4.13745 45.6899 3.93212C45.7272 3.72679 45.8206 3.48412 45.9699 3.20412C46.2312 2.70012 46.9592 2.44812 48.1539 2.44812ZM53.3339 18.0161C54.6779 18.0161 55.8912 17.5215 56.9739 16.5321C58.0566 15.5241 58.5979 14.2641 58.5979 12.7521C58.5979 11.2401 58.0659 9.98012 57.0019 8.97212C55.9566 7.94545 54.7246 7.43212 53.3059 7.43212H50.6179V18.0161H53.3339Z"
                    fill="black"
                  />
                  <path
                    d="M65.9367 4.94012C65.9367 4.51079 65.9461 4.19345 65.9647 3.98812C66.0021 3.76412 66.0954 3.51212 66.2447 3.23212C66.5061 2.72812 67.2341 2.47612 68.4287 2.47612C69.7354 2.47612 70.5101 2.82145 70.7527 3.51212C70.8461 3.82945 70.8927 4.31479 70.8927 4.96812V20.5361C70.8927 20.9841 70.8741 21.3108 70.8367 21.5161C70.8181 21.7215 70.7341 21.9641 70.5847 22.2441C70.3234 22.7481 69.5954 23.0001 68.4007 23.0001C67.0941 23.0001 66.3287 22.6455 66.1047 21.9361C65.9927 21.6375 65.9367 21.1615 65.9367 20.5081V4.94012Z"
                    fill="black"
                  />
                </svg>
              </span>
            </a>
            <p class="text-[#555555] md:text-xl text-lg font-medium mt-9">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>
          <div class="xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-6/12 w-full px-4">
            <h4 class="text-black text-2xl font-semibold mb-5">Useful links</h4>
            <ul>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >About us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Events</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Blogs</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
          <div class="xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-6/12 w-full px-4">
            <h4 class="text-black text-2xl font-semibold mb-5">Main Menu</h4>
            <ul>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Offers</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Menus</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Reservation</a
                >
              </li>
            </ul>
          </div>
          <div class="xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-full w-full px-4">
            <h4 class="text-black text-2xl font-semibold mb-5">Contact Us</h4>
            <ul>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >example@email.com</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >+64 958 248 966</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block text-[#555555] font-medium text-xl py-3"
                  >Social media</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex gap-x-[170px] items-center mt-[50px] lg:mt-[114px] flex-wrap gap-y-6"
        >
          <ul class="flex gap-x-5 social-media-ho">
            <li>
              <a
                href="#"
                class="inline-block size-14 rounded-full bg-[#EDFFEF] hover:bg-[#39DB4A] flex justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="29"
                  viewBox="0 0 18 29"
                  fill="none"
                >
                  <path
                    d="M16 2H12.1818C10.4941 2 8.8754 2.67045 7.68209 3.86387C6.48863 5.05728 5.81818 6.6759 5.81818 8.36364V12.1818H2V17.2727H5.81818V27.4545H10.9091V17.2727H14.7273L16 12.1818H10.9091V8.36364C10.9091 8.02608 11.0432 7.70237 11.2819 7.46368C11.5205 7.225 11.8443 7.09091 12.1818 7.09091H16V2Z"
                    stroke="#484848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block size-14 rounded-full bg-[#EDFFEF] hover:bg-[#39DB4A] fill-white flex justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M13 17.8891C15.7 17.8891 17.8889 15.7002 17.8889 13.0002C17.8889 10.3002 15.7 8.11133 13 8.11133C10.3 8.11133 8.11115 10.3002 8.11115 13.0002C8.11115 15.7002 10.3 17.8891 13 17.8891Z"
                    stroke="#484848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17.8889V8.11111C2 4.73604 4.73604 2 8.11111 2H17.8889C21.2639 2 24 4.73604 24 8.11111V17.8889C24 21.2639 21.2639 24 17.8889 24H8.11111C4.73604 24 2 21.2639 2 17.8889Z"
                    stroke="#484848"
                    stroke-width="2.5"
                  />
                  <path
                    d="M19.7222 6.29069L19.7351 6.27637"
                    stroke="#484848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block size-14 rounded-full bg-[#EDFFEF] hover:bg-[#39DB4A] flex justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 30 25"
                  fill="none"
                >
                  <path
                    d="M28 2.01189C28 2.01189 25.6152 3.42075 24.2891 3.82007C23.5773 3.00167 22.6314 2.42161 21.5792 2.15834C20.527 1.89508 19.4194 1.96129 18.4061 2.34806C17.3928 2.73482 16.5227 3.42345 15.9135 4.32082C15.3043 5.2182 14.9855 6.28101 15 7.36552V8.54734C12.9231 8.60119 10.8651 8.14057 9.00937 7.2065C7.1536 6.27243 5.55765 4.89391 4.36364 3.19371C4.36364 3.19371 -0.363636 13.8301 10.2727 18.5574C7.83881 20.2095 4.93937 21.0379 2 20.921C12.6364 26.8301 25.6364 20.921 25.6364 7.33007C25.6353 7.00087 25.6036 6.67249 25.5418 6.34916C26.748 5.15965 28 2.01189 28 2.01189Z"
                    stroke="#484848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-block size-14 rounded-full bg-[#EDFFEF] hover:bg-[#39DB4A] flex justify-center items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="23"
                  viewBox="0 0 31 23"
                  fill="none"
                >
                  <path
                    d="M18.2 11.5855L13.475 14.2855V8.8855L18.2 11.5855Z"
                    fill="#484848"
                    stroke="#484848"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 12.5403V10.6299C2 6.72115 2 4.76681 3.22241 3.50933C4.44484 2.25184 6.36936 2.19741 10.2184 2.08855C12.0423 2.03696 13.9054 2 15.5 2C17.0946 2 18.9578 2.03696 20.7816 2.08855C24.6306 2.19741 26.5551 2.25184 27.7776 3.50933C29 4.76681 29 6.72115 29 10.6299V12.5403C29 16.4489 29 18.4033 27.7776 19.6607C26.5551 20.9182 24.6307 20.9726 20.7817 21.0816C18.9578 21.1331 17.0946 21.1701 15.5 21.1701C13.9054 21.1701 12.0422 21.1331 10.2183 21.0816C6.36929 20.9726 4.44481 20.9182 3.2224 19.6607C2 18.4033 2 16.4489 2 12.5403Z"
                    stroke="#484848"
                    stroke-width="2.5"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <a href="#" class="text-[#555555] text-xl font-medium">
            Copyright 2023 Dscode | All rights reserved</a
          >
        </div>
      </div>
    </footer>
        </>
    );
}
export default Footer;