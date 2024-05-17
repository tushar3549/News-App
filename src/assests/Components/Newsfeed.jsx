import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const Newsfeed = () => {
    const [articles, setArticles] = useState([]);

    // useEffect(() => {
    //     const fetchArticles = async () => {
    //         try {
    //             let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
    //             const response = await fetch(url);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const data = await response.json();
    //             setArticles(data.articles);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchArticles();
    // }, []);

    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));


    }, [])


    return (
        <div>
            <h2 className='text-center'><span className='badge bg-success text-white fs-4'>News Paper</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    );
};

export default Newsfeed;
