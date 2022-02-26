import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const footerList = [
  {
    pic: '/footer/f1.png',
    url: 'https://t.me/ZKCross'
  },
  {
    pic: '/footer/f2.png',
    url: 'https://discord.gg/eveHqJqzdh'
  },
  {
    pic: '/footer/f3.png',
    url: 'https://twitter.com/thezkcross'
  },
  {
    pic: '/footer/f4.png',
    url: 'https://blog.zkcross.org'
  }
]
const list1 = [
  {
    url: '/c4/c4-1.png',
    txt: "Exchange tokens of any chains at one place"
  },
  {
    url: '/c4/c4-2.png',
    txt: "No token listing requirements"
  },
  {
    url: '/c4/c4-3.png',
    txt: "No centralized human intervention with token deposit/withdraw"
  },
  {
    url: '/c4/c4-4.png',
    txt: "Non-custodian, fully transparent with users funds"
  },
  {
    url: '/c4/c4-4.png',
    txt: "Profit sharing with users"
  },
  {
    url: '/c4/placeholder.png',
    txt: ""
  }
]

const partnerList = function() {
  return Array(8).fill(8).map((item, index) => {
    return "/partner/zkp" + (index + 1) + '.png'
  })
}()

const c7LeftList = [
  {
    url: '/c7/github.png',
    link: 'https://github.com/zkcrossteam',
    title: 'Github',
    desc: 'https://github.com/zkcrossteam'
  },
  {
    url: '/c7/doc.png',
    link: 'https://docs.zkcross.org',
    title: 'Docs',
    desc: 'https://docs.zkcross.org'
  },
]
const c7list = [
  {
    url: '/c7/c71.png',
    link: 'https://discord.gg/8mgBwVen',
    title: 'Discord Community',
    desc: 'Get involved with our community on discord'
  },
  {
    url: '/c7/c72.png',
    link: 'https://twitter.com/thezkcross',
    title: 'Twitter',
    desc: 'Follow @thezkcross for the latest news.'
  },
  {
    url: '/c7/c73.png',
    link: 'https://t.me/ZKCross',
    title: 'Telegram',
    desc: 'Chat with the worldwide community on Telegram.'
  },
  {
    url: '/c7/c74.png',
    link: 'https://zkcross.medium.com/',
    title: 'Medium',
    desc: 'Get latest updates from our blog post.'
  },
]


