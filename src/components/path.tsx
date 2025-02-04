import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Path.module.css'
import '@/styles/Path.module.css'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';


interface path {
    start: number,
    end: number,
    icon: string,
    size: number,
    company: string,
    occupation: string
}

interface pathProps {
    index: number;
    name: string;
    pathData: Array<path>;
    bookmarked: boolean;
    visible: boolean;
    bookmarkStateChange : (index: number) => void;
} 


export default function Path(props: pathProps) {
    
    const[path, setPath] = useState(props);

    function updateBookmark() {
        setPath((prevState) => ({
            ...prevState,
            bookmarked: !prevState.bookmarked,
          }));
    }

    useEffect(() => {
        //console.log(props);
    }, [props]);

    return (
        <div>
            <Head>
            </Head>
        {path.visible ? (
            <div className = {styles.container}>
                <div className = {styles.name}>
                    <p>{path.name}</p>
                </div>
                <div className = {styles.path}>
                    {path.pathData.map((data, index) => (
                    <div key={index} className={styles.pathContainer}>
                    <div className = {styles.circleOverall}>
                    <div className={styles.circleIcon}>
                        <img 
                        className={styles.icon}
                        src={data.icon}></img>
                    </div>
                    <div className={styles.jobDesc}>
                        <p>{data.occupation}</p>
                        <p>@{data.company}</p>
                    </div>
                    </div>
                    <div 
                    style={{ width:  `${(data.end - data.start)*3}vw`}}
                    className={styles.timeline}
                    ></div>
                    </div>
                    ))}
                    {path.bookmarked ? (
                        <img 
                        onClick={() => {updateBookmark(); props.bookmarkStateChange(path.index)}}
                        className={styles.bookmark}
                        src='/img/bookmarkFilled.png'/>
                        
                    ) : (
                        <img 
                        onClick={() => {updateBookmark(); props.bookmarkStateChange(path.index)}}
                        className={styles.bookmark}
                        src='/img/bookmarkUnfilled.png'/>
                    )}
                </div>
            </div>
        ) : (
            <div></div>
        )}
        </div>
    );
}