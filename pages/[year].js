import ShowMonth from '../components/ShowMonth';
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight, faHeart} from '@fortawesome/free-solid-svg-icons'

async function getStaticPaths() {
    const years = await fetch('https://calendar-api-six.vercel.app/api/?initial=1900&final=2100')
        .then((res) => res.json())

    const paths = Object.keys(years).map(
        year => {return {
            params: {year: year}
        }}
    )
    
    return {
        paths,
        fallback: true,
    }
}

async function getStaticProps(context) {
    const queryYear = isNaN(context.params.year) ? new Date().getFullYear() : parseInt(context.params.year);
    const year = await fetch(`https://calendar-api-six.vercel.app/api/${queryYear}`)
        .then((res) => res.json())

    return {
        props: {
            year, queryYear
        }
    }
} 

export {getStaticPaths, getStaticProps}

function ShowCalendar({year, queryYear}) {
    let [inputYear, setInputYear] = useState(queryYear);
    const router = useRouter();

    useEffect(() => {
        setInputYear(queryYear ? queryYear : new Date().getFullYear());
    }, 
    [queryYear])

    if (router.isFallback) {
        return <div>loading...</div>
    }

    const handleChange = (text) => {
        setInputYear(text.replace(/[^0-9]*/g, ''))
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        router.push(`/${inputYear}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.yearChanger}>
                <Link href={`/${queryYear - 1}`}>
                    <span>
                    <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronLeft}/>
                    </span>
                </Link>
                <form className={styles.calendarForm} onSubmit={handleSubmit}>
                    <input type='text' maxLength={4} value={inputYear} onChange={(t) => {handleChange(t.target.value)}}/>
                </form>
                <Link href={`/${queryYear + 1}`}>
                    <span>
                    <FontAwesomeIcon className={styles.chevronIcon} icon={faChevronRight}/>
                    </span>
                </Link>
            </div>
            <div className={styles.monthsContainer}>
                {
                    Object.keys(year).map(
                        month => (
                            <ShowMonth key={month} month={month}>{year[month]}</ShowMonth>
                        )
                    )
                }
            </div>
            <footer className={styles.footer}>
                <p>
                    Made with <FontAwesomeIcon className={styles.heartIcon} icon={faHeart}/> by <Link href={'https://github.com/BPThiago'}>Thiago B.</Link>
                </p>
            </footer>
        </div>
    )
}

export default ShowCalendar