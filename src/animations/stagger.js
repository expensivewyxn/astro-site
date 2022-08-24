export const container = {
    hidden: { opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
        x: 100,
        transition: {
            staggerChildren: 0.2,
            when: 'afterChildren',
            duration: 0.6
        }
    }
}

export const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
}