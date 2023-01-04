import React, { useState, useEffect } from 'react'

import { timer } from '../services/webSocket'

import './timer.css'

const Timer = () => {
  var [second, setSecond] = useState('00')
  var [minute, setMinute] = useState('10')
  //counter en marche?
  const [isActive, setIsActive] = useState(false)
  //counter : minutes*60 + seconds
  const [counter, setCounter] = useState(600)

  //popup sur Correction
  const [showDialog, setShowDialog] = useState(false)
  const open = () => {
    setIsActive(false)
    setShowDialog(true)
  }
  const close = () => setShowDialog(false)
  const closetime = () => setShowTime(false)
  const [showDialogTime, setShowTime] = useState(false)
  const [BuzzerColor, setBuzzerColor] = useState('#bf9629')

  useEffect(() => {
    let intervalId

    // lancement du timer
    if (isActive) {
      setTimeout(function () {
        intervalId = setInterval(() => {
          //toFixed(number) = nombre de chiffre apres la virgule
          let secondCounter = (counter % 60).toFixed(0)
          let minuteCounter = Math.floor(counter / 60)
          let computedSecond
          let computedMinute

          //1 minute restante
          if (counter > 60) {
            //secondes à un chiffre = rajouter 0 avant
            computedSecond =
              String(secondCounter).length === 1
                ? `0${secondCounter}`
                : secondCounter

            // minutes à 1 chiffre = rajouter 0 avant
            computedMinute =
              String(minuteCounter).length === 1
                ? `0${minuteCounter}`
                : minuteCounter
          } else {
            // un 0 après la virgule
            secondCounter = (counter % 60).toFixed(1)

            //secondes à 2 chiffres = pas de 0 avant
            computedSecond =
              String(secondCounter).length === 2
                ? `${secondCounter}`
                : secondCounter

            // minutes à 1 chiffre = rajouter 0 avant
            computedMinute =
              String(minuteCounter).length === 1 ? `` : minuteCounter
          }

          // définir minutes et secondes
          setSecond(computedSecond)
          setMinute(computedMinute)

          //code éxécuté toutes les 0.1s
          setCounter((counter) => counter - 0.1)
        }, 100)

        //Stoper le timer
        if (counter < 0) {
          setIsActive(false)
          //Buzzer
          buzzer()

          //Timer se met à 2min (pub)
          setCounter(120)
          setMinute('02')
          setSecond('00')

          //attendre 10s avant de relancer le timer
          setTimeout(() => {
            setIsActive(true)
          }, 10000)
        }
      })
    }

    return () => clearInterval(intervalId)
  }, [isActive, counter])

  // Remettre le timer à 10 minutes
  // function resetTimer() {
  //   setIsActive(false)

  //   setMinute('10')
  //   setSecond('00')
  //   setCounter(600)
  // }

  // mettre le timer à 1 minute
  function temps_mort() {
    setIsActive(false)
    setMinute('00')
    setSecond('60')
    setCounter(60)
    setTimeout(function () {
      if (counter > 60) {
        setIsActive(true)
      }
    }, 10000)
  }

  //Changer le temps manuellement
  function valider() {
    setShowDialog(false)
    if (minute == 0) {
      minute = '00'
    }
    if (second == 0) {
      second = '00'
    }
    setCounter(parseInt(minute, 10) * 60 + parseInt(second, 10))
    setIsActive(true)
  }

  //Buzzer
  const buzzer = () => {
    console.log(BuzzerColor)
    setBuzzerColor('#ff0000')
    setTimeout(function () {
      setBuzzerColor('#bf9629')
      console.log('BRUITTTTTTTTTTTTTTTTTT')
    }, 4000)
  }

  // Envoie dans la socket 'timer' --> screen
  const time = { minute, second }
  timer(time)

  return (
    <div>
      <button className="containertimer border-4 rounded font-righteous">
        <div className="time " onClick={() => setIsActive(!isActive)}>
          {counter > 60 && <span className="minute">{minute}</span>}

          {counter > 60 && <span style={{ color: '#bf9629' }}>:</span>}

          {counter > 10 && <span className="second">{second}</span>}
          {counter < 10 && (
            <span
              style={{ color: 'red', fontWeight: 'bold' }}
              className="second"
            >
              {second}
            </span>
          )}
        </div>
        <div className="buttons">
          {/* <Dialog
            className="max-w-sm rounded overflow-hidden shadow-lg"
            isOpen={showDialog}
            onDismiss={close}
          >
            <p>
              Minutes:
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
              />
            </p>{' '}
            <br />
            <p>
              Secondes:
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                value={second}
                onChange={(e) => setSecond(e.target.value)}
              />{' '}
            </p>{' '}
            <br />
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={valider}
            >
              Valider
            </button>
          </Dialog> */}

          {/* <Dialog isOpen={showDialogTime} onDismiss={closetime}>
            <h1>LANCER LA PUB ?</h1>
            <button>OUI</button>
            <button>NON</button>
          </Dialog> */}
        </div>
      </button>

      <div className="grid place-items-center pt-18 ">
        <div className="pt-6  ">
          <button
            className="rounded-2xl hover:bg-gray-400  text-3xl py-6 inline-flex items-center w-72 justify-center h-20 bg-primary-color text-white"
            onClick={open}
          >
            Correction
          </button>{' '}
          <br />
        </div>
        <div className=" pt-6 ">
          <button
            className="rounded-2xl hover:bg-gray-400 text-3xl py-6 inline-flex items-center w-72 justify-center h-20 text-white"
            style={{ backgroundColor: BuzzerColor }}
            onClick={buzzer}
          >
            <svg
              className="pr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="34"
              viewBox="0 0 16.882 34"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_24"
                    data-name="Rectangle 24"
                    width="16.882"
                    height="34"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g id="Groupe_49" data-name="Groupe 49" transform="translate(0)">
                <g
                  id="Groupe_44"
                  data-name="Groupe 44"
                  transform="translate(0 0)"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Tracé_10"
                    data-name="Tracé 10"
                    d="M21.441,16.933a17.678,17.678,0,0,1,4.622-11.8c.194-.213.393-.421.591-.63,1.319-1.4,1.464-2.71.418-3.773-1.1-1.123-2.438-.957-3.891.493a21.152,21.152,0,0,0-6.109,11.383A21.859,21.859,0,0,0,23.16,32.749c1.435,1.476,2.779,1.637,3.9.534,1.078-1.062.919-2.434-.51-3.9a17.717,17.717,0,0,1-5.107-12.45"
                    transform="translate(-16.643 0)"
                    fill="#fff"
                  />
                  <path
                    id="Tracé_11"
                    data-name="Tracé 11"
                    d="M0,32.805a10.725,10.725,0,0,0,3.515,7.987,2.35,2.35,0,0,0,3.275.281c.964-.711.943-2.241.063-3.423C4.1,33.959,4.092,31.771,6.815,28.2c1.111-1.457,1.071-2.619-.126-3.634-1.113-.944-2.235-.821-3.464.483A11.539,11.539,0,0,0,0,32.805"
                    transform="translate(9.264 -15.656)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            Buzzer
            <svg
              className="pl-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="34"
              viewBox="0 0 16.884 34"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_24"
                    data-name="Rectangle 24"
                    width="16.884"
                    height="34"
                    fill="#fff"
                  />
                </clipPath>
              </defs>
              <g
                id="Groupe_50"
                data-name="Groupe 50"
                transform="translate(-14)"
              >
                <g
                  id="Groupe_44"
                  data-name="Groupe 44"
                  transform="translate(14 0)"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Tracé_10"
                    data-name="Tracé 10"
                    d="M22.965,16.933a17.677,17.677,0,0,0-4.623-11.8c-.194-.213-.393-.421-.591-.63-1.319-1.4-1.464-2.71-.418-3.773,1.1-1.123,2.439-.957,3.892.493a21.151,21.151,0,0,1,6.11,11.383,21.858,21.858,0,0,1-6.088,20.138c-1.435,1.476-2.78,1.637-3.9.534-1.079-1.062-.919-2.434.51-3.9a17.716,17.716,0,0,0,5.108-12.45"
                    transform="translate(-10.881 0)"
                    fill="#fff"
                  />
                  <path
                    id="Tracé_11"
                    data-name="Tracé 11"
                    d="M7.619,32.805A10.725,10.725,0,0,1,4.1,40.793a2.35,2.35,0,0,1-3.276.281c-.964-.711-.943-2.241-.063-3.423C3.518,33.959,3.527,31.771.8,28.2-.307,26.742-.267,25.581.93,24.565c1.113-.944,2.236-.821,3.464.483a11.538,11.538,0,0,1,3.225,7.757"
                    transform="translate(0 -15.656)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </button>{' '}
          <br />
        </div>
        <div className="pt-6">
          <button
            className="rounded-2xl hover:bg-gray-400  text-3xl py-8 inline-flex items-center justify-center w-96 h-20 bg-primary-color text-white"
            onClick={temps_mort}
          >
            Temps mort 1:00
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer
