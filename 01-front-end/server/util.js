import pino from 'pino'

const log = pino({
    enabled: !(!!process.env.LOG_DISABLED),
    transport:{ 
        target: 'pino-pretty',
        Options:{
            colorize: true
        },
    }
})

export const logger = log