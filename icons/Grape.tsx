import * as React from 'react'

const Grape = (props: { width: string; height: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 58 58'
    style={{
      //@ts-ignore
      enableBackground: 'new 0 0 58 58',
      fill: '#6B46C1',
    }}
    xmlSpace='preserve'
    {...props}
  >
    <path d='M46.106 13.556C48.517 10.361 50 6.14 50 1.5h-2c0 8.601-5.547 15.619-12.468 15.967a6.945 6.945 0 0 0-2.602-.898c-.457-3.42-3.386-6.069-6.93-6.069a6.987 6.987 0 0 0-5.496 2.69A6.985 6.985 0 0 0 15 10.5c-3.86 0-7 3.14-7 7 0 1.541.506 2.999 1.402 4.191C6.311 22.417 4 25.191 4 28.5a6.986 6.986 0 0 0 2.596 5.434C3.919 34.918 2 37.486 2 40.5c0 1.192.301 2.334.869 3.362A6.986 6.986 0 0 0 0 49.5c0 3.86 3.14 7 7 7 2.505 0 4.7-1.327 5.938-3.31a7.01 7.01 0 0 0 4.063 1.31c2.803 0 5.219-1.66 6.336-4.044A6.941 6.941 0 0 0 27 51.5c3.113 0 5.756-2.044 6.662-4.86A6.951 6.951 0 0 0 37 47.5c3.86 0 7-3.14 7-7 0-1.52-.493-2.925-1.319-4.074C44.703 35.165 46 32.935 46 30.5c0-3.86-3.107-7.023-7-6.992V23.5a6.955 6.955 0 0 0-1.47-4.276c2.428-.498 4.654-1.695 6.537-3.417C44.724 22.364 50.272 27.5 57 27.5h1v-1c0-6.795-5.242-12.38-11.894-12.944zm-9.192 10.857-.003.009c-.018.098-.053.19-.077.286a5.235 5.235 0 0 1-.145.505c-.048.132-.11.257-.169.383-.056.12-.112.239-.177.354a5.147 5.147 0 0 1-.455.665 4.94 4.94 0 0 1-.3.347c-.086.089-.179.169-.271.251-.108.097-.213.197-.329.284a5.033 5.033 0 0 1-.656.419c-.063.034-.133.056-.197.087a5.019 5.019 0 0 1-.602.244c-.077.025-.157.042-.235.063a4.975 4.975 0 0 1-.757.153c-.025-.014-.051-.024-.076-.038a6.976 6.976 0 0 0-1.541-.65c-.073-.021-.147-.038-.221-.057a7.08 7.08 0 0 0-.623-.126c-.077-.012-.154-.026-.232-.036a7.077 7.077 0 0 0-.828-.056l-.015-.001a5.025 5.025 0 0 1-1.156-1.219l-.064-.1a4.906 4.906 0 0 1-.737-2.03l-.017-.117A4.937 4.937 0 0 1 27 23.5c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .312-.031.617-.086.913zm-3.551 12.494c-.09.165-.193.322-.301.475-.034.048-.067.097-.103.145a4.668 4.668 0 0 1-.311.364c-.056.06-.11.122-.169.179-.101.099-.209.189-.318.28-.074.061-.147.124-.225.181-.107.079-.222.148-.336.219-.088.054-.174.111-.265.159-.027.014-.057.025-.084.038-.015-.011-.032-.019-.047-.03a6.975 6.975 0 0 0-1.87-1.008c-.044-.016-.086-.033-.13-.048a7.07 7.07 0 0 0-1.168-.276A7.063 7.063 0 0 0 27 37.5c-.366 0-.731.029-1.091.086.005-.033.003-.066.008-.099.049-.327.083-.656.083-.987 0-.273-.02-.541-.05-.806-.01-.09-.027-.179-.041-.269a6.886 6.886 0 0 0-.176-.818 6.551 6.551 0 0 0-.162-.497c-.031-.084-.059-.17-.093-.253a6.935 6.935 0 0 0-.337-.713l-.003-.006c.052-.038.096-.087.147-.127.218-.169.427-.345.621-.536.048-.048.092-.099.139-.148.201-.21.39-.429.562-.661l.087-.123c.182-.255.345-.521.491-.799l.043-.082a6.94 6.94 0 0 0 .398-.949l.005-.011A4.866 4.866 0 0 1 29 29.5c.307 0 .604.037.896.091.087.016.173.037.259.057.215.051.425.117.628.195.076.029.154.054.229.087.271.12.533.258.776.422l.007.005a5.116 5.116 0 0 1 1.122 1.074c.051.065.109.122.156.19.166.235.305.486.429.744.021.045.051.085.071.13.129.292.225.596.296.908.005.022.015.042.02.064.068.32.101.649.104.98l-.021.351a4.997 4.997 0 0 1-.609 2.109zm-13.929 4.038a6.738 6.738 0 0 0-1.444-.366c-.063-.009-.124-.021-.187-.029A7.094 7.094 0 0 0 17 40.5c-.285 0-.581.021-.895.065L16 40.489c0-.227-.012-.453-.035-.677-.015-.151-.041-.299-.066-.448-.012-.07-.018-.141-.032-.21a7.048 7.048 0 0 0-.133-.543c-.009-.032-.015-.065-.025-.097a7.068 7.068 0 0 0-.194-.558l-.023-.064a6.835 6.835 0 0 0-.246-.536l-.032-.066a6.474 6.474 0 0 0-.284-.492c-.018-.029-.034-.059-.053-.087a7.17 7.17 0 0 0-.313-.441l-.079-.106a7.057 7.057 0 0 0-.34-.394c-.025-.027-.047-.057-.073-.084.059-.36.158-.712.295-1.052.278-.153.541-.33.795-.519l.069-.051a7.023 7.023 0 0 0 1.386-1.404c.186-.25.36-.51.512-.784l.071-.03c.261-.102.527-.183.797-.239.045-.009.091-.015.137-.023.285-.051.573-.084.866-.084.318 0 .627.037.929.094.039.007.079.012.117.02a4.954 4.954 0 0 1 .962.314c.261.115.512.25.748.406.036.024.071.052.107.077.211.148.409.313.594.491.033.032.068.059.1.092a5.065 5.065 0 0 1 .7.92 4.871 4.871 0 0 1 .576 1.376c.024.094.053.186.071.281.059.302.096.611.096.929 0 .301-.035.602-.094.901-.027.136-.077.271-.116.406-.054.187-.099.374-.176.559a6.92 6.92 0 0 0-2.712 2.735 5.237 5.237 0 0 1-.613.223 7.051 7.051 0 0 0-.745-.339l-.11-.04zM18 28.5a6.902 6.902 0 0 0-.097-1.111 6.948 6.948 0 0 0-.186-.843l-.011-.042a6.905 6.905 0 0 0-.332-.881c-.019-.041-.04-.081-.059-.123a7.095 7.095 0 0 0-.402-.731c-.015-.024-.026-.052-.042-.076a5.26 5.26 0 0 1 .496-.606c.055-.02.107-.046.162-.068a7.387 7.387 0 0 0 .619-.276 5.998 5.998 0 0 0 .594-.339 7.142 7.142 0 0 0 .831-.617c.044-.038.092-.072.135-.111a4.936 4.936 0 0 1 1.942-.12 4.886 4.886 0 0 1 1.496.438c.039.018.079.035.117.054a5.03 5.03 0 0 1 1.422 1.082l.063.069c.121.139.243.278.348.432.015.093.039.183.058.274.039.192.085.381.14.567a6.8 6.8 0 0 0 .147.459c.044.118.095.232.145.347a7.492 7.492 0 0 0 .346.695c.015.026.027.054.043.08.015.148.025.297.025.447 0 .336-.041.665-.105.986l-.05.204a5.005 5.005 0 0 1-1.634 2.629l-.079.065c-.066.053-.145.091-.214.141a6.932 6.932 0 0 0-.994-.819l-.012-.009a6.909 6.909 0 0 0-1.825-.879l-.007-.003a6.915 6.915 0 0 0-.591-.152c-.029-.006-.056-.015-.085-.021a7.355 7.355 0 0 0-.555-.085c-.047-.006-.093-.016-.14-.021A6.954 6.954 0 0 0 19 29.5c-.327 0-.65.031-.969.075-.038.005-.078.003-.116.009.005-.033.003-.066.008-.099A7.1 7.1 0 0 0 18 28.5zm3.591-13.355A5 5 0 0 1 26 12.5a5.01 5.01 0 0 1 4.916 4.084c-.036.006-.07.019-.106.025-.31.053-.616.121-.91.214l-.057.021a6.968 6.968 0 0 0-1.004.419 7.204 7.204 0 0 0-.784.459c-.028.019-.053.041-.081.06-.226.159-.44.333-.645.518a6.708 6.708 0 0 0-.767.799c-.028.034-.052.071-.079.106a7.023 7.023 0 0 0-.457.663c-.035.057-.071.113-.104.172-.15.262-.284.533-.4.814-.02.05-.036.101-.056.151-.096.25-.176.506-.243.768-.011.042-.029.08-.039.122a6.962 6.962 0 0 0-1.706-.929c-.057-.022-.115-.041-.174-.061a6.805 6.805 0 0 0-.871-.243c-.057-.012-.112-.027-.169-.037-.062-.011-.122-.031-.185-.041a5.025 5.025 0 0 1-.49-.732c.008-.023.011-.048.019-.071.114-.33.206-.67.27-1.021.011-.058.017-.116.027-.174.058-.354.095-.715.095-1.086 0-.371-.037-.732-.093-1.087-.009-.059-.016-.117-.027-.175a6.857 6.857 0 0 0-.271-1.022c-.008-.024-.01-.048-.018-.071zM15 12.5a5.006 5.006 0 0 1 4.59 3.026c.12.28.207.568.275.86.008.034.024.065.031.1a4.978 4.978 0 0 1 0 2.028c-.007.035-.023.065-.031.1-.067.292-.154.58-.275.86a5.025 5.025 0 0 1-1.875 2.213c-.23.15-.472.284-.726.395-.045.019-.091.034-.136.053A4.975 4.975 0 0 1 15 22.5a4.32 4.32 0 0 1-.443-.024c-.024-.014-.05-.026-.075-.04a9.526 9.526 0 0 0-.584-.301 7.05 7.05 0 0 0-1.709-.526c-.015-.003-.029-.007-.044-.009A4.978 4.978 0 0 1 10 17.5c0-2.757 2.243-5 5-5zm-9 16c0-2.757 2.243-5 5-5 .295 0 .58.038.861.087.081.014.162.027.242.045a4.965 4.965 0 0 1 .942.316c.254.115.501.243.73.397l.028.018a5.062 5.062 0 0 1 1.433 1.509c.1.161.191.329.272.501.047.099.095.198.136.3.079.201.14.41.193.622.022.088.051.174.068.263.058.306.095.62.095.942 0 .309-.037.609-.091.903-.01.052-.015.104-.027.155a4.916 4.916 0 0 1-.225.722 4.671 4.671 0 0 1-.122.294c-.061.133-.136.257-.208.384-.078.136-.149.276-.239.404-.082.117-.18.22-.272.329-.19.227-.399.436-.626.626-.109.091-.211.189-.328.27-.129.091-.27.163-.408.241A4.922 4.922 0 0 1 11 33.5c-2.757 0-5-2.243-5-5zM4.626 42.916A4.935 4.935 0 0 1 4 40.5c0-2.757 2.243-5 5-5 1.32 0 2.515.524 3.409 1.364.187.175.352.368.508.567.051.065.11.123.158.191.165.233.303.483.426.74.022.046.053.088.073.135.128.29.224.594.295.903.005.023.016.045.021.068.072.337.11.683.11 1.032 0 .231-.02.467-.059.714-.506.248-.97.569-1.403.93-.084.069-.173.132-.253.206-.136.124-.258.262-.384.397-.109.116-.221.229-.322.352-.102.126-.193.26-.286.393-.074.105-.159.202-.227.311-.022-.016-.047-.027-.07-.042a7.129 7.129 0 0 0-.764-.464c-.078-.041-.158-.077-.237-.115a6.934 6.934 0 0 0-.718-.295c-.057-.02-.111-.044-.169-.062a7.031 7.031 0 0 0-.898-.214c-.079-.014-.159-.025-.238-.036A7.105 7.105 0 0 0 7 42.5c-.374 0-.739.038-1.097.095-.059.009-.118.016-.176.027a6.944 6.944 0 0 0-1.028.275c-.024.008-.049.01-.073.019zM7 54.5c-2.757 0-5-2.243-5-5 0-1.998 1.186-3.714 2.885-4.513a4.903 4.903 0 0 1 .811-.293c.16-.042.32-.085.482-.111.096-.016.197-.019.295-.03a5.1 5.1 0 0 1 1.99.191c.061.019.122.036.182.057a4.588 4.588 0 0 1 .847.391c.138.079.276.158.406.25.151.108.29.229.427.353.077.069.162.129.235.204.099.1.179.217.269.326.127.153.256.304.363.469.074.115.131.24.196.361.084.155.173.308.24.471.065.16.107.331.156.5.039.136.091.269.119.408.061.312.097.635.097.966 0 .317-.037.625-.094.926-.032.164-.086.325-.135.487-.051.173-.091.35-.16.515l-.008.023A5.007 5.007 0 0 1 7 54.5zm10-2a4.931 4.931 0 0 1-3.24-1.199c.005-.019.007-.039.012-.059.061-.238.11-.48.146-.726.009-.057.019-.114.026-.171.033-.277.056-.558.056-.845 0-.353-.035-.698-.086-1.037-.01-.064-.018-.127-.029-.191a6.9 6.9 0 0 0-.246-.976c-.015-.045-.033-.089-.049-.133a7.003 7.003 0 0 0-1.007-1.868l-.019-.029c.057-.112.104-.231.169-.338.032-.053.061-.107.095-.158.175-.265.371-.515.593-.742.016-.017.034-.031.05-.047.235-.233.49-.447.769-.631l.003-.003c.292-.193.606-.357.938-.487l.074-.029a4.913 4.913 0 0 1 1.21-.292c.178-.02.355-.039.535-.039a4.978 4.978 0 0 1 1.147.146c.214.051.422.117.624.194.072.028.147.047.218.079a5.02 5.02 0 0 1 1.495 1.007c.177.172.326.363.473.555.055.072.121.133.172.208.114.166.198.348.291.525.358.688.58 1.458.58 2.286 0 .303-.038.596-.089.884-.011.061-.018.121-.031.182-.491 2.246-2.49 3.934-4.88 3.934zm10-3c-1.12 0-2.19-.372-3.066-1.056.003-.02.002-.04.004-.06.037-.29.062-.584.062-.884 0-.23-.013-.458-.035-.684-.006-.06-.017-.118-.024-.178a6.844 6.844 0 0 0-.076-.497c-.012-.06-.027-.119-.041-.179a6.495 6.495 0 0 0-.124-.48l-.053-.163a7.136 7.136 0 0 0-.172-.47c-.021-.052-.044-.104-.067-.156a6.83 6.83 0 0 0-.536-.99c-.042-.064-.083-.129-.127-.192a7.657 7.657 0 0 0-.233-.312c-.06-.076-.119-.153-.182-.227-.022-.026-.041-.053-.063-.078.042-.125.102-.24.153-.36l.113-.23a5.022 5.022 0 0 1 2.279-2.28l.262-.129c.073-.03.144-.064.219-.09.158-.058.319-.1.48-.14.083-.021.165-.043.25-.06a5.65 5.65 0 0 1 .732-.086c.14-.006.279-.007.419-.002.192.007.38.029.566.057.197.03.39.072.582.125.144.04.288.081.427.133a4.908 4.908 0 0 1 .816.398c.095.057.194.108.286.171.202.141.388.3.567.468.189.178.353.373.51.572.054.069.116.13.167.202.13.185.232.384.335.583.052.102.118.195.164.301.082.188.132.389.189.587.036.124.088.241.115.369A5.006 5.006 0 0 1 27 49.5zm10-4a4.977 4.977 0 0 1-3-1.008l-.001-.013a6.955 6.955 0 0 0-.078-.974l-.027-.174a6.971 6.971 0 0 0-.635-1.947l-.015-.03a7.137 7.137 0 0 0-.549-.908l-.003-.006a6.92 6.92 0 0 0 1.297-1.055c.067-.069.131-.14.195-.211.15-.167.29-.341.423-.521.059-.08.122-.156.177-.238.153-.227.292-.463.417-.706.074-.142.136-.29.2-.437a7.284 7.284 0 0 0 .323-.892l.021-.087c.053-.198.106-.396.142-.599.374-.096.841-.194 1.113-.194.331 0 .654.036.967.098.138.027.269.078.403.117.17.049.343.091.505.157.159.065.309.153.461.235.125.067.254.125.372.202.161.105.309.231.459.355C41.277 37.581 42 38.951 42 40.5c0 2.757-2.243 5-5 5zm7-15a5.022 5.022 0 0 1-2.739 4.453c-.018-.014-.038-.023-.056-.036a6.975 6.975 0 0 0-1.87-1.008c-.044-.016-.086-.033-.13-.048a7.07 7.07 0 0 0-1.168-.276A7.088 7.088 0 0 0 37 33.5c-.024 0-.114.008-.229.02-.279.009-.557.03-.833.073-.003-.021-.01-.042-.013-.063a7.035 7.035 0 0 0-.154-.775c-.012-.045-.022-.09-.035-.135a6.932 6.932 0 0 0-.785-1.787 7.075 7.075 0 0 0-.539-.766c.028-.01.053-.025.08-.035.214-.081.422-.173.625-.273l.092-.048c.22-.114.433-.238.639-.373l.012-.008a6.987 6.987 0 0 0 2.847-3.819C41.57 25.331 44 27.646 44 30.5zm2.05-14.95c5.229.497 9.403 4.671 9.9 9.9-5.229-.497-9.403-4.671-9.9-9.9z' />
  </svg>
)

export default Grape
