import { useMediaQuery } from "@react-hook/media-query";
import TouchButton from "../../ui/GetInTouchBtn/TouchButton";
import styles from "./Banner.module.scss";

export default function Banner() {
  const Desktop = useMediaQuery("(min-width: 1920px)");

  return (
    <section className={styles.banner}>
      <div className={styles.backgroundColor}>
        <div className={styles.infoWrap}>
          {Desktop ? (
            <nav>
              <ul className={styles.nav}>
                <li>
                  <a href="">linkedin</a>
                </li>
                <li>
                  <a href="">vimeo</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Twitter</a>
                </li>
              </ul>
            </nav>
          ) : null}
          <p className={styles.title}>
            Let's work together,
            <br /> just drop us a line - info@brandboost.com
          </p>
          <TouchButton color="black" backcolor="#FFFFFF" text="Get in Touch" />
        </div>
        <svg
          className={styles.brand}
          width="408"
          height="172"
          viewBox="0 0 408 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M372.505 85.2285V44.8338H385.927C400.176 44.8338 408 52.6481 408 64.9996C408 77.4142 400.176 85.2285 385.927 85.2285H372.505ZM385.164 51.3247H379.693V78.7376H385.164C395.405 78.7376 400.367 73.8222 400.367 64.9996C400.367 56.2401 395.405 51.3247 385.164 51.3247Z"
            fill="url(#paint0_linear_16_99)"
          />
          <path
            d="M322.797 85.2285V44.5818H328.141L351.549 72.3728V44.8338H358.61V85.4806H353.648L329.922 57.7526V85.2285H322.797Z"
            fill="url(#paint1_linear_16_99)"
          />
          <path
            d="M271.858 85.2286L290.177 44.3297H295.393L313.777 85.2286H305.826L302.454 77.4773H282.926L279.554 85.2286H271.858ZM292.785 54.9798L285.534 71.5536H299.91L292.785 54.9798Z"
            fill="url(#paint2_linear_16_99)"
          />
          <path
            d="M241.982 64.2434H249.106C254.322 64.2434 257.121 61.9117 257.121 57.5635C257.121 53.1522 254.131 51.1356 248.979 51.1356H240.073V85.2285H232.885V44.8338H250.187C259.156 44.8338 264.69 48.993 264.69 56.8073C264.69 63.6132 260.301 67.7094 253.495 68.5287L265.772 85.2285H256.994L241.982 64.2434Z"
            fill="url(#paint3_linear_16_99)"
          />
          <path
            d="M191.315 85.2285V44.8338H207.726C215.614 44.8338 220.703 48.7409 220.703 55.5469C220.703 59.8952 218.222 63.3612 214.405 64.7476C219.113 65.6928 221.784 69.537 221.784 74.2633C221.784 81.3214 216.25 85.2285 207.917 85.2285H191.315ZM198.439 62.4159H206.708C211.034 62.4159 213.515 60.2103 213.515 56.7443C213.515 52.9001 210.907 50.8836 206.772 50.8836H198.439V62.4159ZM198.439 79.1787H207.217C211.925 79.1787 214.596 77.1622 214.596 73.5071C214.596 69.663 211.925 67.7094 207.663 67.7094H198.439V79.1787Z"
            fill="url(#paint4_linear_16_99)"
          />
          <path
            d="M369.382 102.166V95.6754H400.805V102.166H388.783V136.07H381.595V102.166H369.382Z"
            fill="url(#paint5_linear_16_99)"
          />
          <path
            d="M346.338 136.826C340.04 136.826 334.316 134.81 331.135 130.84L334.57 125.546C336.924 128.823 341.376 130.65 346.274 130.65C351.363 130.65 354.544 128.634 354.544 124.79C354.544 121.072 351.554 119.811 348.31 119.118L344.302 118.362C337.496 116.912 332.216 113.762 332.216 106.893C332.216 99.8346 338.005 94.8561 347.038 94.8561C352.699 94.8561 358.169 96.6836 361.159 99.9606L358.169 105.38C355.371 102.418 351.236 101.158 347.228 101.158C342.33 101.158 339.786 103.238 339.786 106.451C339.786 109.476 342.458 110.926 346.656 111.808L349.709 112.438C356.261 113.573 362.177 116.345 362.177 124.349C362.177 132.478 355.943 136.826 346.338 136.826Z"
            fill="url(#paint6_linear_16_99)"
          />
          <path
            d="M301.611 136.826C289.207 136.826 280.683 128.382 280.683 115.841C280.683 103.301 289.207 94.8561 301.611 94.8561C314.142 94.8561 322.539 103.301 322.539 115.841C322.539 128.382 314.142 136.826 301.611 136.826ZM301.611 130.209C309.753 130.209 314.969 124.475 314.969 115.841C314.969 107.208 309.753 101.473 301.611 101.473C293.469 101.473 288.253 107.208 288.253 115.841C288.253 124.475 293.469 130.209 301.611 130.209Z"
            fill="url(#paint7_linear_16_99)"
          />
          <path
            d="M251.095 136.826C238.691 136.826 230.167 128.382 230.167 115.841C230.167 103.301 238.691 94.8561 251.095 94.8561C263.626 94.8561 272.023 103.301 272.023 115.841C272.023 128.382 263.626 136.826 251.095 136.826ZM251.095 130.209C259.237 130.209 264.453 124.475 264.453 115.841C264.453 107.208 259.237 101.473 251.095 101.473C242.953 101.473 237.737 107.208 237.737 115.841C237.737 124.475 242.953 130.209 251.095 130.209Z"
            fill="url(#paint8_linear_16_99)"
          />
          <path
            d="M191.205 136.07V95.6754H207.616C215.504 95.6754 220.593 99.5826 220.593 106.389C220.593 110.737 218.112 114.203 214.295 115.589C219.003 116.534 221.674 120.379 221.674 125.105C221.674 132.163 216.14 136.07 207.807 136.07H191.205ZM198.329 113.258H206.599C210.924 113.258 213.405 111.052 213.405 107.586C213.405 103.742 210.797 101.725 206.662 101.725H198.329V113.258ZM198.329 130.02H207.107C211.815 130.02 214.486 128.004 214.486 124.349C214.486 120.505 211.815 118.551 207.553 118.551H198.329V130.02Z"
            fill="url(#paint9_linear_16_99)"
          />
          <g clip-path="url(#clip0_16_99)">
            <path
              d="M69.6548 171.55C70.8866 170.242 71.5948 169.441 72.3339 168.686C90.1941 150.903 108.054 133.135 125.899 115.337C133.397 107.854 134.629 97.9847 129.209 89.5319C122.481 79.0313 107.408 77.3684 98.6161 86.16C95.198 89.578 91.7645 92.9961 88.3465 96.4296C80.6327 104.159 81.0022 114.798 89.2087 121.911C89.4242 122.096 89.609 122.342 89.84 122.573C85.1132 127.254 80.4479 131.857 75.7827 136.477C69.3315 131.981 66.0674 125.714 62.5415 110.749C59.0619 110.749 55.459 111.056 51.9178 110.702C33.8882 108.824 19.3845 94.1201 17.1058 76.0443C15.3967 62.526 20.0619 51.4403 29.3462 42.0483C42.7413 28.4992 56.2905 15.1194 69.855 1.72426C70.748 0.846649 72.2261 0.107605 73.4578 0.0922086C81.8336 -0.046362 90.2095 0.0152249 98.5853 0.0306217C98.7855 0.0306217 99.001 0.123002 99.5861 0.276969C98.2774 1.61649 97.138 2.81743 95.9832 3.97219C78.508 21.3705 61.0173 38.7688 43.5574 56.1825C36.4595 63.265 34.9198 72.5031 39.3541 80.8327C45.3126 92.0415 61.5715 94.5512 70.5632 85.6519C74.1199 82.1414 77.6303 78.6002 81.1562 75.0589C89.0855 67.1142 88.2849 55.8284 79.3394 49.0692C79.0468 48.8383 78.7697 48.5919 78.3694 48.2532C82.8652 43.3108 87.2841 38.4455 91.8415 33.4415C100.926 40.3855 105.591 49.5003 106.653 60.8169C110.148 60.8169 113.52 60.5706 116.846 60.8631C136.754 62.6184 152.197 79.7703 152.474 99.7707C152.628 111.672 148.317 121.418 140.018 129.656C126.561 143.036 113.12 156.431 99.6939 169.857C98.4621 171.088 97.1996 171.673 95.4444 171.643C87.6844 171.566 79.9244 171.596 72.1645 171.581C71.5794 171.581 70.9943 171.581 69.6702 171.581L69.6548 171.55Z"
              fill="url(#paint10_linear_16_99)"
            />
            <path
              d="M1.58763e-05 10.9931H49.3312C46.6367 13.5028 44.3272 15.7353 41.8945 17.8139C41.3556 18.2758 40.3241 18.2912 39.5234 18.2912C29.6849 18.322 19.8464 18.3066 10.0079 18.3066C9.08409 18.3066 8.17568 18.3066 7.05172 18.3066V157.632H74.2123C71.6256 160.172 69.5163 162.297 67.3299 164.329C67.022 164.622 66.3138 164.545 65.7903 164.545C44.3426 164.545 22.9104 164.545 1.46271 164.545C1.0162 164.545 0.569695 164.468 -0.0153809 164.422V10.9931H1.58763e-05Z"
              fill="url(#paint11_linear_16_99)"
            />
            <path
              d="M167.378 164.16H117.046C119.279 161.758 121.48 159.31 123.821 156.985C124.19 156.631 125.145 156.831 125.838 156.831C136.523 156.831 147.193 156.831 157.878 156.831H160.449V17.5369H93.8585L93.5352 17.0443C95.6138 14.9811 97.6769 12.8871 99.8017 10.8856C100.11 10.593 100.818 10.6238 101.326 10.6238C122.989 10.6238 144.652 10.6238 166.316 10.6238C166.608 10.6238 166.916 10.67 167.363 10.7162V164.16H167.378Z"
              fill="url(#paint12_linear_16_99)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_16_99"
              x1="113.032"
              y1="27.7674"
              x2="440.755"
              y2="108.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_16_99"
              x1="113.032"
              y1="27.7674"
              x2="440.755"
              y2="108.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_16_99"
              x1="113.032"
              y1="27.7674"
              x2="440.755"
              y2="108.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_16_99"
              x1="113.032"
              y1="27.7674"
              x2="440.755"
              y2="108.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_16_99"
              x1="113.032"
              y1="27.7674"
              x2="440.755"
              y2="108.383"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#BC8A34" />
              <stop offset="0.243458" stop-color="#CBA35B" />
              <stop offset="0.517049" stop-color="#FFF9E0" />
              <stop offset="0.719473" stop-color="#EED294" />
              <stop offset="1" stop-color="#EAC77F" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_16_99"
              x1="384.975"
              y1="76.8881"
              x2="427.603"
              y2="142.665"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_16_99"
              x1="346.539"
              y1="75.3361"
              x2="391.703"
              y2="141.597"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_16_99"
              x1="301.453"
              y1="75.3361"
              x2="340.526"
              y2="152.629"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_16_99"
              x1="250.938"
              y1="75.3361"
              x2="290.01"
              y2="152.629"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_16_99"
              x1="206.325"
              y1="76.8881"
              x2="249.475"
              y2="141.451"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.135368" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.72" stop-color="#A2A2A2" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_16_99"
              x1="124.929"
              y1="155.538"
              x2="44.4658"
              y2="16.1818"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F6F6F8" />
              <stop offset="0.26" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.62" stop-color="#F9E38E" />
              <stop offset="1" stop-color="#AD741E" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_16_99"
              x1="68.5309"
              y1="163.667"
              x2="-14.7193"
              y2="19.4921"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F6F6F8" />
              <stop offset="0.26" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.62" stop-color="#F9E38E" />
              <stop offset="1" stop-color="#AD741E" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_16_99"
              x1="181.712"
              y1="155.877"
              x2="98.4468"
              y2="11.64"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F6F6F8" />
              <stop offset="0.26" stop-color="#A2A2A2" />
              <stop offset="0.42" stop-color="#F4F4F7" />
              <stop offset="0.62" stop-color="#F9E38E" />
              <stop offset="1" stop-color="#AD741E" />
            </linearGradient>
            <clipPath id="clip0_16_99">
              <rect width="167.378" height="171.612" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
