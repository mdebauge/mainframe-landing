import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 px-6 md:px-16 xl:px-24 bg-background md:bg-background/60 md:backdrop-blur-xl z-10">
        <Link href="/">
          <svg
            className="fill-primary h-[18px] md:h-[24px]"
            height="24"
            viewBox="0 0 174 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_311)">
              <path d="M26.9975 17.3C26.9975 19.54 27.0301 20.596 27.6162 21.396C28.4628 22.548 28.6907 22.964 28.6581 23.54C28.593 24.212 28.1372 24.5 27.1603 24.5H20.648C19.6712 24.5 19.2153 24.212 19.1502 23.54C19.1176 22.964 19.3456 22.548 20.1922 21.396C20.7783 20.596 20.8108 19.54 20.8108 17.3V9.26799C18.8572 13.876 16.4151 19.668 15.8941 20.916C14.9498 23.156 14.5916 24.5 12.7356 24.5C11.2378 24.5 10.5214 23.092 9.90277 21.492C9.5446 20.564 7.06993 14.292 4.92088 9.10799V17.3C4.92088 19.54 4.986 20.596 5.5721 21.396C6.4187 22.548 6.67919 22.964 6.64663 23.54C6.58151 24.212 6.12565 24.5 5.11624 24.5H1.6973C0.687893 24.5 0.232034 24.212 0.166911 23.54C0.134349 22.964 0.362279 22.548 1.20888 21.396C1.79498 20.596 1.8601 19.54 1.8601 17.3V9.29999C1.8601 7.09199 1.79498 6.03599 1.20888 5.20399C0.362279 4.05199 0.134349 3.66799 0.166911 3.09199C0.232034 2.41999 0.687893 2.09999 1.6973 2.09999H6.77688C8.14445 2.09999 9.05617 2.45199 9.64228 3.95599C10.3261 5.77999 14.3637 16.596 14.3637 16.596C14.3637 16.596 18.8897 6.06799 19.7689 4.08399C20.3875 2.64399 20.8108 2.09999 22.5692 2.09999H27.1603C28.1372 2.09999 28.593 2.41999 28.6581 3.09199C28.6907 3.66799 28.4628 4.05199 27.6162 5.20399C27.0301 6.03599 26.9975 7.09199 26.9975 9.29999V17.3ZM46.3563 20.692C47.1703 21.524 47.9513 21.396 47.8862 22.356C47.821 23.732 46.0302 24.788 44.2067 24.788C41.7972 24.788 40.5598 24.116 40.0389 22.74C39.1597 24.084 37.8247 24.788 35.7408 24.788C32.2241 24.788 30.1402 22.996 30.1402 20.372C30.1402 16.116 34.1127 14.868 39.8109 14.868V14.42C39.8109 12.628 39.7132 11.22 38.4108 11.028C37.4665 10.9 36.5548 11.156 36.1641 12.372C35.5454 14.324 34.2755 14.772 32.8428 14.292C31.9636 13.972 31.1496 12.948 31.7031 11.572C32.6474 9.13999 35.9687 8.56399 38.7364 8.56399C43.2299 8.56399 45.7371 10.548 45.7371 15.22V15.86C45.7371 18.068 45.6399 19.956 46.3563 20.692ZM40.0389 19.124V17.844C40.0389 16.82 39.6156 16.788 38.5085 16.98C37.2711 17.172 36.2617 18.1 36.1641 19.508C36.0989 20.852 36.7176 21.812 38.1503 21.812C39.4528 21.812 40.0389 20.788 40.0389 19.124ZM57.0166 21.396C57.8632 22.548 58.0911 22.964 58.0585 23.54C57.9934 24.212 57.5376 24.5 56.5607 24.5H50.2764C49.267 24.5 48.8111 24.212 48.7785 23.54C48.7134 22.964 48.9739 22.548 49.8205 21.396C50.4066 20.596 50.4392 19.54 50.4392 17.3C50.4392 15.092 50.4066 14.036 49.8205 13.236C48.9739 12.084 48.7134 11.668 48.7785 11.092C48.8111 10.42 49.2995 10.004 50.2764 9.68399C51.2858 9.36399 53.2069 8.78799 53.5651 8.69199C55.4211 8.17999 56.3979 9.04399 56.3979 10.836V17.3C56.3979 19.54 56.4305 20.596 57.0166 21.396ZM52.9464 7.18799C50.9276 7.18799 49.267 5.71599 49.267 3.85999C49.267 2.03599 50.9276 0.563994 52.9464 0.563994C54.9978 0.563994 56.6584 2.03599 56.6584 3.85999C56.6584 5.71599 54.9978 7.18799 52.9464 7.18799ZM77.8035 21.396C78.6501 22.548 78.9106 22.964 78.878 23.54C78.8129 24.212 78.357 24.5 77.3476 24.5H71.0958C70.0864 24.5 69.6306 24.212 69.5654 23.54C69.5329 22.964 69.7934 22.548 70.64 21.396C71.2261 20.596 71.2586 19.54 71.2586 17.3V16.98C71.2586 14.772 71.2912 11.956 68.9468 11.956C67.4815 11.956 66.7326 13.076 66.7326 15.028V17.3C66.7326 19.54 66.7652 20.596 67.3513 21.396C68.1979 22.548 68.4584 22.964 68.3932 23.54C68.3607 24.212 67.9048 24.5 66.8954 24.5H60.6436C59.6342 24.5 59.1784 24.212 59.1132 23.54C59.0807 22.964 59.3086 22.548 60.1552 21.396C60.7413 20.596 60.8064 19.54 60.8064 17.396C60.8064 15.22 60.7413 14.036 60.1552 13.236C59.3086 12.084 59.0807 11.668 59.1132 11.092C59.1784 10.42 59.6342 10.004 60.6436 9.68399C61.6205 9.36399 63.5416 8.78799 63.8998 8.69199C65.6906 8.21199 66.6349 8.97999 66.7326 10.612C67.8397 9.52399 69.4026 8.56399 71.454 8.56399C75.7195 8.56399 77.1848 11.38 77.1848 13.844V17.3C77.1848 19.54 77.2174 20.596 77.8035 21.396ZM88.1224 0.563994C92.5182 0.403994 94.2765 3.37999 93.3322 5.29999C92.5507 6.93199 89.49 6.73999 89.1969 4.49999C88.969 2.93199 88.5783 2.22799 87.634 2.25999C86.8525 2.29199 86.4618 2.93199 86.4292 3.79599C86.4292 5.49199 87.634 6.57999 88.0573 8.81999H90.9227C91.2593 8.82052 91.582 8.95218 91.82 9.18611C92.0581 9.42004 92.192 9.73717 92.1926 10.068V10.356C92.192 10.6868 92.0581 11.0039 91.82 11.2379C91.582 11.4718 91.2593 11.6035 90.9227 11.604H88.2201V17.3C88.2201 19.54 88.1549 20.66 88.8387 21.396C89.7505 22.356 90.2063 22.932 90.1086 23.54C90.0109 24.18 89.6202 24.5 88.6108 24.5H82.1311C81.1217 24.5 80.6658 24.212 80.6007 23.54C80.5681 22.964 80.7961 22.548 81.6427 21.396C82.2288 20.596 82.2939 19.54 82.2939 17.3V11.604H80.503C80.1664 11.6035 79.8437 11.4718 79.6057 11.2379C79.3676 11.0039 79.2337 10.6868 79.2331 10.356V10.068C79.2337 9.73717 79.3676 9.42004 79.6057 9.18611C79.8437 8.95218 80.1664 8.82052 80.503 8.81999H82.1311C81.7078 2.73999 84.0848 0.691994 88.1224 0.563994ZM104.122 8.56399C107.606 8.56399 108.908 11.38 107.606 13.684C106.727 15.188 104.35 15.572 103.112 13.94C102.233 12.788 102.429 11.732 101.321 11.732C100.507 11.732 100.312 12.34 100.279 13.364V17.3C100.279 19.54 100.312 20.756 100.898 21.396C101.81 22.324 102.266 22.932 102.168 23.54C102.07 24.18 101.68 24.5 100.67 24.5H94.1905C93.1811 24.5 92.7253 24.212 92.6601 23.54C92.6276 22.964 92.8555 22.548 93.7021 21.396C94.2882 20.596 94.3208 19.54 94.3208 17.396C94.3208 15.22 94.2882 14.036 93.7021 13.236C92.8555 12.084 92.6276 11.668 92.6601 11.092C92.7253 10.42 93.1811 10.004 94.1905 9.68399C95.1674 9.36399 97.0885 8.78799 97.4467 8.69199C99.0747 8.24399 100.019 8.85199 100.214 10.228C101.094 9.29999 102.331 8.56399 104.122 8.56399ZM123.848 20.692C124.662 21.524 125.444 21.396 125.379 22.356C125.314 23.732 123.523 24.788 121.699 24.788C119.29 24.788 118.052 24.116 117.531 22.74C116.652 24.084 115.317 24.788 113.233 24.788C109.717 24.788 107.633 22.996 107.633 20.372C107.633 16.116 111.605 14.868 117.304 14.868V14.42C117.304 12.628 117.206 11.22 115.903 11.028C114.959 10.9 114.047 11.156 113.657 12.372C113.038 14.324 111.768 14.772 110.335 14.292C109.456 13.972 108.642 12.948 109.196 11.572C110.14 9.13999 113.461 8.56399 116.229 8.56399C120.722 8.56399 123.23 10.548 123.23 15.22V15.86C123.23 18.068 123.132 19.956 123.848 20.692ZM117.531 19.124V17.844C117.531 16.82 117.108 16.788 116.001 16.98C114.764 17.172 113.754 18.1 113.657 19.508C113.592 20.852 114.21 21.812 115.643 21.812C116.945 21.812 117.531 20.788 117.531 19.124ZM154.958 21.396C155.804 22.548 156.065 22.964 156 23.54C155.967 24.212 155.511 24.5 154.502 24.5H148.25C147.241 24.5 146.785 24.212 146.72 23.54C146.687 22.964 146.915 22.548 147.762 21.396C148.348 20.596 148.38 19.54 148.38 17.3V16.98C148.38 14.772 148.738 11.956 146.394 11.956C144.929 11.956 144.115 13.076 144.115 15.028V17.3C144.115 19.54 144.147 20.596 144.733 21.396C145.58 22.548 145.808 22.964 145.775 23.54C145.71 24.212 145.254 24.5 144.245 24.5H137.993C136.984 24.5 136.528 24.212 136.495 23.54C136.43 22.964 136.691 22.548 137.537 21.396C138.123 20.596 138.156 19.54 138.156 17.3V16.98C138.156 14.772 138.514 11.956 136.17 11.956C134.705 11.956 133.858 13.076 133.858 15.028V17.3C133.858 19.54 133.89 20.596 134.509 21.396C135.356 22.548 135.584 22.964 135.551 23.54C135.486 24.212 135.03 24.5 134.021 24.5H127.769C126.76 24.5 126.304 24.212 126.271 23.54C126.206 22.964 126.466 22.548 127.313 21.396C127.899 20.596 127.932 19.54 127.932 17.3C127.932 15.092 127.899 14.036 127.313 13.236C126.466 12.084 126.206 11.668 126.271 11.092C126.304 10.42 126.792 10.004 127.769 9.68399C128.778 9.36399 130.699 8.78799 131.058 8.69199C132.849 8.21199 133.793 8.97999 133.858 10.644C134.998 9.55599 136.593 8.56399 138.71 8.56399C141.412 8.56399 142.877 9.71599 143.561 11.188C144.701 9.93999 146.492 8.56399 148.934 8.56399C153.199 8.56399 154.339 11.38 154.339 13.844V17.3C154.339 19.54 154.372 20.596 154.958 21.396ZM171.672 19.764C172.616 18.868 173.528 19.572 172.974 20.756C171.998 22.932 169.783 24.788 165.941 24.788C161.415 24.788 156.922 22.26 156.726 16.884C156.563 11.38 160.894 8.37199 165.778 8.56399C170.565 8.69199 172.844 11.956 173.105 14.58C173.333 16.724 172.942 17.556 170.858 17.556H162.815C163.597 21.652 169.034 22.292 171.672 19.764ZM165.29 11.156C163.825 11.252 163.141 12.724 162.848 14.068C162.75 14.42 162.913 14.74 163.206 14.74H167.016C167.797 14.74 168.155 14.196 167.895 13.236C167.667 12.308 167.113 10.996 165.29 11.156Z" />
            </g>
            <defs>
              <clipPath id="clip0_3_311">
                <rect width="174" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-4">
            <li>
              <Button variant="ghost">Docs</Button>
            </li>
            <li>
              <Link href="https://discord.gg/HUS4y59Dxw">
                <Button variant="ghost">
                  <svg
                    className="fill-primary h-[18px] md:h-[24px]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.5535 2.81854C12.5178 2.33396 11.4104 1.98178 10.2526 1.78125C10.1104 2.03832 9.94429 2.38409 9.82976 2.65915C8.599 2.47406 7.37956 2.47406 6.17144 2.65915C6.05693 2.38409 5.88704 2.03832 5.74357 1.78125C4.58454 1.98178 3.47584 2.33525 2.44013 2.8211C0.351095 5.97791 -0.215207 9.0563 0.0679444 12.091C1.4535 13.1257 2.79627 13.7542 4.11638 14.1655C4.44233 13.7169 4.73302 13.2401 4.98345 12.7375C4.5065 12.5563 4.04969 12.3326 3.61805 12.073C3.73256 11.9882 3.84457 11.8995 3.95279 11.8082C6.58546 13.0396 9.44593 13.0396 12.0472 11.8082C12.1566 11.8995 12.2686 11.9882 12.3819 12.073C11.949 12.3339 11.4909 12.5576 11.014 12.7388C11.2644 13.2401 11.5538 13.7182 11.881 14.1668C13.2024 13.7555 14.5464 13.127 15.932 12.091C16.2642 8.57301 15.3644 5.52289 13.5535 2.81854ZM5.34212 10.2247C4.55181 10.2247 3.9037 9.48688 3.9037 8.58843C3.9037 7.68998 4.53797 6.95091 5.34212 6.95091C6.14628 6.95091 6.79437 7.68868 6.78053 8.58843C6.78178 9.48688 6.14628 10.2247 5.34212 10.2247ZM10.6578 10.2247C9.86752 10.2247 9.21941 9.48688 9.21941 8.58843C9.21941 7.68998 9.85366 6.95091 10.6578 6.95091C11.462 6.95091 12.1101 7.68868 12.0962 8.58843C12.0962 9.48688 11.462 10.2247 10.6578 10.2247Z" />
                  </svg>
                  &nbsp; Community
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-x-2">
            <li className="hidden md:block">
              <Link href="https://app.mainframe.so">
                <Button variant="ghost">Log in</Button>
              </Link>
            </li>
            <li>
              <Link href="https://app.mainframe.so/setup">
                <Button>Sign up</Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li className="md:hidden">
              <MobileMenu />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
