import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUser } from '../database/users';

// TODO: Add Titel and Description
export const metadata = {
  title: { default: 'Home | travel genius', template: '%s | travel genius' },
  description: 'Travel matching platform',
};

const sessionCookie = cookies().get('sessionToken');
const user = sessionCookie && (await getUser(sessionCookie.value));

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <svg
          width="800"
          height="800"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="digital-nomad-working-in-airport">
            <g id="Group">
              <path
                id="Vector"
                d="M222.96 152C222.784 152.15 222.617 152.31 222.46 152.48C221.8 153.02 220.82 153.46 220.46 153.1C220.284 152.807 220.149 152.49 220.06 152.16C219.591 150.652 219.044 149.17 218.42 147.72C218.383 147.664 218.325 147.625 218.26 147.612C218.194 147.599 218.126 147.613 218.07 147.65C218.015 147.687 217.976 147.745 217.963 147.81C217.95 147.876 217.963 147.944 218 148C218.365 150.024 219.039 151.981 220 153.8C220.315 153.982 220.668 154.086 221.032 154.103C221.395 154.121 221.757 154.052 222.087 153.901C222.418 153.75 222.708 153.523 222.933 153.237C223.158 152.952 223.311 152.617 223.38 152.26C223.38 152 223.22 151.86 222.96 152ZM228.98 153.46C229.1 157.46 226.98 159.16 223.36 158.72C223.3 158.72 223.242 158.741 223.195 158.779C223.149 158.817 223.117 158.87 223.105 158.929C223.094 158.988 223.103 159.049 223.131 159.102C223.159 159.155 223.205 159.197 223.26 159.22C224.089 159.52 224.985 159.585 225.849 159.408C226.712 159.231 227.51 158.818 228.154 158.216C228.797 157.613 229.262 156.845 229.496 155.995C229.73 155.145 229.725 154.247 229.48 153.4C229.459 153.346 229.421 153.301 229.372 153.271C229.322 153.241 229.264 153.229 229.207 153.236C229.15 153.243 229.096 153.268 229.055 153.309C229.014 153.35 228.988 153.403 228.98 153.46ZM225.2 140.28C224.76 140.4 224.62 141.22 224.92 142.12C225.22 143.02 225.78 143.64 226.24 143.52C226.7 143.4 226.8 142.58 226.52 141.68C226.24 140.78 225.64 140.16 225.2 140.28ZM227.26 136.96C227.4 137.08 227.62 136.96 227.5 136.76C225.5 134.06 222.38 134.94 222.16 137.6C222.16 137.76 222.4 137.82 222.46 137.6C223.28 135.36 225.3 135.04 227.26 136.96ZM211.24 145.56C210.8 145.74 210.78 146.58 211.24 147.42C211.7 148.26 212.3 148.82 212.74 148.64C213.18 148.46 213.18 147.64 212.74 146.8C212.3 145.96 211.66 145.4 211.24 145.56ZM208.12 144C208.12 144 208.24 144 208.3 143.88C208.338 143.521 208.45 143.175 208.629 142.862C208.808 142.549 209.049 142.277 209.339 142.063C209.629 141.848 209.96 141.696 210.311 141.617C210.662 141.537 211.027 141.531 211.38 141.6C212.46 141.4 209.24 140.12 208.2 142.6C208 142.8 207.82 143.82 208.12 144Z"
                fill="black"
              />
              <path
                id="Vector_2"
                d="M174.66 229.28C174.66 230.813 175.265 232.283 176.342 233.367C177.418 234.451 178.878 235.06 180.4 235.06C181.923 235.06 183.383 234.451 184.459 233.367C185.536 232.283 186.14 230.813 186.14 229.28C186.14 227.747 185.536 226.277 184.459 225.193C183.383 224.109 181.923 223.5 180.4 223.5C178.878 223.5 177.418 224.109 176.342 225.193C175.265 226.277 174.66 227.747 174.66 229.28Z"
                fill="black"
              />
              <path
                id="Vector_3"
                d="M300.16 251.18C305.46 249.18 334.16 246.64 365.16 249.54C365.205 249.526 365.244 249.498 365.272 249.46C365.3 249.422 365.315 249.377 365.315 249.33C365.315 249.283 365.3 249.237 365.272 249.199C365.244 249.162 365.205 249.134 365.16 249.12C335.16 245.86 306.2 248.2 299.96 250.8C299.935 250.813 299.913 250.831 299.895 250.853C299.877 250.874 299.864 250.899 299.855 250.926C299.847 250.953 299.844 250.981 299.846 251.009C299.849 251.038 299.857 251.065 299.87 251.09C299.883 251.115 299.901 251.137 299.923 251.155C299.945 251.173 299.97 251.187 299.997 251.195C300.024 251.203 300.052 251.206 300.08 251.204C300.108 251.201 300.135 251.193 300.16 251.18ZM362.74 258C362.785 257.986 362.824 257.958 362.852 257.92C362.88 257.882 362.895 257.837 362.895 257.79C362.895 257.743 362.88 257.697 362.852 257.659C362.824 257.622 362.785 257.594 362.74 257.58C334.08 254.32 309.4 255.58 299.72 257.58C299.667 257.58 299.616 257.601 299.579 257.638C299.541 257.676 299.52 257.727 299.52 257.78C299.52 257.833 299.541 257.884 299.579 257.921C299.616 257.959 299.667 257.98 299.72 257.98C308.9 256.38 334.2 255.2 362.74 258ZM362 266.2C343.7 264.06 319.76 262.72 301.56 264.2C301.516 264.214 301.476 264.242 301.449 264.279C301.421 264.317 301.406 264.363 301.406 264.41C301.406 264.457 301.421 264.502 301.449 264.54C301.476 264.578 301.516 264.606 301.56 264.62C321.709 263.871 341.885 264.539 361.94 266.62C361.988 266.614 362.033 266.592 362.067 266.558C362.101 266.525 362.124 266.48 362.13 266.433C362.137 266.385 362.128 266.336 362.105 266.294C362.081 266.252 362.044 266.219 362 266.2ZM380 259.5C380 259.22 379.64 259.16 379.58 259.5C377.68 269 371.38 276.58 369.32 268.44C368.939 266.203 368.939 263.917 369.32 261.68C371.32 248.98 381.32 245.82 376.9 260.28C374.42 268.72 370.62 268.06 373.26 258.46C374.42 254.46 375.46 254.32 375.02 254.02C375.003 253.999 374.982 253.982 374.958 253.971C374.934 253.959 374.907 253.953 374.88 253.953C374.853 253.953 374.827 253.959 374.803 253.971C374.778 253.982 374.757 253.999 374.74 254.02C373.845 255.321 373.169 256.76 372.74 258.28C372.06 260.66 370.92 266.94 373.26 266.76C376.24 266.6 379.98 255.1 377.82 251.08C375.66 247.06 369.94 252.3 368.52 261.52C366.18 276.74 377.2 276 380 259.5ZM352.48 333.7C352.48 336.86 355.02 339.38 359.38 339.7C368.76 340.34 368.62 334.8 369.2 325.16C369.34 322.82 369.48 319.9 369.5 317.56C364.36 316.45 359.134 315.781 353.88 315.56C353.84 316 352 329.28 352.48 333.7Z"
                fill="black"
              />
              <path
                id="Vector_4"
                d="M376 291.68C375.88 286.44 375.8 281.12 372.26 277.26C374.827 276.327 376.963 274.484 378.26 272.08C379.994 269.226 381.218 266.093 381.88 262.82C383.22 256.54 382.94 246.2 377.14 244.82C375.38 244.46 371.36 244 367.04 243.6V27.0999L366.4 25.9799H15.0399V277.04H52.9199V281.04C42.3599 282.16 16.4799 287.14 10.6199 295.92C10.1086 296.788 9.89116 297.798 9.99991 298.8C9.92612 300.3 10.2947 301.788 11.0599 303.08C11.9599 304.06 13.0599 303.96 14.2599 304C14.5399 305.46 15.2799 308.96 15.7999 310.52C15.9003 311.124 16.2137 311.672 16.6834 312.064C17.153 312.457 17.7478 312.668 18.3599 312.66L26.3599 313C26.7999 320.84 27.4799 328.64 28.3599 336.42C29.4336 344.905 30.9759 353.325 32.9799 361.64C33.147 362.179 33.4697 362.656 33.9074 363.012C34.3451 363.368 34.8783 363.586 35.4399 363.64C48.3399 364.58 48.4199 364.58 49.8399 363.64C50.5199 363.24 66.5599 344.32 66.8999 342.94C67.0799 342.24 68.4599 316.94 68.6199 314.66V314.54L212.8 320.06C213.479 336.271 215.608 352.388 219.16 368.22C219.27 368.981 219.628 369.684 220.18 370.22C220.777 370.727 221.536 371.004 222.32 371L234.16 371.4C234.956 371.551 235.778 371.49 236.543 371.224C237.309 370.957 237.99 370.493 238.52 369.88C252.52 351.28 253.36 350.76 253.6 350.24C254.02 349.3 255.94 322 255.96 321.56C256.44 321.56 262.5 321.82 262.98 321.68C263.292 321.617 263.582 321.476 263.824 321.27C264.065 321.063 264.25 320.798 264.36 320.5C266.879 318.081 269.132 315.399 271.08 312.5C272.58 305.6 272.54 305.98 272.36 305.36C272.277 305.075 272.131 304.813 271.934 304.592C271.737 304.37 271.493 304.195 271.22 304.08C270.416 303.839 269.578 303.738 268.74 303.78C276.14 295.78 278.86 289.58 279.76 278.74H296C292.22 286.42 288 297.42 290.18 304.44C291.12 304.62 303.96 307.42 314.56 308.56L315 304.44C315.04 304.082 315.221 303.755 315.502 303.53C315.783 303.305 316.142 303.201 316.5 303.24L324.5 304.14C324.854 304.18 325.178 304.358 325.402 304.635C325.627 304.911 325.734 305.265 325.7 305.62L325.36 309.52C332.632 309.994 339.928 309.994 347.2 309.52C348.54 300.64 351.68 280.4 358.02 273.82C358.2 273.62 358.9 274.02 358.64 274.4C357.98 275.32 352.4 278.88 347.78 322.78C346.36 336.18 343.78 361.4 354.48 369.2C355.6 370.02 354.94 370.68 353.8 369.94C342.24 362.46 344.2 336.22 345.6 322.38C345.98 318.48 346.36 315.22 346.92 311.32C339.709 311.84 332.471 311.84 325.26 311.32L324.84 315.56C324.823 315.745 324.768 315.925 324.68 316.089C324.591 316.253 324.47 316.397 324.324 316.513C324.179 316.629 324.011 316.714 323.832 316.763C323.652 316.812 323.464 316.825 323.28 316.8L315.06 315.6C314.711 315.545 314.397 315.36 314.181 315.081C313.966 314.802 313.865 314.451 313.9 314.1L314.26 310.28C306.111 309.456 298.036 308.026 290.1 306C289.36 309 280.94 343.84 287.6 360.42C292.72 373.14 334.56 374.98 352.4 373.8C355.681 373.566 358.846 372.489 361.589 370.675C364.332 368.86 366.561 366.368 368.06 363.44C375.7 374.98 381.06 369.62 385.8 364.84C386.901 362.719 387.708 360.458 388.2 358.12C392.62 338.12 389.18 308 376 291.68ZM320.96 324.78C319.24 327.44 313.52 324.78 313.52 324.78C316.3 324.42 315.78 317.76 315.78 317.76L322.34 318.8C322.467 320.895 321.958 322.979 320.88 324.78H320.96ZM381.32 262.78C380.651 265.969 379.44 269.02 377.74 271.8C376.32 273.96 374.26 276.4 371.74 276.78C370.415 275.566 368.856 274.633 367.16 274.04C364.4 269.12 364.7 258.24 369.6 250.36C376.64 238.96 384.48 248 381.24 262.7L381.32 262.78ZM267.32 173.8H322.6C340.02 179.64 357.14 184.04 365.58 186.2V199.2H293.74C287.78 181.72 274.66 176.2 267.22 173.72L267.32 173.8ZM134.24 304.54L129.08 307.04C129.24 306.5 129.08 306.48 128.5 301.04C131.964 297.61 135.864 294.651 140.1 292.24C137.34 294.9 134.56 298.64 134.28 301.46C134.171 302.483 134.158 303.514 134.24 304.54ZM143.34 290.54C147.337 292.122 151.467 293.347 155.68 294.2C172.82 297.66 213.22 296.72 213.22 295.46V294.98C220.86 295.18 230.6 301.6 236.96 301.6C241.48 301.6 241.78 297.82 240.2 293.6C246.59 292.108 252.71 289.631 258.34 286.26C263.114 286.091 267.894 286.278 272.64 286.82C272.64 287.14 272.42 287.48 272.3 287.8C269.92 294.24 260.68 304.94 254.7 305.36C254.14 305.36 135.26 300.96 135.2 300.96C136 297.52 140.32 292.58 143.34 290.56V290.54ZM70.3399 196.44C75.6399 188.38 91.9999 188 104.96 188C121.57 188.001 138.168 188.909 154.68 190.72C166.56 192.42 167.3 192.72 170.02 205.48L147.24 205.98C146.494 205.998 145.762 206.186 145.1 206.53C144.437 206.874 143.862 207.365 143.419 207.965C142.975 208.565 142.674 209.258 142.539 209.992C142.404 210.726 142.439 211.481 142.64 212.2L144.48 218.96C132.426 217.266 120.287 216.251 108.12 215.92C97.1599 215.48 81.6199 215.2 70.8799 217.5C70.8109 217.513 70.7501 217.553 70.7107 217.611C70.6713 217.67 70.6566 217.741 70.6699 217.81C70.6832 217.879 70.7233 217.94 70.7814 217.979C70.8396 218.018 70.911 218.033 70.9799 218.02C81.2799 216.02 97.6199 216.48 108.08 216.96C117.22 217.36 135.5 218.4 144.7 219.74L149.86 238.52C137.14 236.52 124.2 242.36 120.36 254.52C109.16 253.74 81.1999 250.32 63.7199 253.76C63.696 253.765 63.6733 253.774 63.6531 253.788C63.633 253.802 63.6158 253.819 63.6027 253.84C63.5896 253.86 63.5809 253.883 63.5769 253.908C63.573 253.932 63.574 253.956 63.5799 253.98C63.5799 254.44 64.1399 253.8 70.8399 253.4C84.9999 252.52 106.84 254.44 120.1 255.4C116.96 267.06 121.9 277.2 132.1 284.48C106.097 281.983 79.982 280.828 53.8599 281.02C53.6325 264.46 55.1002 247.921 58.2399 231.66C61.7199 214.62 67.9999 200 70.3399 196.44ZM134.68 85.4799C165.32 77.8599 206.04 71.8799 255 66.1799C255 106.86 254.84 134.88 255 162.66C243.52 140.3 248.22 109.26 223.16 110.66C220.128 110.81 217.159 111.575 214.432 112.909C211.706 114.243 209.279 116.117 207.3 118.418C205.321 120.719 203.83 123.399 202.919 126.294C202.008 129.19 201.695 132.24 202 135.26C202.12 136.74 202.24 138.12 202.42 139.42C199.94 142.98 200.96 149.14 204.92 153.04C206.229 158.668 206.331 164.509 205.22 170.18C203.22 170.88 201.52 171.64 199.78 172.46C177.48 172.46 159.3 172.46 134.7 171.04C134.74 146.84 134.74 113.78 134.68 85.4799ZM133.38 170.96C111.38 169.58 55.6599 165.26 39.6799 149.76C37.6292 147.982 36.0316 145.742 35.0195 143.223C34.0073 140.705 33.6098 137.982 33.8599 135.28C34.7399 128.38 40.9999 122.86 46.7599 118.92C55.3599 118.92 89.8599 118.92 98.5399 118.78C130.12 118 121.86 109.32 130.16 86.6199L133.34 85.7999C133.3 114.16 133.28 146.44 133.38 170.96ZM271.58 141.1C271.28 134.28 281.58 130.3 288.22 128.54C311.3 122.42 342 120.18 365.58 120.34V172.14C346.231 167.7 327.396 161.259 309.38 152.92C303.228 150.27 297.285 147.161 291.6 143.62C291.531 143.587 291.453 143.579 291.379 143.598C291.305 143.618 291.241 143.663 291.197 143.726C291.154 143.788 291.134 143.865 291.142 143.941C291.15 144.017 291.184 144.087 291.24 144.14C296.812 147.944 302.724 151.225 308.9 153.94C327.006 162.472 346.021 168.926 365.58 173.18V185.18C348.44 180.54 272.48 160.84 271.58 141.1ZM365.58 119.28C341.86 119.12 311.1 121.28 287.94 127.52C280.68 129.52 270.28 133.64 270.5 141.12C270.84 152.96 295.06 164.22 319.64 172.7H264C260.84 171.66 258 167.94 256.24 165.08C256.34 143.22 256.34 132.94 256.24 66.0799C322.7 60.7999 355.84 62.2799 365.58 62.0799V119.28ZM264.12 227.28C245.42 225.66 235.58 231.68 220.12 233.74L223.44 248.08C219.68 250.26 215.76 252.7 212.02 255.06L160.5 256.64C159.235 256.67 157.993 256.299 156.951 255.581C155.909 254.862 155.121 253.833 154.7 252.64C176.04 252.06 206.86 250.88 209.94 250.76C210.004 250.76 210.065 250.735 210.11 250.69C210.155 250.645 210.18 250.584 210.18 250.52C210.18 250.456 210.155 250.395 210.11 250.35C210.065 250.305 210.004 250.28 209.94 250.28C197.94 250.6 175.32 251.16 154.5 251.92C145.16 217.92 145.6 219.64 145.66 219.44C145.665 219.371 145.653 219.303 145.625 219.24C145.597 219.177 145.554 219.122 145.5 219.08L143.5 211.9C143.319 211.303 143.28 210.672 143.387 210.057C143.493 209.442 143.742 208.861 144.113 208.36C144.484 207.858 144.968 207.451 145.524 207.17C146.081 206.888 146.696 206.741 147.32 206.74L199.32 205.62C198.544 201.941 197.363 198.359 195.8 194.94C195 192.94 196.58 193.16 197.16 194.36C199.069 197.904 200.527 201.673 201.5 205.58L209.14 205.4C210.36 205.392 211.548 205.797 212.51 206.548C213.472 207.3 214.152 208.354 214.44 209.54L219.52 231.44C231.34 229.78 241.52 225.68 253.76 225.08C257.5 210.34 260.88 194.68 272.64 185.08C273.92 184.06 274.78 185.2 273.46 186.2C267.18 191.02 264.4 197.44 262 204.2C259.32 211.72 258 219 256.38 224.78C259.055 224.694 261.732 224.848 264.38 225.24C267.34 225.76 265.7 227.36 264.12 227.24V227.28ZM210.54 256C202.96 260.8 195.44 265.66 187.66 270C182.24 266.22 177.66 262.3 171.12 257.18L210.54 256ZM170.88 205.36C170.44 203.2 170.02 201.36 169.6 199.84H175.6C175.02 201.58 174.5 203.4 174.06 205.3L170.88 205.36ZM213.64 117.22C213.114 120.508 213.305 123.872 214.2 127.08C214.36 127.64 215.12 126.7 218.58 126.36C222.764 126.035 226.925 127.226 230.303 129.716C233.682 132.205 236.051 135.827 236.98 139.92L234.86 140.14C233.98 133.4 228.64 129.14 224 130.26C219.36 131.38 216.4 137.28 218.78 144.04C217.967 144.084 217.19 144.385 216.56 144.9C214.92 140 210 136 205.58 137.14V134.58C207.097 132.102 209.207 130.04 211.72 128.58C211.764 128.559 211.799 128.524 211.821 128.48C211.842 128.437 211.849 128.388 211.84 128.34C211.538 124.542 212.156 120.728 213.64 117.22ZM222.66 173.22C222.27 171.202 221.687 169.227 220.92 167.32C228.14 169.04 234.8 163.82 237.86 156.84C238.64 159.58 241.3 166.96 247.72 169.6C246.64 172.28 240.98 192.18 232.44 193.6C224.96 194.88 217.78 182.06 217.48 167.98L219.66 166.94H219.88C220.857 168.96 221.615 171.078 222.14 173.26C222.148 173.329 222.183 173.392 222.237 173.435C222.292 173.478 222.361 173.498 222.43 173.49C222.499 173.482 222.562 173.447 222.605 173.393C222.648 173.338 222.668 173.269 222.66 173.2V173.22ZM239.46 149.04C238.52 148.58 239.72 151.96 236.6 157.84C231.08 168.34 217.94 171.84 210.02 155.84C215.32 156.64 218.36 151.62 216.84 145.84C217.134 145.539 217.485 145.301 217.874 145.139C218.262 144.977 218.679 144.896 219.1 144.9C219.832 146.665 220.985 148.224 222.46 149.44C228.34 154.2 235.48 149.44 234.94 141.04L237.16 140.8C237.24 141.227 237.3 141.647 237.34 142.06C237.34 142.34 237.82 142.36 237.94 142.06C239.14 139.34 241.62 138.96 243.02 140.96C245.54 144.5 242.72 150.62 239.46 149.02V149.04ZM224.18 131.04C233.8 128.72 238.4 147.9 228.76 150.22C227.743 150.432 226.691 150.403 225.687 150.135C224.684 149.868 223.757 149.369 222.98 148.68C216.9 143.82 217.74 132.64 224.18 131.08V131.04ZM213.56 154.4C212.33 155.05 210.898 155.2 209.56 154.82C207.249 149.485 205.895 143.784 205.56 137.98C213.38 135.58 220.66 150.44 213.56 154.44V154.4ZM204.56 151.36C203.303 149.933 202.454 148.193 202.102 146.325C201.75 144.456 201.908 142.526 202.56 140.74C203.12 144.86 203.88 148.24 204.56 151.4V151.36ZM197.84 173.36C187.401 178.686 179.492 187.925 175.84 199.06H169.4C167.2 191.56 164.5 191.06 154.8 189.66C149.58 188.9 142.24 188.28 134.56 187.8V171.94C154.56 173.16 170.58 173.3 197.84 173.42V173.36ZM150.18 239.64L153.68 252.4C154.068 253.848 154.923 255.127 156.113 256.038C157.303 256.95 158.761 257.442 160.26 257.44L169.48 257.16C185.2 269.4 191.74 275.88 212.28 283.4V294.94C197.1 295.66 170.88 295.96 155.86 292.94C102.44 281.6 116.84 234 150.18 239.64ZM213.22 294.14V285.28L218.34 285.04C219.54 289.4 219.5 292.64 218.34 294.94C216.671 294.471 214.952 294.203 213.22 294.14ZM223.74 293.94C224.272 292.44 224.628 290.882 224.8 289.3C224.8 289.06 225.46 289.16 225.46 289.44C225.554 291.112 225.173 292.776 224.36 294.24C224.22 294.46 223.66 294.16 223.74 294V293.94ZM227.52 295.18C228.02 293.58 228.2 292 228.58 290.54C228.58 290.3 229.16 290.44 229.18 290.68C229.362 292.358 228.975 294.049 228.08 295.48C228 295.66 227.44 295.42 227.52 295.18ZM231.3 296.42C231.837 294.922 232.186 293.364 232.34 291.78C232.34 291.52 232.94 291.6 232.92 291.78C232.99 293.456 232.61 295.12 231.82 296.6C231.68 296.88 231.18 296.64 231.3 296.42ZM259.82 285.36C265.82 281.58 271.52 276.44 274.26 269.74L274.7 269.48C274.757 275.04 274.146 280.586 272.88 286C268.547 285.48 264.183 285.266 259.82 285.36ZM239.82 292.62C239.212 291.306 238.379 290.108 237.36 289.08C247.78 283.98 259.48 275.22 266.34 265.94C266.373 265.873 266.381 265.797 266.364 265.725C266.347 265.653 266.305 265.589 266.246 265.544C266.187 265.499 266.114 265.476 266.04 265.479C265.966 265.482 265.895 265.511 265.84 265.56C257.753 275.109 247.715 282.816 236.4 288.16C233.284 285.713 229.495 284.276 225.54 284.04C221.436 283.933 217.329 284.066 213.24 284.44V283.2C213.233 283.114 213.204 283.032 213.155 282.962C213.105 282.891 213.038 282.835 212.96 282.8C204.308 279.786 196.086 275.658 188.5 270.52C210.88 257.94 234.38 239.76 249.5 238.52C265.08 237.62 275.24 248.52 274.96 261.9C274.44 284.34 240.14 292.3 239.8 292.62H239.82ZM365.58 27.5999V60.1599C335.58 60.5399 307.96 60.1599 256.24 64.8799C256.24 53.7399 256.24 41.6799 256.14 27.5999H365.58ZM255.08 27.4399V65.0599C212.18 68.9599 163.2 77.3599 134.76 84.3599C134.76 53.8599 134.64 29.1399 134.62 27.4399H255.08ZM16.3199 27.1999H133.48C133.48 37.6399 133.48 59.6399 133.34 84.6999C124.66 86.8599 115.54 89.3799 105.78 92.3999C101.16 110.4 101.64 111.9 98.8399 115.64C128.14 114.64 119.46 101 126.08 87.6399L129.32 86.7999C120.88 109.54 129.12 116.96 98.5199 117.84C89.8599 118.06 56.0399 118.18 47.8199 118.16C49.0599 117.34 50.3399 116.56 51.6399 115.8C68.3599 115.94 75.2999 115.8 75.3799 115.8C77.5999 111.98 77.4799 108.42 79.4799 101.44C64.4999 108 34.8799 119.22 32.8599 135.14C32.5908 138 33.0033 140.883 34.0636 143.553C35.1239 146.223 36.8019 148.604 38.9599 150.5C55.2799 166.26 110.84 170.5 133.38 171.92V187.8C122.96 187.18 112 186.84 104.86 186.84C92.7199 186.84 75.0999 187 69.2599 195.78C68.587 196.852 67.9857 197.968 67.4599 199.12H16.3199V27.1999ZM16.3199 276.14V199.84H67.1999C55.6999 224.4 53.1999 248.9 52.9199 276.14H16.3199ZM53.4599 281.84C80.2047 281.629 106.942 282.831 133.56 285.44C136.232 287.208 139.056 288.734 142 290C136.51 292.29 131.693 295.937 128 300.6L11.4399 296.24C16.0999 290.4 35.4599 283.88 53.3799 281.84H53.4599ZM18.4599 311.84C17.5999 311.84 17.0799 311.56 16.6599 310.28C16.2399 309 15.4799 305.56 15.1999 304.06L25.9999 304.46C25.9999 307.04 26.1799 309.6 26.3199 312.18L18.4599 311.84ZM25.0199 303.6C12.1199 303.1 12.4599 303.32 11.7399 302.52C10.8807 300.762 10.6751 298.756 11.1599 296.86L128 301.1C128.22 302.92 128.38 304.74 128.56 306.54C128.578 306.665 128.568 306.793 128.531 306.914C128.493 307.034 128.428 307.145 128.342 307.237C128.255 307.33 128.149 307.401 128.031 307.447C127.913 307.492 127.786 307.51 127.66 307.5L25.0199 303.6ZM49.4999 363.04C48.4999 363.66 48.5599 363.52 39.6599 363.28C36.4599 363.28 34.1999 363.54 33.6599 361.5C31.85 353.243 30.5145 344.889 29.6599 336.48C28.3852 325.847 27.4713 315.174 26.9199 304.48L44.4999 305.14C44.4999 314.68 45.3199 329.72 45.4399 331.14C46.0866 340.147 47.2149 349.113 48.8199 358C48.8224 358.04 48.8337 358.08 48.8529 358.115C48.872 358.151 48.8987 358.182 48.931 358.206C48.9634 358.231 49.0006 358.248 49.0401 358.256C49.0797 358.265 49.1206 358.265 49.1601 358.256C49.1996 358.247 49.2367 358.23 49.2689 358.205C49.3011 358.181 49.3276 358.15 49.3466 358.114C49.3656 358.078 49.3766 358.039 49.3789 357.998C49.3812 357.958 49.3747 357.918 49.3599 357.88C48.8289 354.879 48.3754 351.864 47.9999 348.84C49.2399 347.28 53.0399 342.84 53.1999 342.58L65.8399 343.46C65.6199 343.8 50.1399 362.58 49.4199 363.02L49.4999 363.04ZM45.4999 313.76L54.1799 314.1C52.8399 346.3 53.3399 331.42 52.9999 341.42C52.9999 342.24 52.9999 342.34 47.8799 347.74C46.8399 340.14 45.7799 327.34 45.4599 313.74L45.4999 313.76ZM66.0999 342.6L53.3799 342C53.5599 341.44 53.3799 342.62 54.9799 314L67.7999 314.5C67.7999 314.5 66.1599 342.1 66.0999 342.6ZM45.4599 312.88C45.4599 312.4 45.3399 307.26 45.3199 305.18L127.6 308.3C129.923 307.522 132.178 306.552 134.34 305.4C134.64 307.18 135.42 308.62 137.16 308.68L212.42 311.56C212.527 314.133 212.647 316.713 212.78 319.3L45.4599 312.88ZM238 369.64C236.98 371 235.86 370.96 234.14 370.88L222.34 370.32C221.77 370.308 221.227 370.079 220.82 369.68C220.393 369.248 220.125 368.684 220.06 368.08C216.06 351.16 214.06 329.1 213.32 311.58L230.72 312.26C230.72 328.46 231.96 349.88 235.26 365.26C235.248 365.301 235.247 365.345 235.255 365.387C235.263 365.43 235.281 365.47 235.307 365.504C235.333 365.538 235.367 365.566 235.406 365.585C235.444 365.604 235.487 365.614 235.53 365.614C235.573 365.614 235.616 365.604 235.654 365.585C235.693 365.566 235.726 365.538 235.753 365.504C235.779 365.47 235.797 365.43 235.805 365.387C235.813 365.345 235.811 365.301 235.8 365.26C235.38 362.54 234.98 359.82 234.62 357.1C236.856 354.79 238.972 352.367 240.96 349.84L252.64 350.44C252.54 350.6 253.72 348.62 238 369.64ZM232 320.88L241.86 321.22L240.54 348.54C240.521 348.934 240.365 349.308 240.1 349.6L234.56 355.88C233.105 344.265 232.25 332.583 232 320.88ZM253.06 349.5L241.26 349.22C241.42 348.74 241.26 350.62 242.74 321.22L255.18 321.64C255.18 321.64 253.1 349.22 253.04 349.5H253.06ZM263.72 320.42C263.63 320.593 263.505 320.747 263.354 320.87C263.203 320.994 263.028 321.086 262.84 321.14C262.52 321.24 232.02 320.04 231.98 320.04C231.98 317.46 231.86 314.88 231.84 312.3L254.82 313.16C256.496 313.227 258.159 312.847 259.64 312.06C260.08 312.06 258.02 311.88 264 312.28C264.296 312.309 264.574 312.437 264.789 312.644C265.003 312.851 265.141 313.125 265.18 313.42C264.813 315.778 264.319 318.115 263.7 320.42H263.72ZM270.94 304.96C271.102 305.034 271.246 305.142 271.364 305.277C271.481 305.411 271.568 305.569 271.62 305.74C271.74 306.14 270.58 311.52 270.38 312.46C268.687 314.925 266.794 317.246 264.72 319.4C265.221 317.427 265.589 315.422 265.82 313.4C265.752 312.965 265.543 312.565 265.225 312.261C264.907 311.958 264.497 311.767 264.06 311.72L260.54 311.58C263.187 309.474 265.693 307.196 268.04 304.76C270.78 304.88 270.64 304.84 270.92 304.96H270.94ZM260.7 310.32C259.064 311.693 256.974 312.406 254.84 312.32L137.2 307.84C134.9 307.84 134.92 303.84 135.2 301.58L253.48 306.18C261.02 306.52 270.76 294.56 273.16 288.18C275.16 282.46 275.5 275.12 275.64 269.02C276.955 268.185 278.217 267.27 279.42 266.28C279.36 288 277.6 296.28 260.68 310.32H260.7ZM279.9 277.82C280.14 274.26 280.22 270.24 280.2 265.5C293.48 254.08 296.88 235.94 296.88 220.02C296.996 213.183 296.024 206.371 294 199.84H365.78V243.48C360.6 242.98 355.28 242.56 353.14 242.4C353.14 242.4 316.94 240.74 303.14 244.4C291.42 247.5 291.38 265 300.76 270.82C299.142 272.997 297.754 275.336 296.62 277.8L279.9 277.82ZM301.16 270.42C292.26 264.78 292.32 248.1 303.28 245.22C313.28 242.6 339.28 242.46 349.78 242.92L374.44 245.02C367.02 247.68 361.88 265.02 366.06 273.64C364.246 273.119 362.393 272.745 360.52 272.52C355.8 271.88 305.08 267.4 301.14 270.42H301.16ZM359.26 341.56C354.08 341.22 350.98 337.76 350.84 333.94C350.34 328.64 352.38 314.14 352.58 313.82C353.346 313.776 354.114 313.776 354.88 313.82L356.36 294.38C359.34 294.26 362.54 296.06 365.92 296.12L364.44 314.9L366.44 315.24L367.4 301.24C368.22 301.24 369.5 301.56 369.8 302.32L368.86 315.46C371.6 316.04 371.26 314.76 370.86 324.26C370.24 335.12 370.24 342.28 359.24 341.56H359.26ZM384 338.44C384.116 344.572 383.586 350.699 382.42 356.72C380.06 367.02 376.1 366.6 370.72 357.56C372.625 351.895 373.782 346.005 374.16 340.04C374.52 336.04 375.74 316.24 375.92 300.48C382 312.24 384.1 325.24 384 338.44Z"
                fill="black"
              />
              <path
                id="Vector_5"
                d="M316.94 305.38L315.94 313.48C315.928 313.619 315.969 313.758 316.054 313.869C316.139 313.98 316.263 314.055 316.4 314.08L322.96 314.96C323.008 314.968 323.056 314.966 323.103 314.955C323.149 314.945 323.193 314.925 323.232 314.897C323.271 314.869 323.305 314.834 323.33 314.793C323.355 314.752 323.372 314.707 323.38 314.66C323.388 314.612 323.387 314.564 323.376 314.517C323.365 314.471 323.345 314.427 323.317 314.388C323.289 314.349 323.254 314.316 323.214 314.29C323.173 314.265 323.128 314.248 323.08 314.24L317.08 313.08L317.42 305.42C317.426 305.356 317.405 305.293 317.364 305.244C317.323 305.195 317.264 305.165 317.2 305.16C317.137 305.154 317.074 305.175 317.025 305.216C316.976 305.257 316.946 305.316 316.94 305.38ZM190.52 106C191.649 104.873 192.482 103.484 192.944 101.957C193.407 100.431 193.485 98.8137 193.172 97.2497C192.858 95.6856 192.164 94.2232 191.149 92.9925C190.134 91.7618 188.831 90.8009 187.355 90.1953C185.88 89.5896 184.277 89.3581 182.691 89.5211C181.104 89.6842 179.582 90.2368 178.26 91.1299C176.939 92.023 175.858 93.2288 175.115 94.6402C174.372 96.0515 173.989 97.6247 174 99.2197C174.023 101.124 174.606 102.978 175.676 104.553C176.746 106.128 178.255 107.354 180.017 108.076C181.778 108.799 183.713 108.988 185.581 108.619C187.449 108.249 189.167 107.339 190.52 106ZM190.16 92.6397C191.218 93.703 191.998 95.0103 192.431 96.4462C192.864 97.882 192.937 99.4024 192.644 100.873C192.35 102.344 191.7 103.72 190.749 104.88C189.798 106.04 188.576 106.948 187.192 107.524C185.807 108.1 184.302 108.327 182.809 108.184C181.316 108.041 179.881 107.533 178.631 106.704C177.381 105.876 176.354 104.752 175.64 103.433C174.927 102.114 174.549 100.639 174.54 99.1397C174.564 97.3406 175.116 95.5882 176.128 94.1002C177.139 92.6122 178.566 91.4542 180.23 90.7702C181.894 90.0862 183.722 89.9064 185.488 90.253C187.253 90.5996 188.878 91.4574 190.16 92.7197V92.6397Z"
                fill="black"
              />
              <path
                id="Vector_6"
                d="M183.66 106C184.777 105.996 185.875 105.717 186.858 105.188C187.842 104.659 188.68 103.896 189.298 102.966C189.917 102.037 190.297 100.969 190.405 99.8579C190.513 98.7466 190.346 97.6257 189.918 96.5943C189.49 95.563 188.815 94.6528 187.952 93.9443C187.089 93.2357 186.065 92.7506 184.97 92.5317C183.875 92.3128 182.743 92.3669 181.674 92.6892C180.605 93.0115 179.632 93.5921 178.84 94.3797C177.874 95.3269 177.214 96.5413 176.944 97.8669C176.674 99.1924 176.807 100.568 177.325 101.818C177.843 103.067 178.724 104.133 179.853 104.878C180.981 105.624 182.308 106.014 183.66 106ZM189.52 96.8797L183.66 105.44C182.673 105.419 181.704 105.18 180.82 104.74L187.84 94.4797C188.593 95.1342 189.17 95.966 189.52 96.8997V96.8797ZM182.92 92.8797C183.956 92.7484 185.008 92.879 185.98 93.2597L179.08 103.26C178.373 102.497 177.871 101.568 177.62 100.56L182.92 92.8797ZM244.62 106C245.725 104.863 246.534 103.473 246.976 101.951C247.418 100.43 247.48 98.8224 247.155 97.2711C246.831 95.7198 246.131 94.2719 245.116 93.0544C244.102 91.837 242.804 90.8872 241.336 90.2886C239.869 89.69 238.277 89.4608 236.7 89.6212C235.124 89.7816 233.611 90.3266 232.294 91.2085C230.977 92.0903 229.897 93.282 229.148 94.6788C228.4 96.0756 228.005 97.6349 228 99.2197C228.013 101.14 228.595 103.013 229.671 104.603C230.747 106.193 232.271 107.429 234.048 108.154C235.826 108.879 237.779 109.062 239.661 108.678C241.542 108.295 243.268 107.363 244.62 106ZM237.76 89.9997C239.567 89.9958 241.335 90.5275 242.839 91.5276C244.344 92.5278 245.519 93.9515 246.215 95.6189C246.911 97.2864 247.097 99.1227 246.75 100.896C246.403 102.669 245.538 104.3 244.264 105.581C242.991 106.863 241.366 107.739 239.595 108.098C237.824 108.456 235.987 108.282 234.315 107.597C232.643 106.912 231.211 105.747 230.201 104.249C229.191 102.751 228.648 100.987 228.64 99.1797C228.635 97.9777 228.867 96.7865 229.322 95.6743C229.778 94.5621 230.449 93.5507 231.296 92.6979C232.143 91.8452 233.15 91.168 234.259 90.705C235.369 90.242 236.558 90.0023 237.76 89.9997Z"
                fill="black"
              />
              <path
                id="Vector_7"
                d="M242.56 104C243.759 102.711 244.411 101.008 244.38 99.249C244.35 97.4896 243.638 95.8106 242.395 94.565C241.152 93.3194 239.474 92.6042 237.715 92.5696C235.956 92.5351 234.251 93.1839 232.96 94.3798C226.5 100.74 236.22 110.44 242.56 104ZM243.62 96.8798L237.76 105.44C236.774 105.417 235.804 105.178 234.92 104.74L242 94.4998C242.734 95.1505 243.291 95.9761 243.62 96.8998V96.8798ZM237.04 92.8798C238.076 92.7377 239.131 92.8687 240.1 93.2598L233.18 103.26C232.481 102.492 231.979 101.565 231.72 100.56L237.04 92.8798ZM285.02 92.3598C283.879 93.4822 283.032 94.8698 282.557 96.3988C282.082 97.9278 281.993 99.5506 282.298 101.122C282.602 102.694 283.291 104.166 284.303 105.407C285.315 106.648 286.618 107.619 288.097 108.234C289.575 108.848 291.183 109.088 292.776 108.93C294.369 108.772 295.899 108.222 297.228 107.33C298.557 106.437 299.645 105.23 300.394 103.814C301.143 102.399 301.53 100.821 301.52 99.2198C301.465 97.3336 300.866 95.5035 299.796 93.9493C298.725 92.3952 297.229 91.1831 295.487 90.4587C293.744 89.7342 291.83 89.5283 289.973 89.8655C288.117 90.2027 286.397 91.0689 285.02 92.3598ZM282.76 99.2198C282.703 97.9849 282.896 96.7511 283.329 95.593C283.761 94.4349 284.425 93.3767 285.278 92.4823C286.132 91.5879 287.158 90.876 288.294 90.3896C289.431 89.9031 290.654 89.6523 291.89 89.6523C293.127 89.6523 294.35 89.9031 295.487 90.3896C296.623 90.876 297.649 91.5879 298.503 92.4823C299.356 93.3767 300.019 94.4349 300.452 95.593C300.885 96.7511 301.078 97.9849 301.02 99.2198C300.98 111.26 282.8 111.04 282.76 99.2198Z"
                fill="black"
              />
              <path
                id="Vector_8"
                d="M287.06 94.3996C285.788 95.6825 285.07 97.4131 285.06 99.2196C285.061 100.792 285.607 102.316 286.605 103.531C287.603 104.747 288.991 105.579 290.533 105.885C292.076 106.192 293.677 105.955 295.064 105.214C296.451 104.474 297.539 103.275 298.141 101.822C298.744 100.37 298.825 98.7534 298.369 97.2481C297.914 95.7429 296.951 94.4419 295.645 93.5667C294.338 92.6915 292.769 92.2962 291.204 92.448C289.639 92.5999 288.174 93.2896 287.06 94.3996ZM285.82 100.72L291.14 92.9796C292.176 92.8491 293.228 92.9798 294.2 93.3596L287.28 103.36C286.589 102.609 286.088 101.704 285.82 100.72ZM291.82 105.46C290.834 105.436 289.865 105.197 288.98 104.76L296 94.4996C296.75 95.1485 297.327 95.9731 297.68 96.8996L291.82 105.46ZM352.84 106C354.184 104.642 355.096 102.917 355.462 101.042C355.827 99.1669 355.63 97.2257 354.894 95.4628C354.158 93.6998 352.918 92.1939 351.328 91.1346C349.738 90.0754 347.871 89.5102 345.96 89.5102C344.05 89.5102 342.183 90.0754 340.593 91.1346C339.003 92.1939 337.762 93.6998 337.027 95.4628C336.291 97.2257 336.094 99.1669 336.459 101.042C336.825 102.917 337.737 104.642 339.08 106C339.983 106.904 341.056 107.622 342.236 108.112C343.417 108.601 344.682 108.853 345.96 108.853C347.239 108.853 348.504 108.601 349.685 108.112C350.865 107.622 351.938 106.904 352.84 106ZM346 89.9996C347.499 89.9967 348.975 90.3632 350.299 91.0667C351.622 91.7701 352.752 92.7888 353.587 94.0327C354.423 95.2766 354.94 96.7073 355.091 98.1983C355.243 99.6893 355.024 101.195 354.455 102.581C353.887 103.968 352.985 105.193 351.83 106.148C350.675 107.103 349.303 107.759 347.834 108.057C346.365 108.355 344.846 108.287 343.41 107.859C341.974 107.43 340.665 106.654 339.6 105.6C338.317 104.329 337.44 102.705 337.081 100.936C336.721 99.1657 336.895 97.3289 337.58 95.658C338.266 93.9871 339.432 92.5574 340.931 91.55C342.43 90.5427 344.194 90.0031 346 89.9996Z"
                fill="black"
              />
              <path
                id="Vector_9"
                d="M350.781 104C351.564 103.206 352.14 102.231 352.458 101.162C352.776 100.093 352.826 98.9624 352.604 97.8694C352.382 96.7764 351.895 95.7547 351.185 94.8946C350.475 94.0344 349.564 93.3621 348.533 92.9368C347.502 92.5116 346.382 92.3466 345.272 92.4563C344.162 92.5659 343.096 92.947 342.168 93.5657C341.24 94.1845 340.478 95.0221 339.951 96.0046C339.423 96.9871 339.144 98.0844 339.141 99.1997C339.145 100.546 339.549 101.861 340.3 102.979C341.051 104.096 342.116 104.966 343.361 105.48C344.605 105.993 345.974 106.126 347.295 105.863C348.615 105.6 349.828 104.951 350.781 104ZM351.841 96.8797L346.001 105.46C345.013 105.449 344.04 105.209 343.161 104.76L350.201 94.4997C350.93 95.1579 351.492 95.9807 351.841 96.8997V96.8797ZM345.241 92.8797C346.276 92.751 347.328 92.8815 348.301 93.2597L341.401 103.26C340.687 102.499 340.178 101.57 339.921 100.56L345.241 92.8797ZM142.261 149.5C142.414 150.979 142.841 152.417 143.521 153.74C148.041 162.62 161.521 161.9 166.681 157.26C171.84 152.62 170.681 147.1 170.681 145.26V119.26C170.534 117.785 170.107 116.353 169.421 115.04C165.421 107.04 157.421 108.42 154.381 108.36C151.381 108.314 148.473 109.393 146.23 111.384C143.986 113.376 142.57 116.136 142.261 119.12C142.161 120.62 142.161 148.42 142.261 149.5ZM142.961 119.28C143.263 116.458 144.603 113.85 146.721 111.961C148.839 110.073 151.583 109.039 154.421 109.06C158.181 109.06 165.241 108.16 168.941 115.38C169.523 116.635 169.843 117.996 169.881 119.38C170.041 121.1 170.021 140.26 169.881 145.24C169.881 148.56 170.601 153.24 166.241 156.94C160.581 162 144.001 161.52 142.981 149.42C142.881 148.4 142.821 120.68 142.961 119.28ZM96.1605 115.72C100.341 110.68 99.1805 104.08 103.301 93.1797C94.5205 95.8997 87.3005 98.4997 81.6805 100.72C80.3405 106.72 78.9405 113.18 77.4005 115.82C84.1005 115.8 89.4405 116 96.1605 115.72Z"
                fill="black"
              />
            </g>
          </g>
        </svg>

        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-poppins text-left mt-6 mb-6 whitespace-pre-wrap">
            The most fun way to plan <strong>YOUR</strong> perfect getaway
          </h1>
          <a className="text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-amatic-sc text-left mt-4">
            Match with Travel Experts and make your dream vacation a reality!
          </a>
          <p className="text-base md:text-lg font-light font-poppins text-left mt-4">
            Connect with professionals who can craft the perfect trip tailored
            to your desires. Whether you crave adventure or relaxation, discover
            amazing destinations and enjoy personalized planning for a
            stress-free, unforgettable travel experience.
          </p>
          {user ? (
            <Link className="btn btn-primary mt-6" href="/searchExperts">
              Search
            </Link>
          ) : (
            <Link className="btn btn-primary mt-6" href="/register">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
