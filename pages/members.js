import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerMembers from '../components/BannerMembers'

export default () => (
    <Layout>
        <Head>
            <title>成员 / Members</title>
            <meta name="description" content="Members Page" />
        </Head>

        <div>
            <BannerMembers />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>你好 / Hello</h2>
                        </header>
                        <p>这个是一个新的工作室，从原工作室分离的人组成的，致力于寻找更好的发展方式。因为有了光，才有了念。<br />
                        This is a new studio, composed of people separated from the original studio, dedicated to finding a better way of development. Because of the Hikari, they have mindfulness. <br />
                        <strong>虽然工作室的人很少，但是我们依然在保持开发。这个工作室由中学生组成，当然欢迎你的加入。<br />
                        Although there are few in the studio, we still keep developing. This studio is composed of middle school students, of course you are welcome to join.</strong></p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="">
                            <a className="image"><img src="https://natsuka-cos-1302639736.file.myqcloud.com/starsmoe.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>星萌 / Starsmoe</h3>
                                </header>
                                <p>此去经年，应是良辰好景虚设，便从有千种风情，更与何人说。<br/>
                                下雨的伞 / RainyUmbrella<br/>
                                <strong>Web前端与界面设计</strong><br/>
                                <strong>Web front end and interface design</strong></p>
                                <ul className="actions">
                                    <li><Link href="https://starsmoe.xyz" target="_blank"><a className="button">个人主页 / Personal Space</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="">
                            <a className="image"><img src="https://natsuka-cos-1302639736.file.myqcloud.com/hattoemi.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>洛诗旅 / Hattoemi</h3>
                                </header>
                                <p>水落鱼梁浅，天寒梦泽深。万物相栖相连，一梦成蝶成愿。<br/>
                                创造神话 / Creation myth<br/>
                                <strong>桌面应用程序开发与全栈</strong><br/>
                                <strong>Desktop application development and full stack</strong></p>
                                <ul className="actions">
                                    <li><Link href="https://a7b8i06c49.ml" target="_blank"><a className="button">个人主页 / Personal Space</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="">
                            <a className="image"><img src="https://natsuka-cos-1302639736.file.myqcloud.com/mog.webp" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>默歌 / Mog.</h3>
                                </header>
                                <p>qwqwqwqwqwqwqwqwqwqwq<br/>
                                <strong>职业打酱油与活跃气氛</strong><br/>
                                <strong>Professional soy sauce and active atmosphere</strong></p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
