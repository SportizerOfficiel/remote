import React from 'react'

import Timer from '../../components/Timer'

import '../parallelogram.css'

const BasketMatch = () => {
  return (
    <>
      <div className="w-full h-full font-hindGuntur relative">
        <div className="parallelogram w-screen absolute mt-32"></div>
        <div className="flex justify-between ">
          <div className="pl-20 flex ">
            <button
              className=" rounded-2xl hover:bg-blue-200 w-20 h-20 bg-primary-color pl-6  text-white z-0 "
              onClick={() => Option()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32.995"
                height="33"
                viewBox="0 0 32.995 33"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_30"
                      data-name="Rectangle 30"
                      width="32.995"
                      height="33"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Groupe_77"
                  data-name="Groupe 77"
                  transform="translate(3 0)"
                >
                  <g
                    id="Groupe_55"
                    data-name="Groupe 55"
                    transform="translate(-3 0)"
                    clipPath="url(#clip-path)"
                  >
                    <path
                      id="Tracé_14"
                      data-name="Tracé 14"
                      d="M30.779,12.56H28.13c-.63,0-.811-.244-.912-.507a.843.843,0,0,1,.284-.992c.631-.622,1.265-1.259,1.878-1.875l.021-.021a2.019,2.019,0,0,0-.007-3.1Q28.159,4.825,26.918,3.59a2.056,2.056,0,0,0-3.082,0q-.368.366-.733.733c-.386.388-.773.775-1.163,1.158a1.486,1.486,0,0,1-.376.287.8.8,0,0,1-.334.076.823.823,0,0,1-.788-.853c-.008-.548-.007-1.107-.005-1.648,0-.417,0-.834,0-1.251A2.023,2.023,0,0,0,19.258.186c-.08-.04-.163-.076-.246-.111l-.1-.045L18.842,0h-4.69l-.068.03-.1.045c-.083.036-.166.072-.246.112a2.023,2.023,0,0,0-1.177,1.905c0,.417,0,.835,0,1.252,0,.54,0,1.1-.005,1.646a.785.785,0,0,1-1.121.778,1.469,1.469,0,0,1-.376-.286c-.393-.386-.782-.776-1.171-1.165q-.362-.363-.725-.725a2.19,2.19,0,0,0-1.544-.7,2.182,2.182,0,0,0-1.538.693c-.9.891-1.714,1.708-2.5,2.5a2.025,2.025,0,0,0,.012,3.074q.356.359.716.714c.41.407.833.827,1.24,1.247a.919.919,0,0,1,.264.833.737.737,0,0,1-.479.539,1.472,1.472,0,0,1-.468.061q-.6.005-1.194,0H2.283A2.03,2.03,0,0,0,.1,13.979l-.1.086v4.869l.1.086a2.031,2.031,0,0,0,2.18,1.42H3.671q.6,0,1.194.005a1.472,1.472,0,0,1,.468.061.737.737,0,0,1,.479.539.92.92,0,0,1-.265.833c-.407.419-.829.839-1.238,1.244q-.36.357-.719.717a2.025,2.025,0,0,0-.01,3.074c.8.8,1.637,1.644,2.5,2.5a2.181,2.181,0,0,0,1.537.694,2.191,2.191,0,0,0,1.545-.7q.962-.957,1.918-1.92a.93.93,0,0,1,.654-.329.884.884,0,0,1,.316.064c.25.1.506.276.508.88q0,.63,0,1.26,0,.742,0,1.485A2.032,2.032,0,0,0,14.723,33l1.566,0h1.935a2.032,2.032,0,0,0,2.213-2.2c0-.278,0-.555,0-.832,0-.614-.007-1.248.014-1.869a1.212,1.212,0,0,1,.18-.628.7.7,0,0,1,.583-.318.982.982,0,0,1,.672.308c.368.36.732.726,1.1,1.092q.444.446.89.89a2.042,2.042,0,0,0,3.012,0c.778-.767,1.611-1.6,2.546-2.543a2.013,2.013,0,0,0-.012-3.051q-.385-.387-.773-.773-.561-.56-1.119-1.123a1.529,1.529,0,0,1-.294-.377.76.76,0,0,1,.037-.738.86.86,0,0,1,.724-.393c.359-.007.718-.008,1.077-.008l.72,0h1.035a2.025,2.025,0,0,0,2.17-2.179q0-1.751,0-3.5a2.032,2.032,0,0,0-2.215-2.2m-5.3,7.629a2.641,2.641,0,0,0,.639,3.043q.573.58,1.151,1.155.394.393.788.788c.151.153.16.208.16.211s-.009.056-.157.2q-1.234,1.24-2.474,2.474c-.15.149-.205.158-.208.158s-.056-.009-.207-.159q-.349-.347-.694-.7c-.422-.425-.858-.865-1.3-1.289a2.827,2.827,0,0,0-1.964-.81,2.621,2.621,0,0,0-2.537,1.867,3.267,3.267,0,0,0-.132.937c-.009.606-.008,1.22-.007,1.814q0,.467,0,.934c0,.284-.011.284-.271.284H16.479l-1.77,0c-.242,0-.257,0-.258-.266q0-.686,0-1.372t0-1.372a2.668,2.668,0,0,0-2.525-2.816,2.544,2.544,0,0,0-.262-.014,2.675,2.675,0,0,0-1.912.871l-.813.813q-.552.552-1.105,1.1c-.159.158-.216.171-.222.173s-.058-.015-.215-.17Q6.169,26.828,4.946,25.6c-.156-.157-.17-.214-.171-.22a.708.708,0,0,1,.174-.217q.339-.341.681-.679c.422-.42.859-.854,1.282-1.29A2.809,2.809,0,0,0,7.7,20.772a2.6,2.6,0,0,0-1.395-1.9,3.272,3.272,0,0,0-1.322-.315c-.343-.015-.717-.022-1.175-.022-.254,0-.509,0-.764,0s-.505,0-.758,0H2.195c-.218,0-.263-.037-.263-.037s-.035-.043-.035-.251q0-1.765,0-3.531c0-.261,0-.271.284-.272l1.464,0,1.277,0A2.71,2.71,0,0,0,6.876,9.767Q6.3,9.187,5.725,8.613q-.394-.393-.788-.788c-.151-.152-.16-.208-.16-.211s.009-.056.157-.2Q6.168,6.17,7.408,4.935c.15-.149.205-.158.207-.158s.056.009.208.159q.347.346.692.695c.422.426.859.866,1.3,1.291a2.831,2.831,0,0,0,1.965.81A2.622,2.622,0,0,0,14.3,5.9a3.268,3.268,0,0,0,.142-.97c.01-.608.008-1.226.007-1.822q0-.463,0-.926c0-.282.011-.282.273-.283h2.841l.718,0c.242,0,.256,0,.257.268,0,.341,0,.683,0,1.024,0,.627-.005,1.276.009,1.915a2.68,2.68,0,0,0,3.865,2.361,3.345,3.345,0,0,0,.841-.623c.43-.414.857-.843,1.27-1.258q.328-.33.657-.659c.143-.142.2-.15.2-.15s.054.007.194.147q1.25,1.246,2.495,2.5c.14.141.148.194.149.2s-.009.054-.15.2q-.362.364-.726.725c-.415.412-.844.838-1.258,1.266a2.81,2.81,0,0,0-.789,2.422,2.6,2.6,0,0,0,1.394,1.9,3.276,3.276,0,0,0,1.321.316c.344.015.717.022,1.176.022.255,0,.509,0,.764,0s.506,0,.758,0H30.8c.218,0,.264.036.264.037s.034.044.035.25q0,1.766,0,3.531c0,.261,0,.271-.283.272l-1.456,0-1.286,0a2.657,2.657,0,0,0-2.594,1.643"
                      transform="translate(0 0)"
                      fill="#fff"
                    />
                    <path
                      id="Tracé_15"
                      data-name="Tracé 15"
                      d="M35.389,29.661h-.015A5.722,5.722,0,0,0,29.656,35.4a5.724,5.724,0,1,0,5.733-5.743M38.1,32.683a3.834,3.834,0,0,1-2.709,6.534h-.025A3.831,3.831,0,1,1,38.1,32.683m-2.719-1.476Z"
                      transform="translate(-18.884 -18.887)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <div className="flex pl-8 ">
              {' '}
              <button className="rounded-2xl hover:bg-blue-200  w-20 h-20 text-4xl z-0 pt-3 bg-primary-color text-white">
                ?
              </button>{' '}
            </div>
          </div>

          <div className=" z-0">
            {' '}
            <h1 className="text-5xl text-primary-color font-righteous">
              MEUDON{' '}
              <span className="italic text-3xl pl-8 pr-8 text-black">vs</span>{' '}
              RAMBOUILLET
            </h1>
          </div>
          <div className="pr-20 z-0">
            <button className="rounded-2xl hover:bg-blue-200 w-20 h-20 pl-2 bg-primary-color text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64.058"
                height="64.058"
                viewBox="0 0 64.058 64.058"
              >
                <g transform="translate(-357.971 -294.025)">
                  <path
                    id="Tracé_42"
                    data-name="Tracé 42"
                    d="M18.769,0V20.131H0V26H18.769V46.134h5.977V26H44.458V20.131H24.746V0Z"
                    transform="translate(390.593 294.025) rotate(45)"
                    fill="#fff"
                  />
                  <path
                    id="Tracé_42_-_Contour"
                    data-name="Tracé 42 - Contour"
                    d="M20.269,1.5V21.631H1.5V24.5H20.269V44.634h2.977V24.5H42.958V21.631H23.246V1.5H20.269M18.769,0h5.977V20.131H44.458V26H24.746V46.134H18.769V26H0V20.131H18.769Z"
                    transform="translate(390.593 294.025) rotate(45)"
                    fill="#c09628"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'block',
            margin: 'auto',
            width: '50%',
            top: '-10%',
            position: 'relative',
          }}
        >
          <Timer />
        </div>

        <div
          style={{
            display: 'block',
            margin: '40px',
            width: '30%',
            position: 'absolute',
            top: '70%',
            left: '6%',
            marginTop: '-20px',
          }}
        >
          <button className=" hover:bg-blue-200 w-96 h-16 text-5xl text-primary-color flex  ">
            <svg
              className="pb-20"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="132"
              viewBox="0 0 75 132"
            >
              <text
                id="_"
                data-name="+"
                fill="#c09628"
                fontSize="120"
                fontFamily="HindGuntur-Light, Hind Guntur"
                fontWeight="300"
              >
                <tspan x="18.46" y="78">
                  +
                </tspan>{' '}
              </text>
            </svg>
            Remplacements
          </button>
        </div>

        <div
          style={{
            display: 'block',
            margin: '40px',
            width: '40%',
            position: 'absolute',
            top: '70%',
            left: '68%',
            marginTop: '-20px',
          }}
        >
          <button className=" hover:bg-blue-200 w-96 h-16 text-5xl text-primary-color flex ">
            <svg
              className="pb-20"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="132"
              viewBox="0 0 75 132"
            >
              <text
                id="_"
                data-name="+"
                fill="#c09628"
                fontSize="120"
                fontFamily="HindGuntur-Light, Hind Guntur"
                fontWeight="300"
              >
                <tspan x="18.46" y="78">
                  +
                </tspan>{' '}
              </text>
            </svg>
            Remplacements
          </button>
        </div>

        <div
          style={{
            display: 'block',
            margin: '10px',
            width: '30%',
            position: 'absolute',
            top: '88%',
            left: '6%',
            marginTop: '-20px',
          }}
        >
          <h1
            className=" text-primary-color font-righteous"
            style={{ fontSize: '12em' }}
          >
            86
          </h1>
        </div>

        <div
          style={{
            display: 'block',
            margin: '10px',
            position: 'absolute',
            top: '88%',
            left: '75%',
            marginTop: '-20px',
          }}
        >
          <h1
            className=" text-primary-color font-righteous"
            style={{ fontSize: '12em' }}
          >
            107
          </h1>
        </div>

        <div
          style={{
            display: 'block',
            margin: '40px',
            width: '50%',
            position: 'absolute',
            top: '80%',
            left: '39%',
            marginTop: '-20px',
          }}
        >
          <h1
            className="text-8xl text-primary-color"
            style={{ position: 'relative', left: '12%' }}
          >
            4
          </h1>
          <div className="flex">
            {' '}
            <h1
              className="border-4 rounded-xl text-center w-10 text-4xl text-primary-color pt-3 bg-white"
              style={{ width: '65px', height: '65px', borderColor: '#bf9629' }}
            >
              2
            </h1>{' '}
            <h1 className="pl-2 pr-2 pt-6 text-3xl text-black">FAUTES</h1>{' '}
            <h1
              className="border-4 rounded-xl text-center w-10 text-4xl text-primary-color pt-3 bg-white"
              style={{ width: '65px', height: '65px', borderColor: '#bf9629' }}
            >
              4
            </h1>{' '}
          </div>
          <img
            className="pl-4"
            style={{ width: '240px', marginTop: '-30px' }}
            src="https://cdn.discordapp.com/attachments/458540580318871591/932573971587690516/sportizer_detoure.png"
            alt="logo"
          />
        </div>
      </div>
    </>
  )
}

export default BasketMatch
