import moment from 'moment'

export const formatTime = (startTime, endTime ) =>
    startTime && endTime ? moment(startTime).format('h:mm A') + ' - ' + moment(endTime).format('h:mm A') : ''

export const formatDateInMMM = (startTime) => (startTime ? moment(startTime).format('Do MMMM YYYY') : '')