import { InlineForm, InlineText } from 'react-tinacms-inline'
import Link from 'next/link'

import Layout from '../components/Layout'
// import Banner from '../components/Banner'

import { useForm, usePlugin, useCMS, TinaProvider, TinaCMS } from 'tinacms'

export default function Index({ index: initialIndex, preview}) {

  const formConfig = {
  id: initialIndex,
  label: 'Blog Post',
  initialValues: initialIndex,
  onSubmit: (values) => {
    alert(`Submitting ${values.title}`)
  },
  fields: [
    {
      name: 'title',
      label: 'Post Title',
      component: 'text',
    },
  ],
}
  const [index, form] = useForm(formConfig)
  usePlugin(form)

return (
  <InlineForm form={form}>
    <Layout>
        <div>
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                    <h1>
                      <InlineText name="title" />
                    </h1>
                </header>
                <div className="content">
                <p>NEW BEGINNING, BECAUSE THERE IS LIGHT, THERE IS THOUGHT.<br />
                光念，念光。</p>
                </div>
            </div>
        </section>

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>成员 <br />
                            Members</h3>
                            <p>虽然我们人看起来很少，但是人确实很少<br/>
                            Seems less, true less also</p>
                        </header>
                        <Link href="/members"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>施工中 <br />
                            Working...</h3>
                            <p>Noting.</p>
                        </header>
                        <Link href=""><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>施工中 <br />
                            Working...</h2>
                        </header>
                        <p>Noting.</p>
                    </div>
                </section>

                <section id="three">
                  <div class="inner">
                    <header class="major">
                      <h2>历史 / History</h2>
                    </header>
                    <p>此工作室建立于2020年9月1日，无所事事，新建从未停止，创造从未开始。<br />
                    This studio set up on September 1, 2020. Done nothing. New project never stop, new creative never start.<br />
                    <strong>此部分用于记录一些大事件：</strong><br />
                    <strong>This section is used to record some meaningful story:</strong></p>
                    <ul class="list">
                      <li>2021-01-16 Natsuka 立项<br />
                      2021-01-16 Natsuka Project set up</li>
                      <br />
                      <li>2020-11-21 Charon 立项<br />
                      2020-11-21 Charon Project set up</li>
                      <br />
                      <li>2020-09-19 Aka Bootstrapper 立项<br />
                      2020-09-19 Aka Bootstrapper Project set up</li>
                      <br />
                      <li>2020-09-05 Aoi Cover 立项<br />
                      2020-09-05 Aoi Cover Project set up</li>
                      <br />
                      <li>2020-09-01 工作室成立<br />
                      2020-09-01 Studio set up</li>
                    </ul>
                  </div>
                </section>
            </div>

        </div>
    </Layout>
    </InlineForm>
  )
}