export default function Home() {

  const [navList, setNavList] = useState([
    {
      title: "About",
      selected: false,
      id: "#about"
    },
    {
      title: "Roadmap",
      selected: false,
      id: "#roadmap"
    },
    {
      title: "Products",
      selected: false,
      id: "#products"
    },
    {
      title: "Home",
      selected: true,
      id: "#home"
    }
  ])

  // function handleResize(e) {
  //   console.log('eee>', e)
  // }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // window.addEventListener('resize', handleResize)
    setIsMobile(window.innerWidth < 834)
  })


  return (
    <div className={styles.container}>
      <Head className={styles.head}>
        <title>ZKCross - DeFi cross-chain potocol</title>
        <meta name="description" content="A protocol built for DeFi protocol with multichain zkRollup" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <link href=" https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.header}>
        <div className={styles.logo}>
          <img alt="" src="/logo.png" />
        </div>
        <div className={styles.navigator}>
          <div className={styles.launch}>Launch test</div>
          {
            navList.map((item, index) => {
              return (
                <a href={item.id}
                  key={item.id}
                  className={item.selected ? styles.active : ''}
                  onClick={
                    () => {
                      const lst = navList.map((nav, idx) => {
                        return {
                          ...nav,
                          selected: index === idx
                        }
                      })
                      /* setNavList(lst) */
                    }
                  }>
                  {item.title}
                </a>
              )
            })
          }

        </div>
      </div>

      <main className={styles.main}>

        <div id="home" className={styles.con1}>
          <div className={styles.c1left}>
            <p className={styles.yi}>一</p>
            <h1 className={styles.title} text="Mission and vision">
              Mission and vision
            </h1>
            <p className={styles.desc}>
              Utilizes cutting-edge technologies to create a secure and decentralized cross-chain infrastructure for the evolving crypto world.
            </p>
          </div>

          <div className={styles.c1right}>
            <img alt="" src="/con1.png" />
          </div>
        </div>

        {/* con2 */}

        <div id="about" className={styles.con2}>
          <div className={styles.c2left}>
            <img alt="" src="/products.png" />
          </div>
          <div className={styles.c2right}>
            <h3 className={styles.c2title}>
              A trustworthy cross-chain protocol built with  multichain zkRollup
            </h3>
            <p className={styles.c2desc}>
              ZKCross establishes connections to multiple blockchains in order to create a decentralized platform. This platform enables the DeFi ecosystem to develop cross-chain applications that require high levels of security, efficiency, and scalability.
            </p>
          </div>
        </div>

        {/* con3 */}

        <div className={styles.con3}>
          <h3 className={styles.c3title}>Technologies Highlights</h3>
          <p className={styles.c3desc}>
            ZKCross, as a protocol, keeps track of and synchronizes global state changes across several blockchains by establishing an omnipresent layer that serves as a cross-chain layer2. It addresses the issue of cross-chain third parties' reliability by verifying the computation and performing a multichain rollup using zk-snark proofs.
          </p>
          <div className={styles.c3box}>

            <div className={styles.sbox}>
              <div>
                <img alt="" src="/zk1.png" />
              </div>
              <h3>Zero-knowledge-proof</h3>
              <p>zk-snark to improve cross-chain security.</p>
            </div>

            <div className={styles.sbox}>
              <div>
                <img alt="" src="/zk2.png" />
              </div>
              <h3>Multichain zkRollup</h3>
              <p>Multichain rollup to save cost and improve scalability. </p>
            </div>

            <div className={styles.sbox}>
              <div>
                <img alt="" src="/zk3.png" />
              </div>
              <h3>Cross-chain layer2</h3>
              <p>High throughput, low gas and more possibilities, e.g. multichain NFT, cross-chain derivatives.</p>
            </div>

          </div>
        </div>

        {/* con4 */}

        <div className={styles.con4} id="products">

          <div className={styles.c4left}>

            <div>
              <h3>
                A multichain Defi platform with similar functionalities and user experience to CEX is available.
              </h3>
              <p>
                It combines cross-chain layer 2 and multichain rollup methods to create a network that allows users to trade effectively while maintaining maximal asset control. Multichain DeFi products can also be rapidly integrated into our cross-chain layer2 network.
              </p>
              <div className={styles.leftbottom}>

                {
                  list1.map((item, index) => {
                    return <div className={styles.lbitem} key={index}>
                      <div className={styles.picbox}>
                        <img alt="" src={item.url} />
                      </div>
                      <p className={styles.txtbox}>
                        {item.txt}
                      </p>
                    </div>
                  })
                }

              </div>
            </div>

          </div>

          <div className={styles.c4right}>
            <img alt="" src="/c4.png" />
          </div>
        </div>

        {/* con5 */}

        <div className={styles.con5} id="roadmap">

          <div className={styles.c5txt}>
            <h3>Roadmap</h3>
            <p>milestones and vision for the future</p>
          </div>
          {
            !isMobile && <img alt="" src="/roadmap.png" />
          }

          {
            isMobile && <div className={styles.cell}>
              <img alt="" src="/roadmap/r1.png" />
              <img alt="" src="/roadmap/r2.png" />
              <img alt="" src="/roadmap/r3.png" />
              <img alt="" src="/roadmap/r4.png" />
              <img alt="" src="/roadmap/r5.png" />
            </div>
          }

        </div>

        {/* con6 */}
        {/*
        <div className={styles.con6}>
          <h3 className={styles.c6top}> Partner and Investor </h3>
          <div className={styles.investorlist}>
            {
              partnerList.map((item, index) => {
                return <div className={styles.investor} key={index}>
                  <img alt="" src={item} />
                </div>
              })
            }
          </div>
        </div>
*/}
        {/* con7 */}

        <div className={styles.con7} id="about">
          <div className={styles.c7left}>
            <h3>
              INTERESTED IN FINDING
              OUT MORE
              ABOUT ZKCross?
            </h3>

            <div className={styles.c7leftbox}>
              {
                c7LeftList.map((item, index) => {
                  return <div className={styles.c7item} key={index}>
                    <div className={styles.c7itemtop} onClick={
                      () => {
                        window.open(item.link)
                      }
                    }>
                      <div>
                        <img alt="" src={item.url} />
                      </div>
                      <span>{item.title}</span>
                      <img alt="" src="/arrow.png" />
                    </div>
                    <p className={styles.c7itembottom}>
                      {item.desc}
                    </p>
                  </div>
                })
              }
            </div>

            {/* <p className={styles.githublink}> */}
            {/*   <a href="https://github.com/zkcrossteam"> */}
            {/*     Github：https://github.com/zkcrossteam */}
            {/*   </a> */}
            {/* </p> */}
            {/* <p> */}
            {/*   <a href="Docs: https://docs.zkcross.org"> */}
            {/*   </a> */}
            {/*   Docs: https://docs.zkcross.org */}
            {/* </p> */}

          </div>
          <div className={styles.c7right}>
            <div>
              {
                c7list.map((item, index) => {
                  return <div className={styles.c7item} key={index}>
                    <div className={styles.c7itemtop} onClick={
                      () => {
                        window.open(item.link)
                      }
                    }>
                      <div>
                        <img alt="" src={item.url} />
                      </div>
                      <span>{item.title}</span>
                      <img alt="" src="/arrow.png" />
                    </div>
                    <p className={styles.c7itembottom}>
                      {item.desc}
                    </p>
                  </div>
                })
              }
            </div>
          </div>
        </div>

      </main >

      <footer className={styles.footer}>
        <div className={styles.fooleft}>
          <div className={styles.foologo}>
            <img alt="" src="/logo.png" />
          </div>
        </div>
        <div className={styles.fooright}>

          <div className={styles.contact}>
            {
              footerList.map((item, index) => {
                return <a href={item.url} key={index}>
                  <img alt="" src={item.pic} />
                </a>
              })
            }
          </div>

          <div className={styles.navlist}>
            <div className={styles.navigator}>
              {
                navList.map((item, index) => {
                  return (
                    <a href={item.id}
                      key={item.id}
                      className={item.selected ? styles.active : ''}
                      onClick={
                        () => {
                          const lst = navList.map((nav, idx) => {
                            return {
                              ...nav,
                              selected: index === idx
                            }
                          })
                          /* setNavList(lst) */
                        }
                      }>
                      {item.title}
                    </a>
                  )
                })
              }
            </div>

          </div>

        </div>
      </footer>
    </div >
  )
}
