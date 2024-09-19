import styles from "./Header.module.scss";
import Burger from "../Burger/Burger";
import TouchButton from "../../ui/GetInTouchBtn/TouchButton";
import { useMediaQuery } from "@react-hook/media-query";

export default function Header() {
  const Desktop = useMediaQuery("(min-width: 1920px)");
  const Tablet = useMediaQuery(`(min-width: 1024px)`);
  const Mobile = useMediaQuery(`(max-width: 1023px)`);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg
          width="176"
          height="75"
          viewBox="0 0 176 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M160.302 38.0726V20.489H166.059C172.171 20.489 175.527 23.8905 175.527 29.2671C175.527 34.6711 172.171 38.0726 166.059 38.0726H160.302ZM165.732 23.3145H163.386V35.2471H165.732C170.125 35.2471 172.253 33.1075 172.253 29.2671C172.253 25.4541 170.125 23.3145 165.732 23.3145Z"
            fill="url(#paint0_linear_11_116)"
          />
          <path
            d="M138.982 38.0727V20.3794H141.273L151.314 32.4767V20.4891H154.342V38.1824H152.214L142.037 26.1126V38.0727H138.982Z"
            fill="url(#paint1_linear_11_116)"
          />
          <path
            d="M117.132 38.073L124.99 20.27H127.227L135.113 38.073H131.702L130.256 34.699H121.88L120.434 38.073H117.132ZM126.109 24.9059L122.998 32.1204H129.165L126.109 24.9059Z"
            fill="url(#paint2_linear_11_116)"
          />
          <path
            d="M104.318 28.9379H107.374C109.611 28.9379 110.812 27.9229 110.812 26.0302C110.812 24.11 109.529 23.2322 107.319 23.2322H103.499V38.0726H100.416V20.489H107.838C111.685 20.489 114.058 22.2995 114.058 25.701C114.058 28.6636 112.176 30.4466 109.256 30.8032L114.522 38.0726H110.757L104.318 28.9379Z"
            fill="url(#paint3_linear_11_116)"
          />
          <path
            d="M82.5859 38.0726V20.489H89.6251C93.0083 20.489 95.191 22.1898 95.191 25.1524C95.191 27.0451 94.127 28.5539 92.4899 29.1574C94.5089 29.5688 95.6549 31.2421 95.6549 33.2995C95.6549 36.3718 93.2812 38.0726 89.707 38.0726H82.5859ZM85.6417 28.1424H89.1886C91.0439 28.1424 92.108 27.1823 92.108 25.6736C92.108 24.0002 90.9893 23.1224 89.2159 23.1224H85.6417V28.1424ZM85.6417 35.4392H89.4068C91.4259 35.4392 92.5718 34.5614 92.5718 32.9703C92.5718 31.297 91.4259 30.4466 89.5978 30.4466H85.6417V35.4392Z"
            fill="url(#paint4_linear_11_116)"
          />
          <path
            d="M158.963 45.4453V42.6199H172.441V45.4453H167.284V60.2034H164.201V45.4453H158.963Z"
            fill="url(#paint5_linear_11_116)"
          />
          <path
            d="M149.079 60.5328C146.378 60.5328 143.922 59.655 142.558 57.9268L144.031 55.6226C145.041 57.049 146.951 57.8445 149.051 57.8445C151.234 57.8445 152.598 56.9667 152.598 55.2934C152.598 53.6749 151.316 53.1263 149.924 52.8245L148.206 52.4954C145.286 51.8644 143.022 50.4929 143.022 47.5028C143.022 44.4305 145.504 42.2634 149.379 42.2634C151.807 42.2634 154.153 43.0589 155.436 44.4854L154.153 46.8445C152.953 45.5552 151.18 45.0066 149.461 45.0066C147.36 45.0066 146.268 45.9118 146.268 47.3108C146.268 48.6275 147.414 49.2585 149.215 49.6425L150.525 49.9168C153.335 50.4106 155.872 51.6176 155.872 55.1014C155.872 58.64 153.199 60.5328 149.079 60.5328Z"
            fill="url(#paint6_linear_11_116)"
          />
          <path
            d="M129.894 60.5328C124.574 60.5328 120.918 56.857 120.918 51.3981C120.918 45.9392 124.574 42.2634 129.894 42.2634C135.269 42.2634 138.871 45.9392 138.871 51.3981C138.871 56.857 135.269 60.5328 129.894 60.5328ZM129.894 57.6525C133.387 57.6525 135.624 55.1562 135.624 51.3981C135.624 47.64 133.387 45.1437 129.894 45.1437C126.402 45.1437 124.165 47.64 124.165 51.3981C124.165 55.1562 126.402 57.6525 129.894 57.6525Z"
            fill="url(#paint7_linear_11_116)"
          />
          <path
            d="M108.227 60.5328C102.907 60.5328 99.2506 56.857 99.2506 51.3981C99.2506 45.9392 102.907 42.2634 108.227 42.2634C113.602 42.2634 117.203 45.9392 117.203 51.3981C117.203 56.857 113.602 60.5328 108.227 60.5328ZM108.227 57.6525C111.719 57.6525 113.957 55.1562 113.957 51.3981C113.957 47.64 111.719 45.1437 108.227 45.1437C104.735 45.1437 102.497 47.64 102.497 51.3981C102.497 55.1562 104.735 57.6525 108.227 57.6525Z"
            fill="url(#paint8_linear_11_116)"
          />
          <path
            d="M82.5388 60.2034V42.6199H89.578C92.9612 42.6199 95.1439 44.3206 95.1439 47.2832C95.1439 49.176 94.0799 50.6847 92.4428 51.2882C94.4618 51.6997 95.6078 53.373 95.6078 55.4304C95.6078 58.5027 93.2341 60.2034 89.6599 60.2034H82.5388ZM85.5946 50.2733H89.1415C90.9968 50.2733 92.0609 49.3131 92.0609 47.8044C92.0609 46.1311 90.9422 45.2533 89.1688 45.2533H85.5946V50.2733ZM85.5946 57.57H89.3597C91.3788 57.57 92.5247 56.6922 92.5247 55.1012C92.5247 53.4279 91.3788 52.5775 89.5507 52.5775H85.5946V57.57Z"
            fill="url(#paint9_linear_11_116)"
          />
          <g clip-path="url(#clip0_11_116)">
            <path
              d="M30.5624 74.9466C31.0935 74.3823 31.3989 74.0371 31.7176 73.7118C39.419 66.0435 47.1204 58.382 54.8152 50.7071C58.0485 47.4805 58.5796 43.2248 56.2426 39.5799C53.3413 35.052 46.8416 34.3349 43.0506 38.1259C41.5767 39.5998 40.0962 41.0737 38.6223 42.5542C35.2961 45.8871 35.4554 50.4747 38.9941 53.542C39.0871 53.6217 39.1667 53.7279 39.2663 53.8275C37.2281 55.8458 35.2164 57.8309 33.2048 59.8226C30.423 57.884 29.0155 55.1819 27.4951 48.7286C25.9947 48.7286 24.4411 48.8614 22.9141 48.7087C15.1396 47.8987 8.88555 41.5583 7.90296 33.764C7.16601 27.9348 9.17768 23.1546 13.1811 19.1047C18.9571 13.2623 24.7996 7.49284 30.6487 1.71678C31.0338 1.33835 31.6711 1.01967 32.2023 1.01303C35.814 0.953276 39.4257 0.979833 43.0374 0.986472C43.1237 0.986472 43.2166 1.02631 43.4689 1.0927C42.9046 1.6703 42.4133 2.18816 41.9153 2.6861C34.3799 10.1883 26.8378 17.6906 19.309 25.1995C16.2484 28.2535 15.5845 32.237 17.4965 35.8288C20.0659 40.6621 27.0768 41.7442 30.9541 37.9068C32.4877 36.3931 34.0015 34.8661 35.5218 33.3391C38.941 29.9133 38.5958 25.0468 34.7384 22.1322C34.6123 22.0326 34.4928 21.9264 34.3202 21.7803C36.2588 19.6491 38.1642 17.5512 40.1294 15.3934C44.0465 18.3877 46.0582 22.3181 46.5163 27.1979C48.0234 27.1979 49.4773 27.0916 50.9114 27.2178C59.4958 27.9746 66.1549 35.3706 66.2744 43.9949C66.3408 49.127 64.4818 53.3296 60.9033 56.8815C55.1007 62.6509 49.3047 68.427 43.5154 74.2163C42.9842 74.7475 42.4398 74.9998 41.683 74.9865C38.3368 74.9533 34.9907 74.9666 31.6446 74.9599C31.3923 74.9599 31.14 74.9599 30.569 74.9599L30.5624 74.9466Z"
              fill="url(#paint10_linear_11_116)"
            />
            <path
              d="M0.526865 5.71338H21.7987C20.6369 6.79556 19.641 7.75824 18.592 8.65452C18.3596 8.8537 17.9148 8.86034 17.5696 8.86034C13.3272 8.87362 9.08473 8.86698 4.84232 8.86698C4.44397 8.86698 4.05226 8.86698 3.5676 8.86698V68.9447H32.5276C31.4122 70.0401 30.5026 70.9563 29.5599 71.8327C29.4271 71.9589 29.1217 71.9257 28.896 71.9257C19.6476 71.9257 10.4059 71.9257 1.15758 71.9257C0.965049 71.9257 0.772513 71.8925 0.520226 71.8725V5.71338H0.526865Z"
              fill="url(#paint11_linear_11_116)"
            />
            <path
              d="M72.7011 71.76H50.9977C51.9604 70.7243 52.9098 69.6687 53.919 68.6662C54.0783 68.5135 54.4899 68.5998 54.7887 68.5998C59.3963 68.5998 63.9972 68.5998 68.6048 68.5998H69.7135V8.53534H40.9992L40.8597 8.32288C41.756 7.43324 42.6457 6.53031 43.5619 5.66722C43.6947 5.54108 44.0001 5.55436 44.2192 5.55436C53.5604 5.55436 62.9017 5.55436 72.243 5.55436C72.3692 5.55436 72.5019 5.57427 72.6945 5.59419V71.76H72.7011Z"
              fill="url(#paint12_linear_11_116)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_11_116"
              x1="49.0089"
              y1="13.0601"
              x2="189.81"
              y2="47.1883"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_11_116"
              x1="49.0089"
              y1="13.0602"
              x2="189.81"
              y2="47.1885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_11_116"
              x1="49.0089"
              y1="13.0605"
              x2="189.81"
              y2="47.1888"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_11_116"
              x1="49.0089"
              y1="13.0601"
              x2="189.81"
              y2="47.1884"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_11_116"
              x1="49.0089"
              y1="13.0601"
              x2="189.81"
              y2="47.1884"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_11_116"
              x1="165.651"
              y1="34.4419"
              x2="184.317"
              y2="62.823"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_11_116"
              x1="149.165"
              y1="33.7665"
              x2="168.929"
              y2="62.338"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_11_116"
              x1="129.827"
              y1="33.7665"
              x2="146.983"
              y2="67.2081"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_11_116"
              x1="108.159"
              y1="33.7665"
              x2="125.316"
              y2="67.208"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_11_116"
              x1="89.0241"
              y1="34.4419"
              x2="107.912"
              y2="62.2882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_11_116"
              x1="54.397"
              y1="68.0419"
              x2="19.7007"
              y2="7.95094"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F6F6F8" />
              <stop offset="0.26" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.62" stop-color="#F9E38E" />
              <stop offset="1" stop-color="#AD741E" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_11_116"
              x1="30.0777"
              y1="71.5472"
              x2="-5.82016"
              y2="9.37819"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F6F6F8" />
              <stop offset="0.26" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.62" stop-color="#F9E38E" />
              <stop offset="1" stop-color="#AD741E" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_11_116"
              x1="78.8822"
              y1="68.1881"
              x2="42.9776"
              y2="5.99254"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F6F6F8" />
              <stop offset="0.26" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.62" stop-color="#F9E38E" />
              <stop offset="1" stop-color="#AD741E" />
            </linearGradient>
            <clipPath id="clip0_11_116">
              <rect
                width="72.1742"
                height="74"
                fill="white"
                transform="translate(0.526863 0.973389)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {Tablet ? (
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#services">OUR SERVICES</a>
            </li>
            <li>
              <a href="#cases">CASES</a>
            </li>
            <li>
              <a href="#clients">CLIENTS</a>
            </li>
            <li>
              <a href="#contacts">CONTACTS</a>
            </li>
          </ul>
        </nav>
      ) : null}
      {Desktop ? (
        <TouchButton color="white" backcolor="black" text="Get in Touch" />
      ) : null}
      {Mobile ? <Burger /> : null}
    </header>
  );
}
