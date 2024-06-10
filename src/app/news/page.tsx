import { redirect } from 'next/navigation'
import { Suspense } from 'react';
import Loading from './loading';

async function fetchNews() {
    console.log(1);
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    console.log(2);
    const newsAPIKey = '15f5892f3e83499ea98822c79a9fee05';
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${newsAPIKey}`).then((res) => res.json());;
    console.log("res: ", { sta: res.status });
    if (res.status !== 'ok') return undefined
    return res.articles
}

export default async function Profile({ params }: { params: { id: string } }) {
    const news = await fetchNews()
    if (!news) {
        redirect('/todos')
    }

    return (
        <Suspense fallback={<Loading />}>
            <div>
                <h1>News</h1>
                <h3>technology</h3>
                <ul>
                    {
                        news && news.map((singleNews, index) => <li key={index}>{singleNews.title}</li>)
                    }
                </ul>
            </div>
        </Suspense>
    )
}