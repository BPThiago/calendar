import styles from '../styles/ShowMonth.module.css'

function DifferDays(monthObject, day) {
    if (monthObject[day] == 0) {
        return (
        <span key={day} className={styles.calendarSunday}>
            {day}
        </span>
        )
    }
    return (
        <span key={day} style={{gridColumn: monthObject[day] + 1}} className={styles.calendarElement}>
            {day}
        </span>
    )
    
}

export default function ShowMonth({children, month}) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className={styles.monthName}>
            <p>
                {monthNames[month-1]}
            </p>
            <div className={styles.calendarContainer}>
                {
                    weekdays.map(weekday => (
                        <span key={weekday} className={styles.calendarMarkdown}>{weekday}</span>
                    ))
                }

                {
                    Object.keys(children).map(
                        day => DifferDays(children, day)
                    )
                }
            </div>
        </div>
    )
}